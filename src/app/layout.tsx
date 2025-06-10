import type { Metadata } from 'next';
import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

export const metadata: Metadata = {
  title: 'Conduit',
  description: 'Real World Example App',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
