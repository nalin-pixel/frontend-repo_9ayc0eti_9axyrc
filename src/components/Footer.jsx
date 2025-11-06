export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl text-slate-800">Go Gram ’em!</p>
            <p className="text-sm text-slate-500 mt-1">A playful local gift‑delivery service.</p>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Go Gram ’em! All smiles reserved.</p>
        </div>
      </div>
    </footer>
  );
}
