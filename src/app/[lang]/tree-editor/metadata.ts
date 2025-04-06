import { Metadata } from 'next';
import { generateToolMetadata } from '../generateMetadata';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const { lang } = resolvedParams;
  
  return generateToolMetadata({
    lang,
    toolName: 'tree-editor',
  });
} 