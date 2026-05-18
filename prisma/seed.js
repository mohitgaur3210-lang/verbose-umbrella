const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');
  
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  await prisma.booking.createMany({
    data: [
      {
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
        phone: '9876543210',
        date: today,
        time: '18:30',
        guests: 4,
        notes: 'Birthday celebration, need a corner table.',
        status: 'CONFIRMED',
      },
      {
        name: 'Priya Singh',
        email: 'priya@example.com',
        phone: '9123456789',
        date: today,
        time: '19:00',
        guests: 2,
        notes: 'Window seat preferred.',
        status: 'PENDING',
      },
      {
        name: 'Amit Kumar',
        email: 'amit@example.com',
        phone: '9988776655',
        date: tomorrow,
        time: '13:00',
        guests: 6,
        notes: '',
        status: 'PENDING',
      }
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
