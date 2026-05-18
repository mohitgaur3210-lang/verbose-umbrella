import Image from 'next/image';

const menuData = [
  {
    category: "Fries & Starters",
    items: [
      { name: "Peri Peri Fries", price: 90, description: "Classic fries tossed in spicy peri peri seasoning." },
      { name: "Cheese Loaded Fries", price: 120, description: "Fries topped with melted cheese and house herbs." },
      { name: "Veg Manchurian Dry", price: 140, description: "Crispy veg balls tossed in spicy manchurian sauce." },
      { name: "Chilli Paneer", price: 160, description: "Soft paneer cubes with peppers and onions." },
    ]
  },
  {
    category: "Pizzas (9\")",
    items: [
      { name: "Margherita", price: 150, description: "Classic tomato sauce and mozzarella." },
      { name: "Corn & Onion", price: 170, description: "Sweet corn and crunchy onions." },
      { name: "Cheese Burst Pizza", price: 180, description: "Extra cheesy crust with choice of toppings." },
      { name: "Spicy Paneer Pizza", price: 190, description: "Paneer, paprika, and spicy sauce." },
    ]
  },
  {
    category: "Pasta & More",
    items: [
      { name: "Penne Alfredo", price: 160, description: "Creamy white sauce with mushrooms and corn." },
      { name: "Penne Arrabbiata", price: 150, description: "Spicy red sauce with garlic and herbs." },
      { name: "Veg Burger", price: 70, description: "Crispy patty with lettuce and mayo." },
      { name: "Cheese Sandwich", price: 80, description: "Grilled with cheese and green chutney." },
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Cold Coffee", price: 60, description: "Classic refreshing cold brew." },
      { name: "Oreo Shake", price: 90, description: "Thick shake with crushed Oreo cookies." },
      { name: "Masala Chai", price: 30, description: "Traditional spiced Indian tea." },
      { name: "Fresh Lime Soda", price: 40, description: "Zesty and bubbly lime water." },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="bg-oat min-h-screen pb-24">
      {/* Header */}
      <div className="bg-espresso text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-black mb-4">Our Menu</h1>
        <p className="text-zinc-400 max-w-lg mx-auto">Fresh ingredients, bold spices, and prices that make you smile.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="space-y-16">
          {menuData.map((section, idx) => (
            <div key={idx} className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-espresso whitespace-nowrap">
                  {section.category}
                </h2>
                <div className="h-px bg-zinc-200 w-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-bold text-espresso">₹{item.price}</span>
                      </div>
                      <p className="text-sm text-zinc-500 leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-accent rounded-[2.5rem] p-12 text-center shadow-sm">
          <h2 className="text-3xl font-heading font-bold mb-4">Hungry?</h2>
          <p className="text-espresso/70 mb-8 font-medium">Order directly via phone or visit us for the best experience.</p>
          <a href="tel:+911234567890" className="inline-block bg-espresso text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Call Now to Order
          </a>
        </div>
      </div>
    </div>
  );
}
