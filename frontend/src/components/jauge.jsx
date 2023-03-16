import React from "react";

const colors = ["bg-red-400", "bg-yellow-400", "bg-green-400"];

function Jauge(props) {
  const { value, max, color } = props;
  const percent = (value / max) * 100;
  const colorIndex = Math.min(
    Math.floor((value / max) * colors.length),
    colors.length - 1
  );
  const colorClass = color ? `bg-${color}-400` : colors[colorIndex];
  const barClass = classNames(
    "h-2",
    "rounded-full",
    "overflow-hidden",
    colorClass
  );

  return (
    <div className="relative w-full">
      <div className={barClass} style={{ width: `${percent}%` }}></div>
      <div className="absolute top-0 right-0 -mt-1 font-medium text-gray-500">
        {value}
      </div>
    </div>
  );
}

export default Jauge;
