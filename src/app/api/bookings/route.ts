import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Max capacity per 30-min slot
const MAX_CAPACITY = 20;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, notes } = body;

    // 1. Basic Validation
    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 2. Capacity Check
    // Convert date string to Date object
    const bookingDate = new Date(date);
    
    const existingBookings = await prisma.booking.findMany({
      where: {
        date: {
          equals: bookingDate
        },
        time: time,
        status: {
          not: 'CANCELLED'
        }
      }
    });

    const totalGuestsInSlot = existingBookings.reduce((sum, b) => sum + b.guests, 0);

    if (totalGuestsInSlot + guests > MAX_CAPACITY) {
      return NextResponse.json({ 
        message: `Sorry, we only have ${MAX_CAPACITY - totalGuestsInSlot} spots left for this time slot.` 
      }, { status: 400 });
    }

    // 3. Create Booking
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        date: bookingDate,
        time,
        guests,
        notes,
      }
    });

    // 4. (Optional) Send Email Notification here

    return NextResponse.json(booking, { status: 201 });
  } catch (error: any) {
    console.error('Booking Error:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    return NextResponse.json(bookings);
  } catch (error: any) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
