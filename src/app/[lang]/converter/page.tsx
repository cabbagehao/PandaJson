import { Metadata } from 'next';
import { getDictionary } from '@/i18n/index';
import ConverterClient from './ConverterClient';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { converter } = await getDictionary(params.lang);
  
  return {
    title: converter.title,
    description: converter.description,
    keywords: converter.keywords,
  };
}

export default function ConverterPage({ params }: { params: { lang: string } }) {
  return <ConverterClient params={params} />;
} 