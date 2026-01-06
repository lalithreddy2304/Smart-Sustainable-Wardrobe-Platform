import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Built for students • Reduce waste • Save money
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Buy Less. Wear Smarter. Save Money. Save the Planet.
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-slate-700">
          An AI-powered wardrobe assistant that helps students reduce fashion
          waste, avoid unnecessary purchases, and make smarter clothing
          decisions—using transparent, explainable decision intelligence (not a
          black box).
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800"
          >
            Start Smart Wardrobe
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Prevent duplicates
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Detect overlap before you buy another “basic” you already own.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Increase reuse
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Turn underused items into outfits with clear recommendations.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Measure impact
            </p>
            <p className="mt-2 text-sm text-slate-700">
              Track money saved + sustainability impact with judge-ready
              metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            The problem (fast fashion)
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="rounded-2xl bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">Overconsumption</span>{" "}
              leads to closets full of duplicates and “meh” purchases.
            </li>
            <li className="rounded-2xl bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">
                Student financial stress
              </span>{" "}
              grows with impulse buys and low durability.
            </li>
            <li className="rounded-2xl bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">
                Underused wardrobes
              </span>{" "}
              mean most items don’t get worn enough to justify their footprint.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            The solution (decision intelligence)
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="rounded-2xl bg-emerald-50 p-4">
              ✅ AI checks what you already own (type, color, season, occasion).
            </li>
            <li className="rounded-2xl bg-emerald-50 p-4">
              ✅ Prevents unnecessary purchases with overlap + cost-per-wear
              logic.
            </li>
            <li className="rounded-2xl bg-emerald-50 p-4">
              ✅ Tracks money saved & environmental impact so the benefit is
              measurable.
            </li>
          </ul>
        </div>
      </section>

      <section
        id="how-it-works"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              How it works
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              A simple loop that changes behavior: visibility → smarter choices
              → measurable impact.
            </p>
          </div>
          <Link
            href="/buy-or-skip"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300"
          >
            Try Buy or Skip
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Step 1
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Add Your Existing Clothes
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Capture type, color, occasion, season, quality, and wear history.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Step 2
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              AI Helps You Decide: Buy or Skip
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Detect overlap, estimate cost-per-wear, and show alternatives from
              your wardrobe.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Step 3
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Track Money Saved & Sustainability Impact
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              CO₂ + water + money metrics with transparent assumptions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
