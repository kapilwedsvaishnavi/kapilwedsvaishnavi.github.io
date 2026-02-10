import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './css/storyphotocard.css';

interface StoryPhotoCardProps {
  image: string;
  floater: string;
  floterSide?: string;  
  direction?: "left" | "right" | "up" | "down";  // NEW
}

const StoryPhotoCard: React.FC<StoryPhotoCardProps> = ({
  image,
  floater,
  floterSide = "right-50",
  direction = "left", // default direction
}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  // Direction offsets for scroll reveal
  const directionOffset: Record<string, { x?: number; y?: number }> = {
    left: { x: -50 },
    right: { x: 50 },
    up: { y: -50 },
    down: { y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{
        duration: 4.0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative story-photo-card border-1 border-green-500"
    >
      {/* Outer border tilt */}
      <div className="border border-green-500 absolute w-full h-full rotate-4" />

      {/* Main photo */}
      <img
        src={image}
        alt="Story"
        className="w-full object-cover"
      />

      {/* Floater decoration */}
      <img
        src={floater}
        alt="Decoration"
        className={`absolute bottom-0 ${floterSide} w-32 h-32 object-contain diagonal-drift`}
      />
    </motion.div>
  );
};

export default StoryPhotoCard;
