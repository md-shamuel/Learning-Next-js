"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleJoin = () => {
    const pass = prompt("Enter Password to join");
    if (pass === "12345") {
      router.push("/dashboard");
    }else{
      alert("Wrong Password")
    }
  };
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900">
        Welcome to Dev Story!
      </h2>
      <p className="max-w-md text-slate-600">
        Join the community to access your dashboard and start sharing your
        story.
      </p>
      <button
        onClick={handleJoin}
        className="rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-700"
      >
        Join Dev Story
      </button>
    </div>
  );
}
