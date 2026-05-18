import BookingForm from '@/components/BookingForm';
import { Coffee, MapPin, Phone } from 'lucide-react';

export default function BookPage() {
  return (
    <div className="bg-oat min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-espresso mb-4">Book a Table</h1>
            <p className="text-zinc-500 font-medium">
              Join us at Pocket Beans for a cozy atmosphere and delicious food. Reservations are recommended for groups of 4 or more.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 h-fit">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-espresso">Visit Us</h3>
                <p className="text-sm text-zinc-500">Pratap Nagar, Jaipur, Rajasthan 302033</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 h-fit">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-espresso">Call for Instant Booking</h3>
                <p className="text-sm text-zinc-500">+91 [Your Phone Number]</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-zinc-100 h-fit">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-espresso">Private Events</h3>
                <p className="text-sm text-zinc-500">Host your birthday or kitty party with us! Special packages available.</p>
              </div>
            </div>
          </div>

          <div className="bg-espresso text-white p-8 rounded-[2rem] shadow-lg">
            <h3 className="font-bold mb-2">Note:</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Online bookings must be made at least 2 hours in advance. For last-minute tables, please call us directly.
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-2">
          <BookingForm />
        </div>

      </div>
    </div>
  );
}
