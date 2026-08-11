import Image from "next/image";
import Title from "@/components/Title";
import Link from "next/link";
import devStoriesData from "@/data/devStories";

const Stories = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Title>Welcome to Stories</Title>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {devStoriesData.map((dev) => (
          <div
            key={dev.id}
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <Image
                src={dev.profileImage}
                alt={dev.name}
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-slate-900">{dev.name}</h3>
                <p className="text-sm text-slate-600">
                  {dev.designation} · {dev.company}
                </p>
              </div>
            </div>

            <p className="line-clamp-3 flex-1 text-sm text-slate-600">
              {dev.story}
            </p>

            <div className="flex flex-wrap gap-2">
              {dev.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Link
              href={`/stories/${dev.id}`}
              className="text-sm font-medium text-green-600 transition hover:text-green-700"
            >
              View Story →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
