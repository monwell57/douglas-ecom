import React from "react";

function layout({ children }) {
  return (
    <div className="flex items-center justify-center h-screen max-w-full bg-white">
      {children}
    </div>
  );
}

export default layout;
