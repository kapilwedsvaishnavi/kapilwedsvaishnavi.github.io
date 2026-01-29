import React from "react";

type PolaroidCardProps = {
  name: string;
  imageUrl: string;
  rotation?: string; // e.g., "rotate-6" or "-rotate-6"
};

const PolaroidCard: React.FC<PolaroidCardProps> = ({
  name,
  imageUrl,
  rotation = "rotate-0",
}) => {
  return (
    <div
      className={`
        w-auto h-auto bg-white shadow-xl rounded-sm p-4
        flex flex-col items-center
            ${rotation}
      `}
      style={{
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div className="w-[300px] h-[300px] overflow-hidden rounded">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt={name}
        />
      </div>

      <p className="text-black mt-4 text-xl font-[Cinzel] italic tracking-wide font-bold">
        {name}
      </p>
    </div>
  );
};

export default PolaroidCard;
