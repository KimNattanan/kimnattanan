'use client'

import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import Image from "next/image";

gsap.registerPlugin(Physics2DPlugin);

export default function Sprite({gravity, width, height, posX}:{gravity:number, width:number, height:number, posX:number}){
  const ref = useRef<HTMLImageElement>(null);
  const [floorY, setFloorY] = useState(100000);
  const [t0, setT0] = useState(0);
  const [velo, setVelo] = useState(0);
  const [tween, setTween] = useState<GSAPTween|null>(null);
  const [falling, setFalling] = useState(true);

  const onScroll = useCallback(() => {
    const { scrollY, innerHeight } = window;
    setFloorY(scrollY + innerHeight);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    setFloorY(window.scrollY + window.innerHeight);
    gsap.to(ref.current,{
      x: (posX + window.innerWidth) % window.innerWidth,
      y: -height,
      duration: 0,
      opacity: 1,
    });
    return () => {
       window.removeEventListener("scroll", onScroll);
    }
  }, []);
  useEffect(()=>{
    tween?.kill();
    setTween(()=>{
      setT0(gsap.ticker.time);
      return gsap.to(ref.current, {
        physics2D: {
          gravity: gravity,
          angle: 90,
          velocity: velo,
        },
        onUpdate: function() {
          const posY = gsap.getProperty(ref.current,'y') as number;
          if(posY+height > floorY){
            gsap.set(ref.current,{y:floorY-height});
            setVelo(0);
            setFalling(false);
          }else{
            setVelo(velo + gravity * (gsap.ticker.time-t0));
            setFalling(true);
          }
          setT0(gsap.ticker.time);
        },
        duration: Infinity,
      });
    })
  },[floorY]);
  return (
    <div ref={ref} className="w-fit h-fit select-none opacity-0">
      {
      falling ? <Image
        src='/sprite/fall.png'
        alt="sprite"
        width={width}
        height={height}
      />
      : <Image
        src={'/sprite/idle.png'}
        alt='idle'
        width={width}
        height={height}
      />
      }
    </div>
  );
}