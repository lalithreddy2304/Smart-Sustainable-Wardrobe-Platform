import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h1 className="text-xl font-semibold">Page not found</h1>
      <p className="mt-2 text-sm text-zinc-700">
        That route doesn’t exist. Use the navigation above or go back home.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
      >
        Back to Home
      </Link>
    </div>
  );
}
