
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StoryCardProps {
  date: string;
  header: string;
  detail: string;
  direction?: "left" | "right" | "up" | "down";
}

const StoryCard: React.FC<StoryCardProps> = ({
  date,
  header,
  detail,
  direction = "left",   // default slide direction
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px", // triggers slightly before fully visible
  });

  // direction-based offset
  const directionOffset: Record<string, { x?: number; y?: number }> = {
    left: { x: -40 },
    right: { x: 40 },
    up: { y: -40 },
    down: { y: 40 },
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // smooth ease-out
      }}
      className="w-full text-center"
    >
      <p className="text-gray-500 austine-font mb-2 text-xl">{date}</p>
      <h2 className="text-gray-700 text-2xl font-semibold mb-2 playwrite-au-tas-wedding">
        {header}
      </h2>
      <p className="text-gray-700">{detail}</p>
    </motion.div>
  );
};

export default StoryCard;
