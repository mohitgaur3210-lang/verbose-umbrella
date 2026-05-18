'use client';

import { useEffect, useState } from 'react';
import { Check, X, Calendar as CalendarIcon, Clock, Users, Phone, Mail, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string | null;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  createdAt: string;
};

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'ALL' | 'PENDING' | 'CONFIRMED' | 'CANCELLED'>('ALL');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setBookings(bookings.map(b => b.id === id ? { ...b, status: status as any } : b));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBooking = async (id: string) => {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setBookings(bookings.filter(b => b.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredBookings = filter === 'ALL' 
    ? bookings 
    : bookings.filter(b => b.status === filter);

  return (
    <div className="bg-zinc-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-heading font-black text-espresso">Admin Dashboard</h1>
            <p className="text-zinc-500">Manage your table reservations for Pocket Beans.</p>
          </div>
          
          <div className="flex bg-white rounded-xl p-1 shadow-sm border border-zinc-200">
            {(['ALL', 'PENDING', 'CONFIRMED', 'CANCELLED'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === f ? 'bg-primary text-white shadow-md' : 'text-zinc-500 hover:text-espresso'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookings.length > 0 ? filteredBookings.map((booking) => (
              <div 
                key={booking.id} 
                className={`bg-white rounded-[2rem] p-6 shadow-sm border-l-8 transition-all hover:shadow-md ${
                  booking.status === 'CONFIRMED' ? 'border-l-green-500' : 
                  booking.status === 'CANCELLED' ? 'border-l-red-500' : 'border-l-yellow-500'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-espresso">{booking.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <Clock className="w-3 h-3" />
                      <span>Booked on {format(new Date(booking.createdAt), 'MMM d, h:mm a')}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                    booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 
                    booking.status === 'CANCELLED' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <span>{format(new Date(booking.date), 'EEEE, MMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{booking.time} AM/PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Phone className="w-4 h-4 text-zinc-400" />
                    <span>{booking.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600">
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span className="truncate">{booking.email}</span>
                  </div>
                </div>

                {booking.notes && (
                  <div className="bg-zinc-50 p-3 rounded-xl text-xs text-zinc-500 mb-6 italic">
                    "{booking.notes}"
                  </div>
                )}

                <div className="flex gap-2">
                  {booking.status === 'PENDING' && (
                    <>
                      <button 
                        onClick={() => updateStatus(booking.id, 'CONFIRMED')}
                        className="flex-1 bg-green-500 text-white py-2 rounded-xl text-xs font-bold hover:bg-green-600 flex items-center justify-center gap-1"
                      >
                        <Check className="w-3 h-3" /> Confirm
                      </button>
                      <button 
                        onClick={() => updateStatus(booking.id, 'CANCELLED')}
                        className="flex-1 bg-zinc-200 text-zinc-600 py-2 rounded-xl text-xs font-bold hover:bg-zinc-300 flex items-center justify-center gap-1"
                      >
                        <X className="w-3 h-3" /> Cancel
                      </button>
                    </>
                  )}
                  {booking.status !== 'PENDING' && (
                    <button 
                       onClick={() => updateStatus(booking.id, 'PENDING')}
                       className="flex-1 border border-zinc-200 text-zinc-400 py-2 rounded-xl text-xs font-bold hover:bg-zinc-50"
                    >
                      Reset to Pending
                    </button>
                  )}
                  <button 
                    onClick={() => deleteBooking(booking.id)}
                    className="p-2 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-20 text-center text-zinc-400">
                No bookings found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
