import type { Metadata } from 'next';
import './styles/global.css';

export const metadata: Metadata = {
  title: 'Bytebank',
  description: 'Bytebank - Um banco digital',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
};
