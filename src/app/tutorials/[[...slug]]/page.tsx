import Title from "@/components/Title";

const tutorials = [
  {
    title: "Getting Started with Next.js",
    description: "Learn the fundamentals of the App Router, routing, and layouts.",
    level: "Beginner",
  },
  {
    title: "Mastering React Hooks",
    description: "A deep dive into useState, useEffect, and custom hooks.",
    level: "Intermediate",
  },
  {
    title: "Building APIs with Route Handlers",
    description: "Create backend endpoints directly inside your Next.js app.",
    level: "Intermediate",
  },
  {
    title: "Styling with Tailwind CSS",
    description: "Build responsive, consistent UIs fast with utility classes.",
    level: "Beginner",
  },
];

const Tutorials = async ({ params }) => {
  const { slug } = await params;

  if (!slug) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Title>Tutorials</Title>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {tutorial.level}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {tutorial.title}
              </h3>
              <p className="text-sm text-slate-600">{tutorial.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const [technology, topic, , page_no, subject] = slug;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Title>{subject ?? "Tutorial"}</Title>

      <nav className="mt-4 flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {slug.map((segment: string, i: number) => (
          <span key={i} className="flex items-center gap-1">
            <span className="capitalize">{segment}</span>
            {i < slug.length - 1 && <span>/</span>}
          </span>
        ))}
      </nav>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {technology && (
          <p className="text-sm text-slate-600">
            Technology: <span className="font-medium capitalize">{technology}</span>
          </p>
        )}
        {topic && (
          <p className="text-sm text-slate-600">
            Topic: <span className="font-medium capitalize">{topic}</span>
          </p>
        )}
        {page_no && (
          <p className="text-sm text-slate-600">
            Page number: <span className="font-medium">{page_no}</span>
          </p>
        )}

        <p className="mt-6 leading-relaxed text-slate-600">
          Tutorial content for &quot;{subject ?? slug.join(" / ")}&quot; goes
          here.
        </p>
      </div>
    </div>
  );
};

export default Tutorials;
