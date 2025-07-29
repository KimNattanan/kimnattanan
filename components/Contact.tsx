'use client'

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function ClickEffect(
  {text, x, y, rot} :
  {text:string, x:number, y:number, rot:number}
){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    gsap.to(ref.current,{
      duration: 0,
      x: x-30,
      y: y-50,
      rotateZ: rot,
    });
  },[])
  return (
    <div className="text-rose-600 font-bold text-lg  font-mono absolute" ref={ref}>{text}</div>
  );
}

export default function Contact(){

  const emailRef = useRef<HTMLSpanElement>(null);
  const [emailClicked, setEmailClicked] = useState(false);
  const [emailHover, setEmailHover] = useState(false);
  const [copyLabelX, setCopyLabelX] = useState(0);
  const [fx, setFx] = useState<{x:number, y:number, angle:number, rot:number}>({
    x: 0,
    y: 0,
    angle: 0,
    rot: 0
  });

  const onEmailClicked2 = () => {
    if(emailClicked) return;
    setEmailClicked(true);
    setTimeout(()=>{
      setEmailClicked(false);
    },3000);
  }
  const onEmailClicked = (e: React.MouseEvent<HTMLSpanElement>) => {
    if(emailClicked) return;
    navigator.clipboard.writeText('jeung.nattanan@gmail.com');
    setEmailClicked(true);
    setFx((prev)=>{
      if(!emailRef.current) return prev;
      const rect = emailRef.current.getBoundingClientRect();
      return {
        x: e.clientX - rect.x,
        y: e.clientY - rect.y,
        angle: Math.random()*60-120,
        rot: Math.random()*40-20
      };
    });
    setTimeout(()=>{
      setEmailClicked(false);
    },3000);
  }
  const onEmailMouseEnter = () => {
    setEmailHover(true);
  }
  const onEmailMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if(!emailRef.current) return;
    const rect = emailRef.current.getBoundingClientRect();
    setCopyLabelX(e.clientX - rect.x - 17);
    console.log(copyLabelX);
  }
  const onEmailMouseLeave = () => {
    setEmailHover(false);
  }

  return (
    <div className="flex flex-col w-full my-24 bg-[rgba(251,85,138,0.1)] border-1 border-x-0
                    max-md:w-[400px] max-md:mx-auto">
      <div className="flex justify-center my-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]
                      lg:text-7xl
                      text-5xl">
        CONTACT
      </div>
      <div className="mb-12 whitespace-pre-wrap tracking-tight
                      lg:text-xl lg:mx-12
                      text-base mx-6">
        <div className="hidden xl:flex justify-center">
          <span>Please feel free to contact me at</span>
          <span
            className={`ml-1 font-medium ${emailClicked ? 'cursor-default text-rose-800' : 'cursor-pointer text-rose-600'} select-none relative`}
            ref={emailRef}
          >
            {emailClicked ? (
              <ClickEffect x={fx.x} y={fx.y} rot={fx.rot} text="Copied!"/>
            ) : emailHover && (
              <div className={`absolute -z-10 -top-[20px] text-lg text-rose-600 font-bold font-mono`} style={{left: copyLabelX}}>
                Copy?
              </div>
            )}
            <span
              onMouseEnter={onEmailMouseEnter}
              onMouseMove={onEmailMouseMove}
              onMouseLeave={onEmailMouseLeave}
              onMouseDown={onEmailClicked}
            >
              {`jeung.nattanan@gmail.com`}
            </span>
          </span>
          <span>,</span>
        </div>
        <div className="xl:hidden block text-center">
          <div>Please feel free to contact me at</div>
          <span className='text-rose-600 font-medium'>{`jeung.nattanan@gmail.com`}</span>
          {emailClicked ? (
            <span className="ml-2 mr-1 font-bold">✓</span>
          ) : (
            <span className="ml-2 mr-1 font-bold cursor-pointer" onClick={onEmailClicked2}>[copy]</span>
          )}
          <span>,</span>
        </div>
        <div className="flex justify-center">
          <span>{`or via`}</span>
          <span className="ml-2 self-center select-none">
            <Link
              href='https://www.facebook.com/nattanan.jeungtanasirikul.1'
              target='_blank'
            >
              <Image
                src={'/facebook_icon.svg'}
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
          </span>
          <span>{`'s,`}</span>
          <span className="ml-2 self-center select-none">
            <Link
              href='https://www.instagram.com/kimnattanan/'
              target='_blank'
            >
              <Image
                src={'/instagram_icon.svg'}
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
          </span>
          <span>{`'s DMs.`}</span>
        </div>
      </div>
    </div>
  );
}