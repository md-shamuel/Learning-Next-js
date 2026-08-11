import Title from "@/components/Title";

const teamMembers = [
  { name: "Sarah Johnson", role: "Founder & CEO" },
  { name: "Michael Chen", role: "Lead Engineer" },
  { name: "Aisha Rahman", role: "Product Designer" },
];

const Team = () => {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Title>Our Team</Title>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
          >
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600" />
            <h3 className="font-semibold text-slate-900">{member.name}</h3>
            <p className="text-sm text-slate-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
