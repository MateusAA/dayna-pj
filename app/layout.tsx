import './globals.css'; // essa linha é fundamental!
import { Metadata } from 'next';

export const metadata = {
  title: 'Título do seu site',
  icons: {
    icon: '/favicon.ico', // ou outro formato como .png ou .svg
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className='scroll-smooth font-codec'>{children}</body>
    </html>
  );
}
