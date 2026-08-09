import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseUrl = process.env.BASE_URL ?? 'http://127.0.0.1:3000';
const canonicalBase = 'https://www.cleancharge.se';

const priorityRoutes = [
  {
    path: '/foretag',
    h1: /Laddbox för företag/i,
    links: ['/kontakt', '/fastighetsbolag', '/hela-sverige', '/monta'],
  },
  {
    path: '/fastighetsbolag',
    h1: /Laddbox för fastighetsbolag.*BRF/i,
    links: ['/kontakt', '/hela-sverige', '/samfallighet', '/monta'],
  },
  {
    path: '/laddbox-orebro',
    h1: /Laddbox i Örebro/i,
    links: ['/kontakt', '/privat', '/foretag', '/fastighetsbolag'],
  },
  {
    path: '/hela-sverige',
    h1: /Laddinfrastruktur i hela Sverige/i,
    links: ['/kontakt', '/foretag', '/fastighetsbolag', '/monta'],
  },
  {
    path: '/vad-kostar-laddbox',
    h1: /Vad kostar en laddbox/i,
    links: ['/kontakt', '/ladda-bilen-bidrag', '/privat', '/foretag'],
  },
  {
    path: '/ladda-bilen-bidrag',
    h1: /Ladda bilen-bidraget 2026/i,
    links: ['/kontakt', '/fastighetsbolag'],
  },
  {
    path: '/produkter',
    h1: /Laddboxar/i,
    links: ['/kontakt', '/foretag', '/privat', '/fastighetsbolag'],
  },
];

const sitemapPaths = [
  '/',
  '/basta-laddboxen',
  '/cookies',
  '/dc-laddstation',
  '/fastighetsbolag',
  '/foretag',
  '/hela-sverige',
  '/integritetspolicy',
  '/kontakt',
  '/ladda-bilen-bidrag',
  '/laddbox-orebro',
  '/monta',
  '/om-oss',
  '/privat',
  '/produkter',
  '/publik',
  '/samfallighet',
  '/support',
  '/vad-kostar-laddbox',
  '/villkor',
].sort();

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

async function goto(path) {
  const response = await page.goto(`${baseUrl}${path}`, { waitUntil: 'domcontentloaded' });
  assert.equal(response?.status(), 200, `${path} must return 200`);
}

function parseJsonLd(rawScripts, path) {
  return rawScripts.map((raw, index) => {
    try {
      return JSON.parse(raw);
    } catch (error) {
      throw new Error(`${path} has invalid JSON-LD script ${index + 1}: ${error.message}`);
    }
  });
}

