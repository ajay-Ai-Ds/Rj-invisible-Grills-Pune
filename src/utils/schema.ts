import { imageAssets } from "./images";

export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RJ Invisible Grills",
    "url": "https://www.rjinvisiblegrills.com",
    "logo": imageAssets.logoIcon.url,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80191-13644",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"],
    },
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.rjinvisiblegrills.com/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": `RJ Invisible Grills${areaName ? ` - ${areaName}` : ""}`,
    "url": `https://www.rjinvisiblegrills.com${areaName ? `/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "telephone": "+91 80191 13644",
    "email": "rjinvisiblegrills@gmail.com",
    "image": imageAssets.ogImage.url,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office: Kothrud",
      "addressLocality": areaName || "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411038",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.rjinvisiblegrills.com",
    "name": "RJ Invisible Grills",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.rjinvisiblegrills.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(links: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": link.item.startsWith("http") ? link.item : `https://www.rjinvisiblegrills.com${link.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "RJ Invisible Grills",
      "telephone": "+91 80191 13644",
      "email": "rjinvisiblegrills@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN",
      },
    },
    "description": description,
    "areaServed": {
      "@type": "State",
      "name": "Pune, Maharashtra",
    },
  };
}

export function generateFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(title: string, description: string, image: string, datePublished: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": "RJ Invisible Grills",
      "url": "https://www.rjinvisiblegrills.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "RJ Invisible Grills",
      "logo": {
        "@type": "ImageObject",
        "url": imageAssets.logoIcon.url,
      },
    },
  };
}
