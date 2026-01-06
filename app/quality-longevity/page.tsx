"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function clamp01(n: number) {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(10, n));
}

function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function QualityLongevityPage() {
  const [priceInr, setPriceInr] = useState<number>(1299);
  const [durability, setDurability] = useState<number>(6);
  const [stitch, setStitch] = useState<number>(6);
  const [lifespanMonths, setLifespanMonths] = useState<number>(10);

  const result = useMemo(() => {
    const qualityScore = Math.round(
      (clamp01(durability) + clamp01(stitch)) * 5
    ); // /100
    const expectedWears = Math.max(1, Math.round((lifespanMonths * 3) + qualityScore / 10));
    const costPerWear = Math.round(priceInr / expectedWears);

    const warning =
      durability <= 3 || stitch <= 3 || lifespanMonths <= 6
        ? "Low durability — likely replacement in ~6 months. Consider higher quality or second-hand."
        : "Looks durable — plan frequent wears to maximize value and reduce waste.";

    return { qualityScore, expectedWears, costPerWear, warning };
  }, [priceInr, durability, stitch, lifespanMonths]);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Quality & Longevity
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              A core fast-fashion problem is low durability → replacements → more
              waste. This page helps students estimate longevity and cost-per-wear
              with transparent assumptions.
            </p>
          </div>
          <Link
            href="/buy-or-skip"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300"
          >
            Use in Buy-or-Skip
          </Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            Rate a clothing item (working demo)
          </h2>

          <div className="mt-4 grid gap-3">
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">Price (₹)</span>
              <input
                className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
                inputMode="numeric"
                value={Number.isFinite(priceInr) ? String(priceInr) : ""}
                onChange={(e) => setPriceInr(Number(e.target.value))}
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-semibold text-slate-900">
                Fabric durability (0–10)
              </span>
              <input
                type="range"
                min={0}
                max={10}
                value={durability}
                onChange={(e) => setDurability(Number(e.target.value))}
              />
              <span className="text-xs text-slate-600">Selected: {durability}</span>
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-semibold text-slate-900">
                Stitch quality (0–10)
              </span>
              <input
                type="range"
                min={0}
                max={10}
                value={stitch}
                onChange={(e) => setStitch(Number(e.target.value))}
              />
              <span className="text-xs text-slate-600">Selected: {stitch}</span>
            </label>

            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-slate-900">
                Expected lifespan (months)
              </span>
              <input
                className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
                inputMode="numeric"
                value={Number.isFinite(lifespanMonths) ? String(lifespanMonths) : ""}
                onChange={(e) => setLifespanMonths(Number(e.target.value))}
              />
            </label>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">
            AI-style quality output (explainable)
          </h2>

          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Quality score (demo)
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {result.qualityScore}/100
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Derived from durability + stitching signals.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Cost-per-wear estimate
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {formatInr(result.costPerWear)}/wear
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Assumes ~{result.expectedWears} wears over {lifespanMonths} month(s).
              </p>
            </div>

            <div className="rounded-2xl bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-900">
                AI warning
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-900/90">
                {result.warning}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
