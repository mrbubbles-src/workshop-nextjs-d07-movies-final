import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar/Navbar';
import { SearchProvider } from '@/context/SearchProvider';
import './globals.css';
import { AuthProvider } from '@/context/AuthProvider';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'D07 Movie & TV DB',
  description: 'D07 Movie & TV DB – Suchen. Merken. Lieblingsfilme sammeln.',
  icons: {
    icon: '/images/favicon.svg',
  },
  openGraph: {
    title: 'D07 Movie & TV DB',
    description:
      'Die ultimative Sammlung für Filme und Serien – einfach suchen, merken, Lieblingsfilme sammeln.',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'D07 Movie & TV DB Hero',
      },
    ],
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-brand-background text-brand-text-primary flex min-h-screen flex-col scroll-smooth antialiased`}>
        <AuthProvider>
          <SearchProvider>
            <Navbar />
            <main className="flex flex-1 flex-col justify-center">
              {children}
            </main>
            <Footer />
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
