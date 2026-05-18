import Link from 'next/link';
import { Coffee } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-espresso">Pocket Beans</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/menu" className="text-sm font-medium hover:text-primary transition-colors">Menu</Link>
            <Link href="/book" className="text-sm font-medium hover:text-primary transition-colors">Book a Table</Link>
            <Link href="/#location" className="text-sm font-medium hover:text-primary transition-colors">Find Us</Link>
            <Link href="/book" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-sm">
              Order Now
            </Link>
          </div>
          
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
}
