import { Metadata } from 'next';
import { getDictionary } from '@/i18n/index';
import { Locale, defaultLocale } from '@/i18n';
import ConverterClient from './ConverterClient';

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const lang = (resolvedParams.lang || defaultLocale) as Locale;
  const { converter } = await getDictionary(lang);
  
  return {
    title: converter.title,
    description: converter.description,
    keywords: converter.keywords,
  };
}

export default async function ConverterPage({ 
  params 
}: { 
  params: { lang: string } 
}) {
  const resolvedParams = await Promise.resolve(params);
  return <ConverterClient params={resolvedParams} />;
} 