'use client';

import { WebsiteJsonLd } from './JsonLd';

interface JsonLdClientProps {
  seoData: {
    url: string;
    name: string;
    description: string;
    language: string;
  }
}

export default function JsonLdClient({ seoData }: JsonLdClientProps) {
  return (
    <WebsiteJsonLd 
      url={seoData.url}
      name={seoData.name}
      description={seoData.description}
      siteType="WebApplication"
      language={seoData.language}
      additionalLanguages={["en", "zh", "es", "ja", "ar", "fr"].filter(l => l !== seoData.language)}
    />
  );
} 