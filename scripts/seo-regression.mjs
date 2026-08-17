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
    ogType: 'article',
  },
  {
    path: '/ladda-bilen-bidrag',
    h1: /Ladda bilen-bidraget 2026/i,
    links: ['/kontakt', '/fastighetsbolag'],
    ogType: 'article',
  },
  {
    path: '/basta-laddboxen',
    h1: /Bästa laddboxen 2026/i,
    links: ['/kontakt', '/produkter', '/privat', '/foretag'],
    ogType: 'article',
  },
  {
    path: '/kunskap',
    h1: /Guider som gör valet av.*laddbox.*enklare/i,
    links: ['/vad-kostar-laddbox', '/ladda-bilen-bidrag', '/basta-laddboxen', '/kontakt'],
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
  '/fastighetsbolag/goteborg',
  '/fastighetsbolag/malmo',
  '/fastighetsbolag/stockholm',
  '/foretag',
  '/hela-sverige',
  '/integritetspolicy',
  '/kontakt',
  '/kunskap',
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
    assert.equal(row.ogType, route.ogType ?? 'website', `${route.path} has the wrong og:type`);
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
    ['/', '2026-08-13'],
    ['/kunskap', '2026-08-13'],
    ['/ladda-bilen-bidrag', '2026-08-13'],
    ['/samfallighet', '2026-07-23'],
    ['/basta-laddboxen', '2026-08-13'],
    ['/vad-kostar-laddbox', '2026-08-13'],
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

  const homepageResponse = await page.request.get(`${baseUrl}/`);
  assert.equal(homepageResponse.status(), 200, 'homepage HTML must return 200');
  const homepageHtml = await homepageResponse.text();
  const serverVideoTag = homepageHtml.match(/<video\b[^>]*>/)?.[0] ?? '';
  assert.ok(serverVideoTag, 'homepage HTML must contain the video element');
  assert.doesNotMatch(serverVideoTag, /\bautoplay\b/i, 'server video must not autoplay');
  assert.match(serverVideoTag, /\bpreload="none"/i, 'server video must use preload=none');
  assert.doesNotMatch(serverVideoTag, /\bposter=/i, 'server video must defer the poster');
  assert.match(serverVideoTag, /\bloading="lazy"/i, 'server video must request lazy loading');

  const reducedPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'reduce',
  });
  await reducedPage.addInitScript(() => {
    window.__videoPlayCalls = 0;
    const originalPlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function patchedPlay(...args) {
      window.__videoPlayCalls += 1;
      return originalPlay.apply(this, args);
    };
  });
  const reducedMediaRequests = [];
  reducedPage.on('request', (request) => {
    if (/pexels|charging-video-poster/.test(request.url())) reducedMediaRequests.push(request.url());
  });
  await reducedPage.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
  await reducedPage.waitForTimeout(500);
  assert.equal(await reducedPage.evaluate(() => window.__videoPlayCalls), 0);
  assert.equal(reducedMediaRequests.length, 0, 'offscreen reduced-motion media must not load');
  await reducedPage.locator('video').scrollIntoViewIfNeeded();
  await reducedPage.waitForSelector('img[src="/images/hero/charging-video-poster-1280.jpg"]');
  await reducedPage.waitForTimeout(300);
  assert.equal(await reducedPage.evaluate(() => window.__videoPlayCalls), 0);
  assert.equal(
    reducedMediaRequests.some((url) => url.includes('videos.pexels.com')),
    false,
    'reduced motion must not request the video source',
  );
  assert.equal(
    reducedMediaRequests.some((url) => url.includes('charging-video-poster-1280.jpg')),
    true,
    'the optimized poster must load only near the video section',
  );
  await reducedPage.close();
  const normalPage = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    reducedMotion: 'no-preference',
  });
  await normalPage.addInitScript(() => {
    window.__videoPlayCalls = 0;
    const originalPlay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function patchedPlay(...args) {
      window.__videoPlayCalls += 1;
      return originalPlay.apply(this, args);
    };
  });
  const normalMediaRequests = [];
  normalPage.on('request', (request) => {
    if (/pexels|charging-video-poster/.test(request.url())) normalMediaRequests.push(request.url());
  });
  await normalPage.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
  await normalPage.waitForTimeout(500);
  assert.equal(await normalPage.evaluate(() => window.__videoPlayCalls), 0);
  assert.equal(normalMediaRequests.length, 0, 'offscreen normal-motion media must not load');
  await normalPage.locator('video').scrollIntoViewIfNeeded();
  await normalPage.waitForFunction(() => window.__videoPlayCalls > 0);
  assert.equal(
    await normalPage.locator('video').evaluate((element) => element.poster.endsWith('charging-video-poster-1280.jpg')),
    true,
  );
  await normalPage.close();
  console.log('PASS deferred video: static SSR, no offscreen load, reduced motion never plays, normal motion starts nearby');

  await goto('/');
  const desktopSkipLink = page.getByRole('link', { name: 'Hoppa till innehåll' });
  assert.equal(await desktopSkipLink.count(), 1, 'skip link must exist at normal viewport');
  const desktopHiddenBox = await desktopSkipLink.boundingBox();
  assert.ok(
    desktopHiddenBox && desktopHiddenBox.width <= 1 && desktopHiddenBox.height <= 1,
    'skip link must be visually hidden before focus at normal viewport',
  );
  await page.keyboard.press('Tab');
  assert.equal(
    await page.evaluate(() => document.activeElement?.textContent?.trim()),
    'Hoppa till innehåll',
    'first Tab must focus the skip link at normal viewport',
  );
  const desktopFocusedBox = await desktopSkipLink.boundingBox();
  assert.ok(
    desktopFocusedBox && desktopFocusedBox.width >= 44 && desktopFocusedBox.height >= 44,
    'focused skip link must be visibly usable at normal viewport',
  );
  await page.keyboard.press('Enter');
  assert.equal(new URL(page.url()).hash, '#main', 'skip link must target #main');
  assert.equal(await page.evaluate(() => document.activeElement?.id), 'main', 'skip link must focus #main');

  await page.setViewportSize({ width: 390, height: 320 });
  await goto('/');
  const compactSkipLink = page.getByRole('link', { name: 'Hoppa till innehåll' });
  assert.equal(await compactSkipLink.count(), 1, 'skip link must exist at compact viewport');
  const compactHiddenBox = await compactSkipLink.boundingBox();
  assert.ok(
    compactHiddenBox && compactHiddenBox.width <= 1 && compactHiddenBox.height <= 1,
    'skip link must be visually hidden before focus at compact viewport',
  );
  await page.keyboard.press('Tab');
  assert.equal(
    await page.evaluate(() => document.activeElement?.textContent?.trim()),
    'Hoppa till innehåll',
    'first Tab must focus the skip link at compact viewport',
  );
  const compactFocusedBox = await compactSkipLink.boundingBox();
  assert.ok(
    compactFocusedBox && compactFocusedBox.width >= 44 && compactFocusedBox.height >= 44,
    'focused skip link must be visibly usable at compact viewport',
  );
  console.log('PASS skip navigation: hidden by default, first Tab reveals it, target focuses #main');

  await page.setViewportSize({ width: 390, height: 844 });
  await goto('/');
  const mobileMenuTrigger = page.locator('button[aria-controls="mobile-navigation"]');
  const mobileMenu = page.locator('#mobile-navigation');
  await mobileMenuTrigger.click();
  await page.waitForFunction(() => document.activeElement?.textContent?.trim() === 'Avvisa alla');
  assert.equal(await mobileMenuTrigger.getAttribute('aria-expanded'), 'false');
  assert.equal(await mobileMenu.getAttribute('aria-hidden'), 'true');
  assert.equal(await mobileMenu.evaluate((element) => element.inert), true);
  assert.equal(
    await page.evaluate(() => document.activeElement?.textContent?.trim()),
    'Avvisa alla',
    'cookie controls must receive focus instead of opening the mobile menu',
  );
  console.log('PASS cookie/menu priority: visible consent blocks the menu and receives focus');

  await page.getByRole('button', { name: 'Avvisa alla' }).click();
  assert.equal(await mobileMenuTrigger.getAttribute('aria-label'), 'Öppna meny');
  assert.equal(await mobileMenuTrigger.getAttribute('aria-expanded'), 'false');
  assert.equal(await mobileMenuTrigger.getAttribute('aria-controls'), 'mobile-navigation');
  await mobileMenuTrigger.click();
  assert.equal(await mobileMenuTrigger.getAttribute('aria-expanded'), 'true');
  assert.equal(await mobileMenu.getAttribute('aria-hidden'), 'false');
  assert.equal(await mobileMenu.evaluate((element) => element.inert), false);
  assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Stäng meny');
  await page.keyboard.press('Shift+Tab');
  assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('href')), '/kontakt');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Stäng meny');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => document.activeElement?.getAttribute('aria-label') === 'Öppna meny');
  assert.equal(await mobileMenuTrigger.getAttribute('aria-expanded'), 'false');
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');

  await page.setViewportSize({ width: 768, height: 900 });
  await mobileMenuTrigger.click();
  assert.equal(await mobileMenuTrigger.getAttribute('aria-expanded'), 'true');
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.waitForFunction(() => {
    const trigger = document.querySelector('button[aria-controls="mobile-navigation"]');
    const menu = document.getElementById('mobile-navigation');
    return trigger?.getAttribute('aria-expanded') === 'false' && menu?.getAttribute('aria-hidden') === 'true';
  });
  const desktopMenuState = await page.evaluate(() => {
    const menu = document.getElementById('mobile-navigation');
    return {
      inert: menu?.inert,
      overflow: document.body.style.overflow,
      activeHref: document.activeElement?.getAttribute('href'),
      activeVisible: document.activeElement?.getClientRects().length > 0,
    };
  });
  assert.deepEqual(desktopMenuState, {
    inert: true,
    overflow: '',
    activeHref: '/',
    activeVisible: true,
  });
  console.log('PASS mobile menu: focus trap/Escape plus safe 768→1024 breakpoint close');
  await page.setViewportSize({ width: 1440, height: 900 });
  await goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1800);
  await page.waitForFunction(
    () => [...document.querySelectorAll('a')].some((link) => link.textContent?.trim() === 'Utforska Produkter'),
  );
  const heroCtas = await page.evaluate(() =>
    ['Utforska Produkter', 'Kontakta oss'].map((text) => {
      const link = [...document.querySelectorAll('a')].find(
        (candidate) => candidate.textContent?.trim() === text && candidate.closest('main section'),
      );
      if (!link) return null;
      const style = getComputedStyle(link);
      return {
        text: link.textContent?.trim(),
        href: link.getAttribute('href'),
        box: link.getBoundingClientRect().toJSON(),
        backgroundColor: style.backgroundColor,
        color: style.color,
      };
    }),
  );
  assert.deepEqual(heroCtas.map((cta) => cta && { text: cta.text, href: cta.href }), [
    { text: 'Utforska Produkter', href: '/produkter' },
    { text: 'Kontakta oss', href: '/kontakt' },
  ]);
  assert.deepEqual(
    heroCtas.map((cta) => cta && { backgroundColor: cta.backgroundColor, color: cta.color }),
    [
      { backgroundColor: 'rgb(0, 127, 95)', color: 'rgb(255, 255, 255)' },
      { backgroundColor: 'rgba(0, 0, 0, 0)', color: 'rgb(15, 23, 42)' },
    ],
    'the existing first CTA must be primary and the contact CTA must remain secondary',
  );
  assert.ok(heroCtas.every((cta) => cta && cta.box.bottom <= 900), 'hero CTAs must fit inside 1440×900');

  const montaCta = page.getByRole('link', { name: 'Läs mer om Monta Hub' });
  await montaCta.scrollIntoViewIfNeeded();
  await page.evaluate(() => (document.activeElement instanceof HTMLElement ? document.activeElement.blur() : undefined));
  for (let index = 0; index < 50; index += 1) {
    await page.keyboard.press('Tab');
    if ((await page.evaluate(() => document.activeElement?.textContent?.trim())) === 'Läs mer om Monta Hub') break;
  }
  assert.equal(
    await page.evaluate(() => document.activeElement?.textContent?.trim()),
    'Läs mer om Monta Hub',
    'keyboard navigation must reach the Monta CTA',
  );
  assert.equal(await montaCta.evaluate((element) => getComputedStyle(element).outlineColor), 'rgb(255, 255, 255)');
  console.log('PASS hero/focus: exact CTA routes, primary/secondary hierarchy, first viewport, and white Monta outline');

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

  for (const width of [320, 375, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    assert.equal(overflow, 0, `homepage must not overflow at ${width}px`);
  }

  await page.setViewportSize({ width: 375, height: 812 });
  for (const path of ['/produkter', '/kontakt']) {
    await goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    assert.equal(overflow, 0, `${path} must not overflow at 375px`);
  }
  console.log('PASS responsive layout: homepage width matrix plus products/contact at 375px');
} finally {
  await browser.close();
}
