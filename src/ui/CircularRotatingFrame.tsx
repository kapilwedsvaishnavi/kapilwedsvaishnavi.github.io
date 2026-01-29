import React from "react";
import './css/circularrotatingfrom.css';

interface CircularRotatingFrameProps {
  frameSrc: string;   // transparent circular PNG frame
  imageSrc: string;   // circular photo
}

const CircularRotatingFrame: React.FC<CircularRotatingFrameProps> = ({
  frameSrc,
  imageSrc
}) => {
  return (
    <div
      className="relative flex items-center justify-center lg:w-[550px] lg:h-[550px] md:w-[450px] md:h-[450px] w-[300px] h-[300px] m-6"
    >
      {/* Rotating circular frame */}
      <img
        src={frameSrc}
        alt="frame"
        className="absolute w-full h-full z-10 spin-slow"
      />
      <div className="border border-white  absolute w-[70%] h-[70%] rounded-full z-15" />
      {/* Inner circular photo */}
      <img
        src={imageSrc}
        alt="content"
        className="w-[75%] h-[75%]  rounded-full object-cover"
      />

    </div>
  );
};

export default CircularRotatingFrame;
