export const SITE_URL = 'https://www.cleancharge.se';
export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}#localbusiness`;

type Crumb = { name: string; path: string };
type ServiceJsonLdInput = {
  name: string;
  path: string;
  description: string;
  serviceType: string;
  areaServed?: { '@type': string; name: string };
};

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Hem',
        item: SITE_URL,
      },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    ],
  };
}

export type FaqEntry = { question: string; answer: string };

export function faqJsonLd(entries: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer,
      },
    })),
  };
}

type ArticleJsonLdInput = {
  headline: string;
  path: string;
  description: string;
  datePublished: string;
  dateModified: string;
  imagePath?: string;
};

export function articleJsonLd({
  headline,
  path,
  description,
  datePublished,
  dateModified,
  imagePath,
}: ArticleJsonLdInput) {
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}${imagePath ?? `${path}/opengraph-image`}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    inLanguage: 'sv-SE',
    image,
    author: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Clean Charge AB',
      url: SITE_URL,
    },
    publisher: { '@id': ORGANIZATION_ID },
    datePublished,
    dateModified,
  };
}

export function serviceJsonLd({
  name,
  path,
  description,
  serviceType,
  areaServed,
}: ServiceJsonLdInput) {
  const url = `${SITE_URL}${path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    url,
    mainEntityOfPage: url,
    provider: { '@id': LOCAL_BUSINESS_ID },
    areaServed: areaServed ?? { '@type': 'Country', name: 'Sweden' },
    description,
    serviceType,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/kontakt`,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+46197604290',
        contactType: 'customer service',
        areaServed: 'SE',
        availableLanguage: ['Swedish'],
      },
    },
  };
}
