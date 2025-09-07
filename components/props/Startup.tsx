'use client'
import gsap from "gsap";
import Background from "@/components/props/Background";
import { useEffect, useRef, useState } from "react";

export default function Startup({delay, duration}:{delay: number, duration: number}){
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  useEffect(()=>{
    setTimeout(()=>gsap.to(ref.current,{
      duration: duration,
      ease: 'none',
      opacity: 0,
      onComplete: ()=>{
        setShow(false);
      }
    }),delay*1000);
  },[]);
  return show && (
    <div className="fixed w-dvw h-dvh z-50 bg-gray-900" ref={ref}>
      <Background width={272} height={253}/>
    </div>
  );
}