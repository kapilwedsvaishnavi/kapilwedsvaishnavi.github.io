import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PETAL_COUNT = 30;

const FallingPetals: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petals = Array.from(container.children) as HTMLImageElement[];

    const animations: gsap.core.Tween[] = [];

    petals.forEach((petal) => {
      const duration = gsap.utils.random(6, 12);
      const delay = gsap.utils.random(0, 5);

      gsap.set(petal, {
        x: gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
        y: -100,
        rotation: gsap.utils.random(0, 360),
        scale: gsap.utils.random(0.5, 1.2),
        opacity: gsap.utils.random(0.7, 1),
      });

      const tween = gsap.to(petal, {
        y: window.innerHeight + 200,
        x: `+=${gsap.utils.random(-200, 200)}`,
        rotation: `+=${gsap.utils.random(180, 720)}`,
        duration,
        delay,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(petal, {
            x: gsap.utils.random(-window.innerWidth / 2, window.innerWidth / 2),
            y: -100,
          });
        },
      });

      animations.push(tween);
    });

    return () => {
      animations.forEach((a) => a.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {Array.from({ length: PETAL_COUNT }).map((_, i) => (
        <img
          key={i}
          src={'https://image.ibb.co/kyUHab/rose.png'}
          alt="petal"
          className="absolute w-6 select-none"
        />
      ))}
    </div>
  );
};

export default FallingPetals;