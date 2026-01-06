import Link from "next/link";

type Insight = {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  tone: "neutral" | "good" | "warn";
};

function toneClasses(tone: Insight["tone"]) {
  switch (tone) {
    case "good":
      return "border-emerald-200 bg-emerald-50 text-emerald-900";
    case "warn":
      return "border-amber-200 bg-amber-50 text-amber-900";
    default:
      return "border-slate-200 bg-white text-slate-900";
  }
}

export default function InsightsPage() {
  const insights: Insight[] = [
    {
      title: "Reuse opportunity: accessories",
      description:
        "Your lowest-use items are often accessories. Add one accessory to your most-worn outfit to increase variety without buying anything.",
      ctaLabel: "Open wardrobe",
      href: "/wardrobe",
      tone: "good",
    },
    {
      title: "Duplicate-risk: basics (tops)",
      description:
        "Basics are the #1 duplicate category. Run Buy-or-Skip before buying another tee/top to check overlap and cost-per-wear.",
      ctaLabel: "Run Buy-or-Skip",
      href: "/buy-or-skip",
      tone: "warn",
    },
    {
      title: "Track impact (judge-friendly)",
      description:
        "Impact is easiest to defend when it’s measurable. Use the Impact Score page to show CO₂ + money saved estimates and the assumptions.",
      ctaLabel: "View sustainability impact",
      href: "/sustainability-impact?score=78",
      tone: "neutral",
    },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Insights
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              Actionable suggestions to help you wear more from what you already
              own, avoid duplicates, and improve your measurable impact.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/wardrobe"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800"
            >
              My Wardrobe
            </Link>
            <Link
              href="/buy-or-skip"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300"
            >
              Buy or Skip
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((i) => (
          <div
            key={i.title}
            className={[
              "rounded-3xl border p-5 shadow-sm",
              toneClasses(i.tone),
            ].join(" ")}
          >
            <p className="text-sm font-semibold">{i.title}</p>
            <p className="mt-2 text-sm leading-6 opacity-90">{i.description}</p>
            <Link
              href={i.href}
              className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-50 hover:bg-slate-800"
            >
              {i.ctaLabel}
            </Link>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Next best steps
        </h2>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li className="rounded-2xl bg-slate-50 p-4">
            Track wears for 7 days so recommendations are based on real usage.
          </li>
          <li className="rounded-2xl bg-slate-50 p-4">
            Run Buy-or-Skip for any “basic” purchase to avoid duplicates.
          </li>
        </ul>
      </section>
    </div>
  );
}
