"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Dashboard", href: "/dashboard" },
      { label: "My Wardrobe", href: "/wardrobe" },
      { label: "Buy or Skip", href: "/buy-or-skip" },
      { label: "Sustainability Impact", href: "/sustainability-impact?score=78" },
      { label: "Quality & Longevity", href: "/quality-longevity" },
      { label: "Trust & Verification", href: "/trust-verification" },
      { label: "Price Comparison", href: "/price-comparison" },
      { label: "Insights", href: "/insights" },
      { label: "Profile", href: "/profile" },
    ],
    []
  );

  function isActive(href: string) {
    const base = href.split("?")[0];
    return pathname === base;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-slate-50 shadow-sm">
            WQ
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-900">
              WardrobeIQ
            </div>
            <div className="text-xs text-slate-600">
              Decision intelligence for sustainable fashion
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="hidden rounded-xl bg-sky-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300 sm:inline-flex"
          >
            Start Smart Wardrobe
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 sm:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </div>

      <div className="mx-auto hidden w-full max-w-6xl px-4 pb-3 sm:block">
        <nav className="flex flex-wrap gap-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "rounded-xl px-3 py-2 text-sm transition",
                isActive(item.href)
                  ? "bg-slate-900 text-slate-50 shadow-sm"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-slate-200 bg-white sm:hidden"
        >
          <nav className="mx-auto w-full max-w-6xl px-4 py-3">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl px-3 py-3 text-sm font-semibold transition",
                    isActive(item.href)
                      ? "bg-slate-900 text-slate-50"
                      : "border border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-sky-400 px-3 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-sky-300"
            >
              Back to Landing
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
