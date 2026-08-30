import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jarrar Digital Studio — Mobile App & Website Development Studio in India',
  description:
    'Jarrar Digital Studio builds premium mobile apps and websites for small businesses across India — agency-level quality, AI-assisted development speed, and a personal 30-minute follow-up on every inquiry.',
  keywords: [
    'Mobile App Development India',
    'Website Development India',
    'AI Assisted Studio',
    'Flutter App Developer',
    'Vibe Coding',
    'Jarrar Digital Studio',
    'Jarrar Hussain Naqvi',
  ],
  authors: [{ name: 'Jarrar Hussain Naqvi' }],
  openGraph: {
    title: 'Jarrar Digital Studio — Mobile App & Website Development Studio in India',
    description:
      'Premium apps and websites — built at startup speed. Agency-level quality delivered directly by the developer.',
    url: 'https://jarrardigitalstudio.com',
    siteName: 'Jarrar Digital Studio',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/images/jds-logo-footer.png',
    apple: '/images/jds-logo-footer.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,800,500,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBF8F2] text-[#1A1710] font-inter antialiased selection:bg-[#B8912F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
