import React from "react";

function ErrorText({ children }: { children: React.ReactNode }) {
  return <div className="text-red-500 mb-2">{children}</div>;
}

export default ErrorText;
