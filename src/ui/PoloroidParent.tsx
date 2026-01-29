import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const PolaroidParent: React.FC<Props> = ({ children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -30; // opposite direction
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;

    setOffset({ x, y });
  };

  return (
    <div
      className="w-full absolute inset-0 z-10 flex flex-col lg:flex-row lg:justify-between items-center px-4 lg:px-15 hidden lg:flex"
      onMouseMove={handleMouseMove}
    >
      <div
        className="w-full flex justify-between"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.08s linear",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PolaroidParent;
