import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Angeline's Cozy Corner",
  description: "A cozy online bookstore with great recommendations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50`}
      >
        <header className="border-b border-amber-200 bg-amber-100">
          <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
            <h1 className="text-xl font-semibold text-amber-800">Angeline's Cozy Corner</h1>
            <nav className="space-x-4 text-sm text-amber-700">
              <Link href="/" className="hover:text-amber-900">Home</Link>
              <Link href="/about" className="hover:text-amber-900">About</Link>
              <Link href="/books" className="hover:text-amber-900">Books</Link>
              <Link href="/contact" className="hover:text-amber-900">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl p-6">{children}</main>

        <footer className="text-center text-sm text-amber-600 py-6">
          © 2026 Angeline's Cozy Corner
        </footer>
      </body>
    </html>
  );
}