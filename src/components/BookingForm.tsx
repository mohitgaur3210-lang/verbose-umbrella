'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Users, Clock, Loader2, CheckCircle2 } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  guests: z.number().min(1).max(20),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: 2,
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Something went wrong');
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[2rem] p-12 text-center shadow-xl border border-zinc-100 animate-in fade-in zoom-in duration-500">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-heading font-bold mb-4 text-espresso">Booking Request Received!</h2>
        <p className="text-zinc-500 mb-8">We've received your request for Pocket Beans. We'll contact you shortly to confirm your table.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all"
        >
          Book Another Table
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-zinc-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-espresso ml-1">Full Name</label>
          <input
            {...register('name')}
            placeholder="John Doe"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-espresso ml-1">Email Address</label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-espresso ml-1">Phone Number</label>
          <input
            {...register('phone')}
            placeholder="+91 98765 43210"
            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
          {errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone.message}</p>}
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-espresso ml-1">Number of Guests</label>
          <div className="relative">
            <Users className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <select
              {...register('guests', { valueAsNumber: true })}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none transition-all"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-espresso ml-1">Date</label>
          <div className="relative">
            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              {...register('date')}
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            />
          </div>
          {errors.date && <p className="text-xs text-red-500 ml-1">{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-espresso ml-1">Time</label>
          <div className="relative">
            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <select
              {...register('time')}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-12 pr-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none transition-all"
            >
              <option value="">Select Time</option>
              {['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((t) => (
                <option key={t} value={t}>{t} AM/PM</option>
              ))}
            </select>
          </div>
          {errors.time && <p className="text-xs text-red-500 ml-1">{errors.time.message}</p>}
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-2 mb-8">
        <label className="text-sm font-bold text-espresso ml-1">Special Requests (Optional)</label>
        <textarea
          {...register('notes')}
          placeholder="Any allergies or special occasions?"
          rows={3}
          className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 border border-red-100">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Confirming...
          </>
        ) : (
          'Confirm Booking'
        )}
      </button>

      <p className="text-center text-zinc-400 text-xs mt-6">
        By clicking "Confirm Booking", you agree to our terms of service.
      </p>
    </form>
  );
}
