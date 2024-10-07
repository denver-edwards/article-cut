import React from "react";

export const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-all ${className}`}
    >
      {children}
    </button>
  );
};
