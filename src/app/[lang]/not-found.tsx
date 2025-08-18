import { Locale, locales } from "@/i18n";
import { getServerTranslation } from "@/i18n/server";
import Link from "next/link";
import { Metadata } from "next";
import { resolveParams } from '@/app/types';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  
  return {
    title: `404 - Page Not Found | ${t.common.siteTitle}`,
    description: 'The page you are looking for could not be found. Return to homepage.',
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://jsonpanda.com/404`,
    }
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function NotFound({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string };
}) {
  const resolvedParams = await resolveParams(params);
  const locale = resolvedParams.lang as Locale;
  const { t } = await getServerTranslation(locale);
  const common = t.common;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">404</h1>
          <div className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}