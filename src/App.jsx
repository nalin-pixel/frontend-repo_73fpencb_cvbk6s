import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <footer className="py-8 text-center text-amber-200/70 bg-black/80 border-t border-white/10">
        © {new Date().getFullYear()} Coffee Show. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
