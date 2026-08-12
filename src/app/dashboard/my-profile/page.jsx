const MyProfile = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        My Profile
      </h1>

      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-purple-600" />
        <div>
          <p className="font-semibold text-slate-900">Your Name</p>
          <p className="text-sm text-slate-600">your.email@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