try {
  const metadataRows = [];

  for (const route of priorityRoutes) {
    await goto(route.path);
    const row = await page.evaluate(() => {
      const normalize = (value) => value?.replace(/\s+/g, ' ').trim() ?? '';
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? '',
        ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content') ?? '',
        h1: [...document.querySelectorAll('h1')].map((node) => normalize(node.textContent)),
        links: [...document.querySelectorAll('a[href]')].map((node) => new URL(node.href).pathname),
        jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map(
          (node) => node.textContent ?? '',
        ),
      };
    });

    assert.ok(row.title, `${route.path} needs a title`);
    assert.ok(row.description, `${route.path} needs a description`);
    assert.equal(row.canonical, `${canonicalBase}${route.path}`, `${route.path} canonical mismatch`);
    assert.equal(row.ogType, 'website', `${route.path} needs og:type=website`);
    assert.equal(row.h1.length, 1, `${route.path} must have exactly one H1`);
    assert.match(row.h1[0], route.h1, `${route.path} H1 does not match its search intent`);
    for (const expectedLink of route.links) {
      assert.ok(row.links.includes(expectedLink), `${route.path} must link to ${expectedLink}`);
    }
    parseJsonLd(row.jsonLd, route.path);
    metadataRows.push({ path: route.path, ...row });
  }

  assert.equal(new Set(metadataRows.map((row) => row.title)).size, metadataRows.length, 'titles must be unique');
  assert.equal(
    new Set(metadataRows.map((row) => row.description)).size,
    metadataRows.length,
    'descriptions must be unique',
  );
  assert.equal(
    new Set(metadataRows.map((row) => row.canonical)).size,
    metadataRows.length,
    'canonicals must be unique',
  );
  console.log(`PASS priority metadata/H1/links/JSON-LD: ${metadataRows.length} routes`);

  const sitemapResponse = await page.request.get(`${baseUrl}/sitemap.xml`);
  assert.equal(sitemapResponse.status(), 200, 'sitemap must return 200');
  const sitemapXml = await sitemapResponse.text();
  const actualSitemapPaths = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => new URL(match[1]).pathname)
    .sort();
  assert.deepEqual(actualSitemapPaths, sitemapPaths, 'sitemap routes must match real public pages');
  assert.ok(!sitemapXml.includes('/api/'), 'sitemap must not include API routes');
  for (const [path, lastModified] of [
    ['/', '2026-07-23'],
    ['/ladda-bilen-bidrag', '2026-07-23'],
    ['/samfallighet', '2026-07-23'],
    ['/basta-laddboxen', '2026-07-23'],
    ['/produkter', '2026-08-09'],
    ['/privat', '2026-08-09'],
    ['/publik', '2026-08-09'],
    ['/kontakt', '2026-08-09'],
  ]) {
    assert.ok(
      sitemapXml.includes(`<loc>${canonicalBase}${path}</loc>\n<lastmod>${lastModified}</lastmod>`),
      `${path} sitemap lastModified must match the evidenced page change`,
    );
  }

  const robotsResponse = await page.request.get(`${baseUrl}/robots.txt`);
  assert.equal(robotsResponse.status(), 200, 'robots must return 200');
  const robotsText = await robotsResponse.text();
  assert.match(robotsText, /Disallow: \/api\//);
  assert.match(robotsText, /Sitemap: https:\/\/www\.cleancharge\.se\/sitemap\.xml/);
  assert.match(robotsText, /Host: https:\/\/www\.cleancharge\.se/);
  console.log(`PASS sitemap/robots: ${actualSitemapPaths.length} public routes, changed dates current, /api/ blocked`);

  await goto('/');
  const skipLink = page.getByRole('link', { name: 'Hoppa till innehåll' });
  assert.equal(await skipLink.count(), 0, 'skip link must be removed at normal viewport');
  assert.equal(
    await page.getByText('Hoppa till innehåll', { exact: true }).count(),
    0,
    'skip-link text must be absent at normal viewport',
  );

  await page.setViewportSize({ width: 390, height: 320 });
  await goto('/');
  await page.locator('[role="dialog"]').waitFor();
  assert.equal(
    await page.getByRole('link', { name: 'Hoppa till innehåll' }).count(),
    0,
    'skip link must be removed at compact viewport',
  );
  assert.equal(
    await page.getByText('Hoppa till innehåll', { exact: true }).count(),
    0,
    'skip-link text must be absent at compact viewport',
  );
  console.log('PASS skip navigation removal: no link or text at normal/compact viewports');
  await page.setViewportSize({ width: 1440, height: 900 });

  await goto('/kontakt');
  const contactJsonLd = parseJsonLd(
    await page.locator('script[type="application/ld+json"]').allTextContents(),
    '/kontakt',
  );
  const rootGraph = contactJsonLd.find((entry) => Array.isArray(entry['@graph']))?.['@graph'] ?? [];
  const organization = rootGraph.find((entry) => entry['@type'] === 'Organization');
  const localBusiness = rootGraph.find((entry) => entry['@type'] === 'LocalBusiness');
  const contactPage = contactJsonLd.find((entry) => entry['@type'] === 'ContactPage');
  assert.deepEqual(organization?.contactPoint?.availableLanguage, ['Swedish']);
  assert.equal(organization?.logo?.width, 1600, 'Organization logo width must match public/logo.png');
  assert.equal(organization?.logo?.height, 291, 'Organization logo height must match public/logo.png');
  assert.deepEqual(contactPage?.contactPoint?.availableLanguage, ['Swedish']);
  assert.equal('geo' in localBusiness, false, 'unsupported LocalBusiness coordinates must be omitted');
  await page.waitForFunction(() => document.body.textContent?.includes('Vardagar 09:00–17:00'));
  assert.ok((await page.locator('body').textContent()).includes('Vardagar 09:00–17:00'));

  await goto('/foretag');
  const serviceJsonLd = parseJsonLd(
    await page.locator('script[type="application/ld+json"]').allTextContents(),
    '/foretag',
  );
  const service = serviceJsonLd.find((entry) => entry['@type'] === 'Service');
  assert.deepEqual(service?.availableChannel?.servicePhone?.availableLanguage, ['Swedish']);

  await goto('/produkter');
  const productJsonLd = parseJsonLd(
    await page.locator('script[type="application/ld+json"]').allTextContents(),
    '/produkter',
  );
  const itemList = productJsonLd.find((entry) => entry['@type'] === 'ItemList');
  assert.equal(itemList?.itemListElement?.length, 4);
  const products = itemList.itemListElement.map((entry) => entry.item);
  assert.equal(products.filter((product) => product.offers).length, 2);
  assert.equal(products.filter((product) => !product.offers).length, 2);
  for (const product of products.filter((entry) => entry.offers)) {
    assert.equal('availability' in product.offers, false);
    assert.equal('priceValidUntil' in product.offers, false);
    assert.ok(product.offers.price > 0);
  }

  await goto('/privat');
  const privateJsonLd = parseJsonLd(
    await page.locator('script[type="application/ld+json"]').allTextContents(),
    '/privat',
  );
  const privateProducts = privateJsonLd
    .find((entry) => entry['@type'] === 'ItemList')
    .itemListElement.map((entry) => entry.item);
  assert.equal(privateProducts.length, 2);
  for (const product of privateProducts) {
    assert.ok(product.offers.price > 0);
    assert.equal('availability' in product.offers, false);
    assert.equal('priceValidUntil' in product.offers, false);
  }

  await goto('/publik');
  const publicJsonLd = parseJsonLd(
    await page.locator('script[type="application/ld+json"]').allTextContents(),
    '/publik',
  );
  const publicProducts = publicJsonLd
    .find((entry) => entry['@type'] === 'ItemList')
    .itemListElement.map((entry) => entry.item);
  assert.equal(publicProducts.length, 2);
  assert.equal(publicProducts.every((product) => !product.offers), true);

  await goto('/produkter');
  console.log('PASS factual JSON-LD: Swedish contacts, preserved contact copy, supported product offers');

  await page.locator('a[href="/kontakt?product=Zaptec%20Go"]').click();
  await page.waitForURL('**/kontakt?product=Zaptec%20Go');
  await page.waitForFunction(() => document.querySelector('textarea[name="message"]')?.value.includes('Zaptec Go'));
  assert.equal(new URL(page.url()).searchParams.get('product'), 'Zaptec Go');
  console.log('PASS CTA flow: product quote opens prefilled contact form');

  await page.evaluate(() => localStorage.removeItem('cc-cookie-consent'));
  await goto('/');
  await page.getByRole('button', { name: 'Anpassa' }).click();
  await page.getByRole('button', { name: 'Spara mina val' }).click();
  const consent = JSON.parse(await page.evaluate(() => localStorage.getItem('cc-cookie-consent')));
  assert.deepEqual(
    { necessary: consent.necessary, analytics: consent.analytics, preferences: consent.preferences, version: consent.version },
    { necessary: true, analytics: false, preferences: false, version: 1 },
  );
  assert.equal(await page.locator('[role="dialog"]').count(), 0);
  console.log('PASS consent flow: custom choices persisted and dialog closed');

  await page.setViewportSize({ width: 375, height: 812 });
  for (const path of ['/produkter', '/kontakt']) {
    await goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    assert.equal(overflow, 0, `${path} must not overflow at 375px`);
  }
  console.log('PASS mobile layout: no horizontal overflow on products/contact at 375px');
} finally {
  await browser.close();
}
