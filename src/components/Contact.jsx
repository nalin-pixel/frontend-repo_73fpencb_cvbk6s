import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-16 bg-stone-950">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center">Contact</h2>
        {!sent ? (
          <form onSubmit={onSubmit} className="mt-6 space-y-4 bg-white/5 border border-white/10 p-6 rounded-xl">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button type="submit" className="w-full px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-semibold">Send</button>
          </form>
        ) : (
          <div className="mt-6 text-center text-amber-100">Thanks! We'll get back to you soon.</div>
        )}
      </div>
    </section>
  );
}

export default Contact;
