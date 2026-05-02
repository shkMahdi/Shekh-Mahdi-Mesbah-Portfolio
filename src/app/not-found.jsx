import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center">
      <h1 className="font-display text-4xl font-bold text-primary md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for does not exist or was moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex rounded-lg border border-subtle bg-secondary px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
      >
        Back home
      </Link>
    </div>
  );
}
