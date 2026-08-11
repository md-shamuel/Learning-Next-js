import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Dev Story
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Dashboard
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            About
          </Link>

          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;