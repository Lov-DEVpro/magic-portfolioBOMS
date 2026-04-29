import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'BOMS-expo | 25 godina iskustva u sajamskoj industriji',
  description: 'Vaš smo partner kada treba pravovremeno i profesionalno odraditi sve pripreme. Pomažemo Vam da se istaknete iz mnoštva na sajamskim manifestacijama i dovedete svoju ciljnu skupinu do vas.',
  icons: {
    icon: '/images/boms_logo.png',
    apple: '/images/boms_logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bs" className={`${plusJakartaSans.variable} font-sans overflow-x-clip`}>
      <body className="antialiased text-[#333333] bg-white overflow-x-clip selection:bg-[#20356a] selection:text-white grain-bg" suppressHydrationWarning>
        <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] pointer-events-none"></div>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
