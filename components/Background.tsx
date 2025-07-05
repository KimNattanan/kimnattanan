'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground({width, height}:{width:number, height:number}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(ref.current, {
      backgroundPosition: `-=${width}px -=${height}px`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-50 bg-repeat opacity-30 bg-amber-100"
      style={{
        backgroundImage: "url('/bg_tile.png')",
        backgroundSize: `${width}px ${height}px`,
        backgroundPosition: "0px 0px"
      }}
    />
  );
}