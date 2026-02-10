import { useRef } from "react";
import Countdown from "react-countdown";
import TimerFrame from "../ui/TimerFrame";
import { motion, useInView } from "framer-motion";

interface CountdownTimerProps {
  direction?: "left" | "right" | "up" | "down" | "bottom";
}

function CountdownTimer({ direction = "bottom" }: CountdownTimerProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  // Direction offsets
  const directionOffset: Record<string, { x?: number; y?: number }> = {
    left: { x: -40 },
    right: { x: 40 },
    up: { y: -40 },
    down: { y: 40 },
    bottom: { y: 60 },
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <h1>Congratulations</h1>;
    } else {
      return (
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4 md:gap-2 lg:grid-cols-4 lg:gap-20">
          <TimerFrame heading={`${days}`} subheading="Days" />
          <TimerFrame heading={`${hours}`} subheading="Hours" />
          <TimerFrame heading={`${minutes}`} subheading="Minutes" />
          <TimerFrame heading={`${seconds}`} subheading="Seconds" />
        </div>
      );
    }
  };

  return (
    <motion.section
      ref={ref}
      id="countdown"
      className="countdown_section w-full flex place-items-center justify-center flex-col"
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{
        duration: 3.0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Countdown date={"2026-03-14T07:00:00"} renderer={renderer} />
    </motion.section>
  );
}

export default CountdownTimer;
