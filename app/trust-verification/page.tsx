import Link from "next/link";

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-50 shadow-sm">
      {children}
    </span>
  );
}

export default function TrustVerificationPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Trust & Verification
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
          Judges and users should trust WardrobeIQ because the “AI” is explainable,
          student-first, and not sponsored by brands.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>Explainable AI</Badge>
          <Badge>Student-first logic</Badge>
          <Badge>No brand sponsorship</Badge>
          <Badge>Transparent assumptions</Badge>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-900">
              No paid brand bias
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-900/90">
              Recommendations are based on overlap + usage + cost-per-wear + impact
              assumptions—not affiliate links or sponsorships.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              What “AI” means here
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Decision intelligence: deterministic, auditable rules that produce
              clear “because” explanations (so users can trust and improve their
              habits).
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-900">
            Transparent assumptions used in impact metrics
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="rounded-xl bg-slate-50 p-3">
              CO₂ and water savings are estimates for demo purposes, scaled by
              reuse score and avoided purchases.
            </li>
            <li className="rounded-xl bg-slate-50 p-3">
              Cost-per-wear uses expected wears based on category frequency and
              durability rating (not hidden model predictions).
            </li>
            <li className="rounded-xl bg-slate-50 p-3">
              “Overlap” means similarity by category + color (and later: occasion/season).
            </li>
          </ul>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link
              href="/sustainability-impact?score=78"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              View Impact Math
            </Link>
            <Link
              href="/buy-or-skip"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-50 hover:bg-slate-800"
            >
              See Decision Card
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
