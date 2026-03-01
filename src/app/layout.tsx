import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LanguageProvider } from '@/contexts/LanguageContext';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
});

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'DevResources',
    description: 'Hub colaborativo de curadoria digital, projetos e experiências em tecnologia',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
  <html lang="pt-BR" className="dark">
    <body className={`${inter.variable} ${manrope.variable} flex min-h-screen flex-col antialiased`}>
      <LanguageProvider>
        <Header />
        <main className="flex-1 bg-background">{children}</main>
        <Footer />
      </LanguageProvider>
    </body>
  </html>
);
}
