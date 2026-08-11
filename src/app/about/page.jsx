import Link from "next/link";
import Title from "@/components/Title";

const About = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Title>About Page</Title>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-semibold text-slate-900">
          Welcome to Dev Story
        </h2>

        <p className="text-slate-600 leading-relaxed">
          Dev Story is a platform where developers can share their experiences,
          projects, and technical knowledge. Explore our community, connect with
          other developers, and grow together.
        </p>

        <nav className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Contact Us
          </Link>

          <Link
            href="/teams"
            className="rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Our Team
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default About;