import React from "react";

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border p-2 rounded w-full ${className}`}
    />
  );
};
