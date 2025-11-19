function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-amber-900 via-stone-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 2px, transparent 2px)'}}></div>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Coffee Show
          </h1>
          <p className="mt-4 text-amber-100/90 text-lg">
            Simple cafe website with a cozy vibe. Sip, relax, and explore our menu.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="px-5 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition">View Menu</a>
            <a href="#contact" className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition">Contact Us</a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.pinimg.com/736x/8a/fb/64/8afb649524a5b83670748ec1aa08f9a6.jpg"
            alt="Cubi anime girl enjoying coffee"
            className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
          />
          <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-lg border border-white/10 text-sm">
            Chill vibes only ☕
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
