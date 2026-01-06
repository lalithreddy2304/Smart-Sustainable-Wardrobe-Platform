"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Store = "Amazon" | "Flipkart" | "Myntra";

type PriceRow = {
  store: Store;
  priceInr: number;
  deliveryDays: number;
};

function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PriceComparisonPage() {
  const [query, setQuery] = useState("Black T-Shirt");
  const [saved, setSaved] = useState<string[]>([]);

  const rows = useMemo<PriceRow[]>(() => {
    // Mock but consistent pricing for demo
    const base = query.toLowerCase().includes("jacket") ? 2499 : 999;
    return [
      { store: "Amazon", priceInr: base + 100, deliveryDays: 2 },
      { store: "Flipkart", priceInr: base - 50, deliveryDays: 4 },
      { store: "Myntra", priceInr: base + 250, deliveryDays: 3 },
    ];
  }, [query]);

  const cheapest = useMemo(() => {
    return rows.reduce((min, r) => (r.priceInr < min.priceInr ? r : min), rows[0]);
  }, [rows]);

  const diff = useMemo(() => {
    const max = rows.reduce((m, r) => (r.priceInr > m.priceInr ? r : m), rows[0]);
    return max.priceInr - cheapest.priceInr;
  }, [rows, cheapest]);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Price Comparison
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
          Compare prices across Amazon, Flipkart, and Myntra (mock data). The goal
          isn’t just “cheapest”—it’s avoiding duplicates entirely when you already
          own something similar.
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm shadow-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search item to compare…"
            aria-label="Product query"
          />
          <Link
            href="/buy-or-skip"
            className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300"
          >
            Run Buy-or-Skip
          </Link>
        </div>

        <div className="mt-4 rounded-2xl bg-emerald-50 p-5">
          <p className="text-sm font-semibold text-emerald-900">
            AI reminder (decision intelligence)
          </p>
          <p className="mt-2 text-sm leading-6 text-emerald-900/90">
            You may already have a similar item — consider skipping to save{" "}
            <span className="font-semibold">₹1,200</span> and reduce waste.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Live comparison (mock)
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {rows.map((r) => {
            const isCheapest = r.store === cheapest.store;
            return (
              <div
                key={r.store}
                className={[
                  "rounded-3xl border p-5 shadow-sm",
                  isCheapest
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-slate-200 bg-white",
                ].join(" ")}
              >
                <p className="text-sm font-semibold text-slate-900">{r.store}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                  {formatInr(r.priceInr)}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  Delivery: ~{r.deliveryDays} day(s)
                </p>
                {isCheapest ? (
                  <p className="mt-3 inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                    Cheapest
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-5">
          <p className="text-sm text-slate-700">
            Price spread:{" "}
            <span className="font-semibold text-slate-900">{formatInr(diff)}</span>{" "}
            between cheapest and most expensive option.
          </p>

          <button
            type="button"
            onClick={() =>
              setSaved((prev) => [
                `${query} — cheapest: ${cheapest.store} (${formatInr(cheapest.priceInr)})`,
                ...prev,
              ])
            }
            className="mt-4 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-50 shadow-sm hover:bg-slate-800"
          >
            Save to price history
          </button>
        </div>
      </section>

      <section
        id="history"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Price comparison history
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Clickable, working history list (stored in page state for now).
        </p>

        <div className="mt-4 grid gap-2">
          {saved.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-5 text-sm text-slate-700">
              No saved comparisons yet. Save one above to populate this list.
            </div>
          ) : (
            saved.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm">
                <span className="font-semibold text-slate-900">{item}</span>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
