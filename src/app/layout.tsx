import type { Metadata } from 'next';
import './styles/reset.css';
import './styles/fonts.css';

export const metadata: Metadata = {
  title: 'XYZ Photography',
  description: 'Johanna Hobel Photography',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
