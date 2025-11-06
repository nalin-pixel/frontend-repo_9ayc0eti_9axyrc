import { Truck, Wand2, Heart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Wand2,
      title: "Pick your Gram",
      desc: "Choose a Seasonal or Year‑Round Gram that matches their vibe.",
    },
    {
      icon: Heart,
      title: "Add a love note",
      desc: "Write a cheerful message — we'll print it on a pretty card.",
    },
    {
      icon: Truck,
      title: "We deliver joy",
      desc: "Our local couriers drop it at their door with a smile.",
    },
  ];

  return (
    <section id="how" className="py-16 md:py-20 bg-gradient-to-b from-white to-sky-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 text-center">
          How It Works
        </h2>
        <p className="mt-2 text-center text-slate-600">Three easy steps to brighten someone’s day.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-100 via-sky-100 to-violet-100 flex items-center justify-center">
                <Icon className="h-6 w-6 text-sky-700" />
              </div>
              <h3 className="font-serif text-xl text-slate-800">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
