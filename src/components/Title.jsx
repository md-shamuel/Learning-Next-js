import React, { Children } from "react";

const Title = ({ children }) => {
  return (
    <div className="p-4   text-5xl bg-linear-[30deg] from-blue-500 to-purple-600 rounded-2xl">
      {children}
    </div>
  );
};

export default Title;
