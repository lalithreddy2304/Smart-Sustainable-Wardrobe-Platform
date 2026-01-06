"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Category = "Top" | "Bottom" | "Outerwear" | "Shoes" | "Accessory";

type Analysis = {
  recommendation: "BUY" | "SKIP";
  overlapCount: number;
  reasons: string[];
  alternatives: string[];
};

function clampNonNegativeInt(n: number) {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.round(n));
}

export default function BuyOrSkipPage() {
  const [name, setName] = useState<string>("Black T-Shirt");
  const [category, setCategory] = useState<Category>("Top");
  const [color, setColor] = useState<string>("Black");
  const [priceInr, setPriceInr] = useState<number>(799);
  const [submitted, setSubmitted] = useState(false);

  const analysis = useMemo<Analysis>(() => {
    // UI demo logic (deterministic + explainable; deeper engine comes next step)
    const overlapCount =
      category === "Top" && color.toLowerCase() === "black" ? 3 : 1;

    const estimatedWearsIfBought = clampNonNegativeInt(
      category === "Shoes" ? 30 : 12
    );
    const costPerWear = estimatedWearsIfBought
      ? Math.round(priceInr / estimatedWearsIfBought)
      : priceInr;

    const recommendation: Analysis["recommendation"] =
      overlapCount >= 3 || costPerWear > 120 ? "SKIP" : "BUY";

    const reasons: string[] = [
      `Style overlap: you already own ~${overlapCount} similar item(s) (same category + color).`,
      `Estimated cost-per-wear: ~₹${costPerWear}/wear (based on typical usage for ${category}).`,
      "Sustainability note: skipping duplicates reduces demand for new production and extends the life of what you own.",
    ];

    const alternatives: string[] =
      recommendation === "SKIP"
        ? [
            "Pair your existing black top with blue jeans + white sneakers.",
            "Use a hoodie/outerwear layer to change the silhouette without buying new.",
            "Add one underused accessory (cap/belt) for variety at zero cost.",
          ]
        : [
            "If you buy, choose higher durability fabric and plan 10+ wears in the next month.",
            "Prefer second-hand or verified quality to reduce replacement waste.",
          ];

    return { recommendation, overlapCount, reasons, alternatives };
  }, [category, color, priceInr]);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Buy or Skip
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              Reduce impulsive buying. WardrobeIQ checks overlap, estimates
              cost-per-wear, and shows alternatives from what you already own.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/wardrobe"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              View wardrobe
            </Link>
            <Link
              href="/sustainability-impact?score=78"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
            >
              Impact
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Product to evaluate
          </h2>

          <div className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Item name</span>
              <input
                className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Black T-Shirt"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="grid gap-1 text-sm">
                <span className="font-semibold text-slate-900">Category</span>
                <select
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Category)}
                >
                  <option>Top</option>
                  <option>Bottom</option>
                  <option>Outerwear</option>
                  <option>Shoes</option>
                  <option>Accessory</option>
                </select>
              </label>

              <label className="grid gap-1 text-sm">
                <span className="font-semibold text-slate-900">Color</span>
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="e.g., Black"
                />
              </label>
            </div>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Price (₹)</span>
              <input
                className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
                inputMode="numeric"
                value={Number.isFinite(priceInr) ? String(priceInr) : ""}
                onChange={(e) => setPriceInr(Number(e.target.value))}
                placeholder="799"
              />
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">
                Upload image (optional)
              </span>
              <input
                className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
                type="file"
                accept="image/*"
              />
              <span className="text-xs text-slate-600">
                MVP note: image scanning is mocked; decision logic is explainable
                and deterministic.
              </span>
            </label>

            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800"
            >
              Analyze: Buy or Skip
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Decision card
          </h2>

          {submitted ? (
            <div className="mt-4 space-y-3">
              <div
                className={[
                  "rounded-2xl p-5 shadow-sm",
                  analysis.recommendation === "SKIP"
                    ? "bg-emerald-50"
                    : "bg-sky-50",
                ].join(" ")}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Recommendation
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                  {analysis.recommendation}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  For:{" "}
                  <span className="font-semibold text-slate-900">{name}</span>
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Why (explainable logic)
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {analysis.reasons.map((r) => (
                    <li key={r} className="rounded-xl bg-slate-50 p-3">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Alternatives from my wardrobe
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {analysis.alternatives.map((a) => (
                    <li key={a} className="rounded-xl bg-slate-50 p-3">
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/wardrobe"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Open wardrobe
                  </Link>
                  <Link
                    href="/price-comparison"
                    className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-sky-300"
                  >
                    Compare prices
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-700">
                Enter product details and click{" "}
                <span className="font-semibold text-slate-900">
                  Analyze: Buy or Skip
                </span>{" "}
                to generate a decision card.
              </p>
            </div>
          )}
        </div>
      </section>

      <section
        id="history"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Buy/Skip history (mock)
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          This area is wired into navigation and ready for real history storage
          in the next step.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">SKIP</p>
            <p className="mt-1 text-sm text-slate-700">
              “White Tee” — overlap detected (3 similar)
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">BUY</p>
            <p className="mt-1 text-sm text-slate-700">
              “Rain Jacket” — fills a weather gap, high expected wears
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
