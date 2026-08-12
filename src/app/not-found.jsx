import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="animate-bounce text-7xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-br from-green-600 to-slate-900">
        404
      </p>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="max-w-sm text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved.
        </p>
      </div>

      <Link
        href="/"
        className="rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
