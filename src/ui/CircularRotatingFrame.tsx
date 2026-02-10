import React, { useRef } from "react";
import './css/circularrotatingfrom.css';
import { motion, useInView } from "framer-motion";

interface CircularRotatingFrameProps {
  frameSrc: string;   // transparent circular PNG frame
  imageSrc: string;   // circular photo
}

const CircularRotatingFrame: React.FC<CircularRotatingFrameProps> = ({
  frameSrc,
  imageSrc
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center 
        lg:w-[550px] lg:h-[550px] 
        md:w-[450px] md:h-[450px] 
        w-[300px] h-[300px] 
        m-6 overflow-hidden"
    >
      {/* Rotating circular frame */}
      <img
        src={frameSrc}
        alt="frame"
        className="absolute w-full h-full z-10 spin-slow"
      />

      <div className="border border-white absolute w-[70%] h-[70%] rounded-full z-15" />

      {/* Inner circular photo with scroll-triggered animation */}
      <motion.img
        src={imageSrc}
        alt="content"
        className="w-[75%] h-[75%] rounded-full object-cover"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.6 }
        }
        transition={{
          duration: 1.2,
          ease: [0.17, 0.55, 0.55, 1], // starts fast → slows → smooth stop
        }}
      />
    </div>
  );
};

export default CircularRotatingFrame;
