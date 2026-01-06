import Link from "next/link";

type ProfileRow = { label: string; value: string };

export default function ProfilePage() {
  const rows: ProfileRow[] = [
    { label: "Plan", value: "Demo (frontend-only)" },
    { label: "Primary goal", value: "Buy less + increase outfit reuse" },
    { label: "Default currency", value: "INR (₹)" },
    { label: "Impact scoring", value: "Explainable (deterministic rules)" },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Profile
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
          A simple profile page so the navigation is fully working. Next step
          can wire this to Supabase auth + user settings.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {rows.map((r) => (
            <div key={r.label} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {r.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {r.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/wardrobe"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800"
          >
            Open My Wardrobe
          </Link>
          <Link
            href="/sustainability-impact?score=78"
            className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
          >
            View Impact
          </Link>
        </div>
      </section>
    </div>
  );
}
