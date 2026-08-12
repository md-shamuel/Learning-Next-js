import Title from "@/components/Title";

const ForgetPassword = () => {
  return (
    <div className="mx-auto max-w-md px-6 py-10">
      <Title>Reset Password</Title>

      <form className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Enter the email associated with your account and we&apos;ll send
          you a link to reset your password.
        </p>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
