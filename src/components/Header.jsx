"use client"
 
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";

const Header = () => {
const pathname =usePathname();
if(pathname.startsWith('/dashboard')) return <></>
 
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          href="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          Dev Story
        </NavLink>
 

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <NavLink
            href="/dashboard"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Dashboard
          </NavLink>
           <NavLink
            href="/tutorials"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Tutorials
          </NavLink>
          <NavLink
            href="/stories"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Stories
          </NavLink>

          <NavLink
            href="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            About
          </NavLink>

          <NavLink
            href="/login"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Login
          </NavLink>

          <NavLink
            href="/register"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;