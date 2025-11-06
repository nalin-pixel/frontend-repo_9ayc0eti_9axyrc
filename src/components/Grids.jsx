import { Gift, PartyPopper, Sparkles } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "My best friend cried happy tears. The confetti was the cutest surprise!",
      name: "Riley M.",
    },
    {
      quote: "So easy and so delightful. The Sparkle Gram made her day.",
      name: "Jordan A.",
    },
    {
      quote: "Fast delivery and the packaging is gorgeous. 10/10 joy!",
      name: "Sam K.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 text-center">What People Are Saying</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductSections() {
  const seasonal = [
    { title: "Jingle Gram", desc: "Holiday bells, cocoa kit, and glitter wrap.", icon: PartyPopper, color: "from-pink-100 to-sky-100" },
    { title: "Bloom Gram", desc: "Pastel blooms, honey sweets, and sunny note.", icon: Gift, color: "from-emerald-100 to-amber-100" },
    { title: "Firefly Gram", desc: "Summer sparkles, lemonade mix, picnic vibes.", icon: Sparkles, color: "from-violet-100 to-fuchsia-100" },
  ];
  const yearly = [
    { title: "Birthday Gram", desc: "Cake-scented candle, confetti pop, party card.", icon: PartyPopper, color: "from-sky-100 to-indigo-100" },
    { title: "Congrats Gram", desc: "Mini trophy, sparkling cider, hooray banner.", icon: Sparkles, color: "from-pink-100 to-rose-100" },
    { title: "Care Gram", desc: "Cozy socks, tea trio, kind words enclosed.", icon: Gift, color: "from-amber-100 to-lime-100" },
  ];

  const Card = ({ item }) => (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden">
      <div className={`h-28 bg-gradient-to-br ${item.color}`} />
      <div className="p-6">
        <div className="h-10 w-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm -mt-10">
          <item.icon className="h-5 w-5 text-sky-700" />
        </div>
        <h3 className="mt-3 font-serif text-xl text-slate-800">{item.title}</h3>
        <p className="mt-1 text-slate-600 text-sm">{item.desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-slate-700 font-medium">$29</span>
          <button className="rounded-full bg-sky-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-sky-700 transition-colors">Send this</button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <section id="seasonal" className="py-16 md:py-20 bg-gradient-to-b from-pink-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800 text-center">Seasonal Grams</h2>
          <p className="mt-2 text-center text-slate-600">Limited-time drops that match the moment.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seasonal.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="year" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800 text-center">Year‑Round Grams</h2>
          <p className="mt-2 text-center text-slate-600">Everyday ways to say “you’re my favorite person.”</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yearly.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
