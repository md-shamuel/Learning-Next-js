const AddStory = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Add Story
      </h1>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-slate-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="How I became a developer"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="story" className="text-sm font-medium text-slate-700">
            Your story
          </label>
          <textarea
            id="story"
            rows={6}
            placeholder="Share your journey..."
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>

        <button
          type="submit"
          className="self-start rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
        >
          Publish Story
        </button>
      </form>
    </div>
  );
};

export default AddStory;
