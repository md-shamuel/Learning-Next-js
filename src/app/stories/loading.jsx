const StoryLoading = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="h-16 w-64 animate-pulse rounded-2xl bg-slate-200" />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 animate-pulse rounded-full bg-slate-200" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
                <div className="h-3 w-36 animate-pulse rounded bg-slate-200" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
              <div className="h-3 w-2/3 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="h-6 w-16 animate-pulse rounded-full bg-slate-200" />
              <div className="h-6 w-20 animate-pulse rounded-full bg-slate-200" />
              <div className="h-6 w-14 animate-pulse rounded-full bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryLoading;
