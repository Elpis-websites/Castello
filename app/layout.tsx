import type { Metadata } from "next";
import { Karla, Playfair_Display, Playfair_Display_SC } from 'next/font/google';
import "./globals.css";
import NavBar from "./components/navBar";

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-karla',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair-display-sc',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Castello - Ristorante Pizzeria Cologno Monzese",
  description: "Ristorante Pizzeria Castello",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        <main id="main">
          {children}
        </main>
        
        <footer className="site-footer">
          <div className="container footer-inner">
            <div>
              <span className="brand-name footer-brand">Castello</span>
              <p className="muted small">Ristorante · Piazza Castello, 7 · 20093 Cologno Monzese MI</p>
            </div>
            <p className="muted small">© <span id="year"></span> Castello. Contenuti protetti da copyright.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
