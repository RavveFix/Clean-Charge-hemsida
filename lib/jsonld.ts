export const SITE_URL = 'https://www.cleancharge.se';
export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}#localbusiness`;

type Crumb = { name: string; path: string };
type ServiceJsonLdInput = {
  name: string;
  path: string;
  description: string;
  serviceType: string;
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

export function serviceJsonLd({
  name,
  path,
  description,
  serviceType,
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
    areaServed: { '@type': 'Country', name: 'Sweden' },
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
        availableLanguage: ['Swedish', 'English'],
      },
    },
  };
}
