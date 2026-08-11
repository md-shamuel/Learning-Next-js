import Title from "@/components/Title";

const Contact = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 py-10">
      <Title>Contact Us</Title>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600 leading-relaxed">
          Have a question or want to collaborate? Reach out and we&apos;ll get
          back to you soon.
        </p>

        <dl className="mt-6 flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-2">
            <dt className="font-medium text-slate-900">Email:</dt>
            <dd className="text-slate-600">hello@devstory.com</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="font-medium text-slate-900">Phone:</dt>
            <dd className="text-slate-600">+1 (555) 123-4567</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Contact;
