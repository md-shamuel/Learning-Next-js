import Title from "@/components/Title";

const EmailVerify = () => {
  return (
    <div className="mx-auto max-w-md px-6 py-10 text-center">
      <Title>Verify Your Email</Title>

      <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          We&apos;ve sent a verification link to your email address. Please
          check your inbox and click the link to activate your account.
        </p>

        <p className="text-sm text-slate-500">
          Didn&apos;t receive the email? Check your spam folder or resend it
          below.
        </p>

        <button
          type="button"
          className="mt-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  );
};

export default EmailVerify;
