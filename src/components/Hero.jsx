import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-pink-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
        <div className="order-2 md:order-1">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-slate-800 tracking-tight">
            Send joy right to their door.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Go Gram ’em! delivers little bursts of happiness across town — confetti, sparkles, and the sweetest surprises included.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#seasonal" className="rounded-full bg-pink-500 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-pink-600 transition-colors">Send a Jingle</a>
            <a href="#year" className="rounded-full bg-sky-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-sky-700 transition-colors">Send a Sparkle</a>
          </div>

          <div className="mt-10 p-3 rounded-2xl bg-white/80 border border-slate-100 shadow-sm">
            <CityChecker />
          </div>
        </div>
        <div className="h-[380px] sm:h-[460px] md:h-[520px] rounded-3xl relative order-1 md:order-2 shadow-sm">
          <Spline scene="https://prod.spline.design/l3ufsRa1W8xbZt4O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20" />
        </div>
      </div>
      <ConfettiAccents />
    </section>
  );
}

function CityChecker() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
      <label htmlFor="zip" className="sr-only">Zip code</label>
      <input id="zip" type="text" inputMode="numeric" placeholder="Enter your zip code"
        className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 placeholder-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-200" />
      <button type="button" className="rounded-xl bg-emerald-500 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-emerald-600 transition-colors">Check delivery</button>
      <p className="text-sm text-slate-500 sm:ml-2">We currently deliver within city limits.</p>
    </form>
  );
}

function ConfettiAccents() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-10 flex justify-center">
      <div className="grid grid-cols-12 gap-2 opacity-70">
        {[...Array(36)].map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full"
            style={{
              background: ["#fbcfe8","#bae6fd","#e9d5ff","#d9f99d","#fde68a"][i%5],
              boxShadow: "0 1px 0 rgba(0,0,0,0.05)"
            }} />
        ))}
      </div>
    </div>
  );
}
