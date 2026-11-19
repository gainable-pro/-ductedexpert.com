import React from 'react';

export interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


export function OrganizationJsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Service'],
    '@id': 'https://www.ductedexpert.com/#organization',
    name: 'DuctedExpert.com',
    alternateName: ['Ducted Expert', 'DuctedExpert'],
    url: 'https://www.ductedexpert.com',
    logo: 'https://www.ductedexpert.com/ductedexpert-logo.png',
    description: "The international platform for verified ducted air conditioning, heat pumps, and HVAC engineering offices.",
    serviceType: [
      'Directory of verified ducted air conditioning installers',
      'Direct connection with certified HVAC contractors',
      'Thermal & HVAC engineering offices',
      'Commercial & residential ducted systems'
    ],
    knowsAbout: [
      'Ducted air conditioning systems',
      'Reversible heat pumps',
      'VRV / VRF & multizone zoning systems',
      'HVAC thermal studies & sizing',
      'Verified HVAC expert network'
    ],
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom', identifier: 'GB' },
      { '@type': 'Country', name: 'Germany', identifier: 'DE' },
      { '@type': 'Country', name: 'Spain', identifier: 'ES' },
      { '@type': 'Country', name: 'Italy', identifier: 'IT' },
      { '@type': 'Country', name: 'Finland', identifier: 'FI' },
      { '@type': 'Country', name: 'Saudi Arabia', identifier: 'SA' },
      { '@type': 'Country', name: 'United Arab Emirates', identifier: 'AE' },
      { '@type': 'Country', name: 'Qatar', identifier: 'QA' },
      { '@type': 'Country', name: 'France', identifier: 'FR' }
    ],
    sameAs: [
      'https://www.gainable.fr'
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.ductedexpert.com/#website',
    name: 'DuctedExpert.com',
    url: 'https://www.ductedexpert.com',
    publisher: {
      '@id': 'https://www.ductedexpert.com/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.ductedexpert.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
    </>
  );
}

export interface ItemListJsonLdProps {
  name: string;
  description: string;
  items: Array<{
    name: string;
    slug: string;
    city?: string;
    country?: string;
    expertTypes?: string[];
    isLabeled?: boolean;
  }>;
}

export function ItemListJsonLd({ name, description, items }: ItemListJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'HVACBusiness',
        '@id': `https://www.gainable.fr/pro/${item.slug}`,
        name: item.name,
        url: `https://www.gainable.fr/pro/${item.slug}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: item.city || 'France',
          addressCountry: item.country || 'FR'
        },
        award: item.isLabeled ? ['Entreprise Vérifiée Gainable.fr', 'RGE QualiPAC'] : ['Entreprise Référencée CVC']
      }
    }))
  };

  return <JsonLd data={schema} />;
}

export interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName: string;
  imageUrl?: string;
  city?: string;
}

export function ArticleJsonLd({ title, description, url, datePublished, dateModified, authorName, imageUrl, city }: ArticleJsonLdProps) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://www.gainable.fr'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gainable.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gainable.fr/assets/logo-share.png'
      }
    },
    about: [
      { '@type': 'Thing', name: 'Climatisation Gainable' },
      { '@type': 'Thing', name: 'Pompe à Chaleur Réversible' },
      { '@type': 'Thing', name: 'Artisan Certifié RGE QualiPAC' }
    ]
  };

  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;
  if (city) schema.contentLocation = { '@type': 'Place', name: city };

  if (imageUrl) {
    schema.image = {
      '@type': 'ImageObject',
      url: imageUrl,
      caption: `${title} - Installation climatisation gainable RGE${city ? ' à ' + city : ''}`
    };
  }

  return <JsonLd data={schema} />;
}


