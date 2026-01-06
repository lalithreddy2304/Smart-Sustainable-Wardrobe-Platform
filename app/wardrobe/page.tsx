import Link from "next/link";

type WardrobeCategory = "Top" | "Bottom" | "Outerwear" | "Shoes" | "Accessory";
type Occasion = "Campus" | "Casual" | "Interview" | "Party";
type Season = "All" | "Summer" | "Monsoon" | "Winter";

type WardrobeItem = {
  id: string;
  name: string;
  category: WardrobeCategory;
  color: string;
  occasion: Occasion;
  season: Season;
  qualityRating: 1 | 2 | 3 | 4 | 5;
  wearsLast30Days: number;
  costInr: number;
};

const demoWardrobe: WardrobeItem[] = [
  {
    id: "tee-white-01",
    name: "White Tee",
    category: "Top",
    color: "White",
    occasion: "Campus",
    season: "All",
    qualityRating: 3,
    wearsLast30Days: 7,
    costInr: 499,
  },
  {
    id: "tee-white-02",
    name: "White Tee (backup)",
    category: "Top",
    color: "White",
    occasion: "Casual",
    season: "All",
    qualityRating: 2,
    wearsLast30Days: 2,
    costInr: 399,
  },
  {
    id: "jeans-blue-01",
    name: "Blue Jeans",
    category: "Bottom",
    color: "Blue",
    occasion: "Campus",
    season: "All",
    qualityRating: 4,
    wearsLast30Days: 9,
    costInr: 1499,
  },
  {
    id: "hoodie-black-01",
    name: "Black Hoodie",
    category: "Outerwear",
    color: "Black",
    occasion: "Casual",
    season: "Winter",
    qualityRating: 4,
    wearsLast30Days: 6,
    costInr: 1799,
  },
  {
    id: "sneakers-white-01",
    name: "White Sneakers",
    category: "Shoes",
    color: "White",
    occasion: "Campus",
    season: "All",
    qualityRating: 4,
    wearsLast30Days: 11,
    costInr: 2999,
  },
  {
    id: "cap-green-01",
    name: "Green Cap",
    category: "Accessory",
    color: "Green",
    occasion: "Casual",
    season: "Summer",
    qualityRating: 3,
    wearsLast30Days: 1,
    costInr: 699,
  },
];

function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function stars(rating: number) {
  return "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);
}

export default function WardrobePage() {
  const totalItems = demoWardrobe.length;
  const totalWears = demoWardrobe.reduce(
    (sum, item) => sum + item.wearsLast30Days,
    0
  );
  const totalValue = demoWardrobe.reduce((sum, item) => sum + item.costInr, 0);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              My Wardrobe
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              Track items by type, color, occasion, season, and quality—so Buy
              or Skip can detect overlap and help you wear more from what you
              already own.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/buy-or-skip"
              className="inline-flex items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300"
            >
              Buy or Skip
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Insights
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Items tracked
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {totalItems}
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Wears (last 30 days)
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {totalWears}
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Closet value (tracked)
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {formatInr(totalValue)}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Items grid (demo data)
            </h2>
            <p className="mt-1 text-sm text-slate-700">
              Fully clickable cards with usage + quality signals. (Next step
              will let you add/edit items with local state.)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-700" htmlFor="filter">
              Filter
            </label>
            <select
              id="filter"
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm"
              defaultValue="All"
              aria-label="Filter (UI only)"
            >
              <option>All</option>
              <option>Top</option>
              <option>Bottom</option>
              <option>Outerwear</option>
              <option>Shoes</option>
              <option>Accessory</option>
            </select>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {demoWardrobe.map((item) => (
            <Link
              key={item.id}
              href={`/wardrobe#item-${item.id}`}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-600">
                    {item.category} • {item.color} • {item.occasion} •{" "}
                    {item.season}
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                  {item.wearsLast30Days} wears / 30d
                </span>
              </div>

              <div className="mt-4 grid gap-2">
                <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                  Quality:{" "}
                  <span className="font-semibold text-slate-900">
                    {stars(item.qualityRating)}
                  </span>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                  Cost:{" "}
                  <span className="font-semibold text-slate-900">
                    {formatInr(item.costInr)}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm font-semibold text-sky-600">
                Open item details →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="analytics"
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          Wardrobe analytics (snapshot)
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Duplicate-risk categories
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Basics like tees and black tops often cause accidental duplicates.
              Buy-or-Skip flags overlap before you purchase.
            </p>
            <Link
              href="/buy-or-skip"
              className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-50 hover:bg-slate-800"
            >
              Check a purchase
            </Link>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <p className="text-sm font-semibold text-emerald-900">
              Reuse opportunity
            </p>
            <p className="mt-2 text-sm leading-6 text-emerald-900/90">
              Underused accessories and outerwear can increase outfit variety
              without spending more.
            </p>
            <Link
              href="/insights"
              className="mt-4 inline-flex rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              See suggestions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
