import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface EventCardProps {
  eventDetail: any;
  direction?: "left" | "right" | "up" | "down" | "bottom";
}

const EventCard: React.FC<EventCardProps> = ({
  eventDetail,
  direction = "bottom", // default direction
}) => {

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  // mapping slide directions to offsets
  const directionOffset: Record<string, { x?: number; y?: number }> = {
    left: { x: -40 },
    right: { x: 40 },
    up: { y: -40 },
    down: { y: 40 },
    bottom: { y: 50 }, // alias for convenience
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
        duration: 3.0,
        ease: [0.22, 1, 0.36, 1], // smooth premium ease-out
      }}
      className="w-full max-w-sm bg-transparent rounded-base shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-center mb-4 bg-green-500 p-6">
        <h5 className="text-xl font-semibold playwrite-au-tas-wedding font-bold text-heading">
          {eventDetail.heading}
        </h5>
      </div>

      {/* Content */}
      <div className="flow-root h-80 flex flex-col justify-center content-center p-5 text-lg text-center text-gray-700 austine-font">
        <p>{eventDetail.date}</p>
        <p>{eventDetail.time}</p>
        <p className="my-5">{eventDetail.address}</p>

        <a href={eventDetail.location} className="underline text-green-500">
          See Location
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;
