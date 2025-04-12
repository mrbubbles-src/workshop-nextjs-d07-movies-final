import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import { SearchProvider } from '@/context/SearchProvider';
import './globals.css';
import { AuthProvider } from '@/context/AuthProvider';

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
  description: 'D07 Movie & TV DB – Einfach suchen, merken, anschauen.',
  icons: {
    icon: 'images/favicon.svg',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
        <AuthProvider>
          <SearchProvider>
            <Navbar />
            <main>{children}</main>
          </SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
