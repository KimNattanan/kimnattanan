'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

function MouseEffect({x, y, duration} : {x:number, y:number, duration:number}){
  const circle = useRef<HTMLImageElement>(null);
  const star = useRef<HTMLImageElement>(null);
  useEffect(()=>{
    const rot = Math.random()*90;
    gsap.to(circle.current,{
      duration: 0,
      x: x,
      y: y,
      width: 0,
      height: 0,
      opacity: 0.5,
      rotateZ: rot,
    });
    gsap.to(circle.current,{
      duration: duration,
      ease: 'none',
      rotateZ: rot+400,
    });
    gsap.to(circle.current,{
      duration: duration,
      ease: 'power1.in',
      x: x-80,
      y: y-80,
      width: 160,
      height: 160,
    });
    gsap.to(star.current,{
      duration: 0,
      x: x,
      y: y,
      width: 0,
      height: 0,
      opacity: 0.5,
      rotateZ: rot,
    });
    gsap.to(star.current,{
      duration: duration,
      ease: 'none',
      rotateZ: rot+300,
    });
    gsap.to(star.current,{
      duration: duration/2,
      ease: 'none',
      x: x-80,
      y: y-80,
      width: 160,
      height: 160,
      onComplete: ()=>{
        gsap.to(star.current,{
          duration: duration/4,
          ease: 'power3.in',
          x: x,
          y: y,
          width: 0,
          height: 0,
        })
      },
    });
  },[]);
  return (
    <>
      <Image
        src='/mouse_effect/circle.png'
        alt='circle'
        width={1000}
        height={1000}
        ref={circle}
        className='fixed'
        draggable='false'
      />
      <Image
        src='/mouse_effect/star.png'
        alt='star'
        width={1000}
        height={1000}
        ref={star}
        className='fixed'
        draggable='false'
      />
    </>
  );
}

export default function Background({width, height}:{width:number, height:number}) {
  const ref = useRef<HTMLDivElement>(null);

  const [effects, setEffects] = useState<{x: number, y: number, id: number}[]>([]);

  const mouseDown=(e: MouseEvent)=>{
    setEffects((prev)=>{
      const last = prev.at(-1);
      return [
        ...prev,
        {x: e.clientX, y: e.clientY, id: last ? last.id+1 : 0}
      ];
    });
    setTimeout(()=>{
      setEffects(prev=>prev.slice(1));
    },300);
  }

  useEffect(() => {
    gsap.to(ref.current, {
      backgroundPosition: `-=${width}px -=${height}px`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
    window.addEventListener('mousedown',mouseDown);
    return ()=>{
      window.removeEventListener('mousedown',mouseDown);
    }
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="fixed inset-0 -z-50 bg-repeat opacity-30 bg-amber-100 select-none"
        style={{
          backgroundImage: "url('/bg_tile.png')",
          backgroundSize: `${width}px ${height}px`,
          backgroundPosition: "0px 0px"
        }}
      />
      <div className="fixed w-screen h-screen -z-30 select-none">
        {effects.map((e)=>
          <MouseEffect key={e.id} x={e.x} y={e.y} duration={0.3}/>
        )}
      </div>
    </>
  );
}