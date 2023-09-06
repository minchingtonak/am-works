import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Nav from './components/nav';

const graphik = localFont({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aw.works'),
  title: {
    default: 'Andrew Whitely',
    template: '%s | Andrew Whitely',
  },
  description: 'product-focused, design-minded software engineer',
  openGraph: {
    title: 'Andrew Whitely',
    description: 'product-focused, design-minded software engineer',
    url: 'https://aw.works',
    siteName: 'Andrew Whitely',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Andrew Whitely',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        graphik.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
