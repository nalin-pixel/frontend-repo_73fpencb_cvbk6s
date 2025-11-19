function Menu() {
  const items = [
    { name: "Espresso", price: 120, desc: "Rich and bold single shot" },
    { name: "Cappuccino", price: 220, desc: "Foamy milk with espresso" },
    { name: "Latte", price: 200, desc: "Smooth milk + espresso" },
    { name: "Mocha", price: 240, desc: "Chocolate + espresso + milk" },
    { name: "Cold Brew", price: 180, desc: "Slow steeped, super smooth" },
    { name: "Iced Caramel", price: 260, desc: "Sweet caramel, iced" },
  ];

  return (
    <section id="menu" className="py-16 bg-stone-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Menu</h2>
        <p className="text-amber-200/80 text-center mt-2">Simple, tasty, and affordable</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.map((it) => (
            <div key={it.name} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{it.name}</h3>
                <span className="text-amber-400 font-bold">₹{it.price}</span>
              </div>
              <p className="text-amber-100/80 text-sm mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
