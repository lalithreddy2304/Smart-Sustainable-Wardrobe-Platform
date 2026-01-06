export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">WardrobeIQ</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A decision-intelligence wardrobe assistant for students and young
              adults to reduce waste, save money, and buy fewer low-quality,
              duplicate items.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Trust principles
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Explainable recommendations</li>
              <li>No paid brand bias</li>
              <li>Transparent assumptions</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Demo-ready</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Frontend-only MVP with deterministic logic and measurable impact.
              Built for Vercel builds with App Router best practices.
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} WardrobeIQ — Smart sustainable wardrobe
          decisions.
        </p>
      </div>
    </footer>
  );
}
