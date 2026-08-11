import Image from "next/image";
import Link from "next/link";
import devStoriesData from "@/data/devStories";

const StoryDetailsPage = async ({ params }) => {
  const { storyId } = await params;
  const storyDetails = devStoriesData.find(
    (story) => story.id === Number(storyId)
  );

  if (!storyDetails) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          Story not found
        </h2>
        <p className="mt-2 text-slate-600">
          The story you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/stories"
          className="mt-6 inline-block text-sm font-medium text-green-600 transition hover:text-green-700"
        >
          ← Back to Stories
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/stories"
        className="text-sm font-medium text-green-600 transition hover:text-green-700"
      >
        ← Back to Stories
      </Link>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <Image
            src={storyDetails.profileImage}
            alt={storyDetails.name}
            width={72}
            height={72}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {storyDetails.name}
            </h1>
            <p className="text-sm text-slate-600">
              {storyDetails.designation} · {storyDetails.company}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {storyDetails.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mt-6 leading-relaxed text-slate-600">
          {storyDetails.story}
        </p>
      </div>
    </div>
  );
};

export default StoryDetailsPage;
