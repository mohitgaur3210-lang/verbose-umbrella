import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const syne = Syne({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Pocket Beans | Best Cafe in Jaipur",
  description: "Vibrant neighborhood cafe serving Chinese, Fast Food, and Beverages in Pratap Nagar, Jaipur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-oat text-espresso min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-16 flex-grow">
          {children}
        </main>
        <footer className="bg-espresso text-white py-12 px-4 border-t border-white/10 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 text-accent">Pocket Beans</h3>
              <p className="text-zinc-400 text-sm max-w-xs">Your local neighborhood hangout for the best Chinese and loaded fries in Jaipur.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="/menu" className="hover:text-primary transition-colors">Our Menu</a></li>
                <li><a href="/book" className="hover:text-primary transition-colors">Book a Table</a></li>
                <li><a href="/#location" className="hover:text-primary transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-zinc-400">Pratap Nagar, Jaipur, Rajasthan</p>
              <p className="text-sm text-zinc-400">+91 [Phone Number]</p>
              <p className="text-sm text-zinc-400">Open: 11:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Pocket Beans Cafe. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
