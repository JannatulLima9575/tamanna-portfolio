import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';

export const metadata = {
  title: 'Tamanna Akter - Frontend & Backend Developer',
  description: 'Portfolio built with Next.js and Tailwind',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <div className="min-h-screen mt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
