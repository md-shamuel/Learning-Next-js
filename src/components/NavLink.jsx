"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();
  const isExactMatch = href === "/" || href === "/dashboard";
  const isActive = isExactMatch
    ? pathname === href
    : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${className} cursor-pointer rounded-lg px-3 py-1.5 transition-colors hover:underline ${
        isActive
          ? "bg-green-200 font-semibold text-green-700"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
