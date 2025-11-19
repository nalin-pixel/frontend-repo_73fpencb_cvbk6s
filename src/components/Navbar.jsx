import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">☕</span>
          <span className="font-semibold text-white text-lg">Coffee Show</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-blue-100">
          <button onClick={() => scrollTo("home")} className="hover:text-white transition">Home</button>
          <button onClick={() => scrollTo("menu")} className="hover:text-white transition">Menu</button>
          <button onClick={() => scrollTo("about")} className="hover:text-white transition">About</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-white transition">Contact</button>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10 px-4 py-3 space-y-2">
          {[
            { id: "home", label: "Home" },
            { id: "menu", label: "Menu" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left text-blue-100 hover:text-white py-2">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
