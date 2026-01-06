import { Suspense } from "react";
import SustainabilityImpactClient from "./SustainabilityImpactClient";

export default function SustainabilityImpactPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sustainability Impact
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-700">
          This dashboard turns wardrobe decisions into measurable outcomes:
          estimated CO₂ saved, money saved, and reuse signals. Try{" "}
          <span className="font-medium text-zinc-900">
            ?score=78
          </span>{" "}
          vs{" "}
          <span className="font-medium text-zinc-900">
            ?score=35
          </span>{" "}
          to see how the impact changes.
        </p>
      </section>

      <Suspense
        fallback={
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-sm text-zinc-700">Loading impact…</p>
          </div>
        }
      >
        <SustainabilityImpactClient />
      </Suspense>
    </div>
  );
}
