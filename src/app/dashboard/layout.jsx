import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/add-story", label: "Add Story" },
  { href: "/dashboard/my-profile", label: "My Profile" },
  { href: "/dashboard/settings", label: "Settings" },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row">
      <aside className="shrink-0 md:w-56">
        <nav className="flex flex-row gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:flex-col md:overflow-visible">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
