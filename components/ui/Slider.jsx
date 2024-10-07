import React from "react";

export const Slider = ({
  value,
  onValueChange,
  min = 200,
  max = 1000,
  step = 1,
  className = "",
}) => {
  return (
    <input
      type="range"
      value={value}
      onChange={(e) => onValueChange([+e.target.value])}
      min={min}
      max={max}
      step={step}
      className={`slider w-full ${className}`}
    />
  );
};
