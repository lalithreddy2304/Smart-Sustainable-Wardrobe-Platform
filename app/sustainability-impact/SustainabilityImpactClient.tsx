"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

function clampScore(raw: number) {
  if (Number.isNaN(raw)) return 70;
  return Math.max(0, Math.min(100, raw));
}

function round1(n: number) {
  return Math.round(n * 10) / 10;
}

export default function SustainabilityImpactClient() {
  const searchParams = useSearchParams();
  const score = useMemo(() => {
    const raw = Number(searchParams.get("score"));
    return clampScore(raw);
  }, [searchParams]);

  // UI-focused demo estimator (kept deterministic + explainable).
  const metrics = useMemo(() => {
    // Higher score implies fewer unnecessary purchases + more outfit reuse.
    const co2KgSaved = round1(8 + score * 0.9); // 8–98 kg (demo range)
    const moneySavedUsd = Math.round(5 + score * 2.25); // $5–$230 (demo range)
    const reuseLiftPct = Math.round(10 + score * 0.55); // 10–65%
    const purchasesAvoided = Math.max(0, Math.round((score - 20) / 20)); // 0–4

    return { co2KgSaved, moneySavedUsd, reuseLiftPct, purchasesAvoided };
  }, [score]);

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
            Demo Impact Score (from URL)
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-xl bg-zinc-900 px-3 py-1.5 text-sm font-semibold text-white">
              {score}/100
            </span>
            <p className="text-sm text-zinc-700">
              Higher score = more reuse + fewer unnecessary purchases.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href="/sustainability-impact?score=78"
            className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Try 78
          </Link>
          <Link
            href="/sustainability-impact?score=35"
            className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
          >
            Try 35
          </Link>
          <Link
            href="/wardrobe"
            className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            Improve score
          </Link>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-zinc-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
            Estimated CO₂ saved
          </p>
          <p className="mt-1 text-2xl font-semibold">{metrics.co2KgSaved} kg</p>
          <p className="mt-2 text-xs text-zinc-600">
            Explanation: fewer new purchases + more wears per item reduces the
            need for producing replacements.
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
            Estimated money saved
          </p>
          <p className="mt-1 text-2xl font-semibold">${metrics.moneySavedUsd}</p>
          <p className="mt-2 text-xs text-zinc-600">
            Explanation: avoiding duplicate basics and low-value impulse buys
            has immediate budget impact.
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
            Reuse lift
          </p>
          <p className="mt-1 text-2xl font-semibold">{metrics.reuseLiftPct}%</p>
          <p className="mt-2 text-xs text-zinc-600">
            Explanation: wardrobe visibility makes it easier to rotate underused
            items into outfits.
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4">
        <p className="text-sm font-semibold">Decision summary</p>
        <ul className="mt-2 grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
          <li className="rounded-xl bg-zinc-50 p-3">
            Purchases avoided (est.):{" "}
            <span className="font-semibold text-zinc-900">
              {metrics.purchasesAvoided}
            </span>
          </li>
          <li className="rounded-xl bg-zinc-50 p-3">
            Next action: track wears + identify likely duplicates to improve
            score.
          </li>
        </ul>
      </div>
    </section>
  );
}
