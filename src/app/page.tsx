import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock, Phone, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
            alt="Cafe Interior"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium animate-fade-in">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span>Top Rated Cafe in Pratap Nagar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight">
            Pocket-Friendly <br />
            <span className="text-accent">Big Flavors.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto font-medium">
            Discover the perfect blend of Chinese, Italian, and Street Food at Jaipur's favorite neighborhood hangout.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/menu" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
              View Menu <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/book" className="bg-white text-espresso px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all border-2 border-transparent">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Info Section */}
      <section className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* About Card */}
        <div className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] p-8 flex flex-col justify-between border border-zinc-200 shadow-sm relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Pocket Beans?</h2>
            <p className="text-zinc-600 leading-relaxed mb-6">
              We started with a simple idea: good food shouldn't cost a fortune. Our chefs blend authentic techniques with local favorites to bring you a menu that's as diverse as Jaipur itself. From our signature Cheese Burst Pizzas to our spicy Veg Manchurian, every dish is made to order with fresh ingredients.
            </p>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="bg-oat p-4 rounded-2xl flex-1 text-center">
              <span className="block text-2xl font-bold text-primary">₹200</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Avg. for Two</span>
            </div>
            <div className="bg-oat p-4 rounded-2xl flex-1 text-center">
              <span className="block text-2xl font-bold text-primary">10+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Varieties of Fries</span>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:scale-110 transition-transform">
             <Coffee className="w-64 h-64 text-espresso" />
          </div>
        </div>

        {/* Hours Card */}
        <div className="bg-accent rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm">
          <Clock className="w-8 h-8 text-espresso mb-4" />
          <div>
            <h3 className="text-xl font-bold mb-1">Open Daily</h3>
            <p className="text-espresso/70 font-medium">11:00 AM - 10:00 PM</p>
          </div>
        </div>

        {/* Call Card */}
        <div className="bg-espresso rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-sm hover:bg-black transition-colors">
          <Phone className="w-8 h-8 text-accent mb-4" />
          <a href="tel:+911234567890" className="group">
            <h3 className="text-xl font-bold mb-1">Call Us</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">+91 [Your Number]</p>
          </a>
        </div>

        {/* Map Card */}
        <div id="location" className="md:col-span-2 bg-zinc-100 rounded-[2.5rem] relative overflow-hidden group cursor-pointer shadow-sm border border-zinc-200">
          <Image 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
            alt="Location Map"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
            <div className="text-white">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-bold">Pratap Nagar, Jaipur</span>
              </div>
              <p className="text-sm text-zinc-300">Click for Directions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Snippet */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-heading font-black">Fan Favorites</h2>
              <p className="text-zinc-500 mt-2 font-medium">The dishes our regulars can't get enough of.</p>
            </div>
            <Link href="/menu" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Full Menu <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Cheese Loaded Fries", price: "₹120", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600" },
              { name: "Veg Manchurian Dry", price: "₹140", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600" },
              { name: "Cheese Burst Pizza", price: "₹180", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600" }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-4 shadow-sm">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-sm shadow-md">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const Coffee = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);
