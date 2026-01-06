import Link from "next/link";

function StatCard({
  title,
  value,
  subtitle,
  href,
}: {
  title: string;
  value: string;
  subtitle: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
        {title}
      </p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-700">{subtitle}</p>
      <p className="mt-4 text-sm font-semibold text-sky-600 group-hover:text-sky-500">
        View details →
      </p>
    </Link>
  );
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Smarter outfit decisions from what you already own.
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
          This dashboard summarizes your reuse behavior, purchase decisions, and
          sustainability impact—so you can make better choices with less mental
          effort.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/wardrobe"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800"
          >
            Add / Review Wardrobe
          </Link>
          <Link
            href="/buy-or-skip"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300"
          >
            Buy or Skip
          </Link>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Reuse Score"
          value="78/100"
          subtitle="Your wardrobe is being used efficiently."
          href="/sustainability-impact?score=78"
        />
        <StatCard
          title="Avoided Purchases"
          value="4"
          subtitle="Fewer impulse buys this month."
          href="/buy-or-skip#history"
        />
        <StatCard
          title="Money Saved (₹)"
          value="₹3,200"
          subtitle="Estimated savings from skipped duplicates."
          href="/price-comparison#history"
        />
        <StatCard
          title="Outfit Versatility"
          value="High"
          subtitle="Your basics pair well across occasions."
          href="/wardrobe#analytics"
        />
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Today’s decision cue (judge-friendly)
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-900">
              Reuse recommendation
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-900/90">
              Use one under-worn accessory with your most worn outfit to boost
              variety without buying anything.
            </p>
            <Link
              href="/insights"
              className="mt-4 inline-flex rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              See insights
            </Link>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Duplicate-risk reminder
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Before buying another basic, run Buy-or-Skip. The app checks your
              wardrobe for overlap and shows alternatives.
            </p>
            <Link
              href="/buy-or-skip"
              className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-50 hover:bg-slate-800"
            >
              Run Buy-or-Skip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
