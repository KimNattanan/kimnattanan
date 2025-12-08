'use client'

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function MiniMenuBtn({title, href, target, setIsOpen}:{title: string, href: string, target?: string, setIsOpen: Dispatch<SetStateAction<boolean>>}) {
  return (
    <div
      className="flex-1 content-center text-4xl text-center cursor-pointer hover:opacity-50 text-foreground text-glow font-black"
      onClick={()=>setIsOpen(v=>!v)}
    >
      <Link href={href} target={target||""}>
        {title}
      </Link>
    </div>
  )
}

function MiniMenu(){
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div
        className="fixed py-8 bg-background bg-paw w-full h-full z-50 duration-200! ease-linear!"
        style={isOpen?{}:{opacity: 0, pointerEvents: 'none'}}
      >
        <div
          className="flex flex-col items-center justify-center w-full h-full duration-500!"
          style={isOpen?{}:{transform: 'translateY(-50px)'}}
        >
          <MiniMenuBtn title="ABOUT" href="/#about" setIsOpen={setIsOpen}/>
          <MiniMenuBtn title="PROJECTS" href="/#projects" setIsOpen={setIsOpen}/>
          <MiniMenuBtn title="DSA" href="/#dsa" setIsOpen={setIsOpen}/>
          <MiniMenuBtn title="CONTACT" href="/#contact" setIsOpen={setIsOpen}/>
          <MiniMenuBtn title="SPECIAL" href="https://ouip.vercel.app" target="_blank" setIsOpen={setIsOpen}/>
        </div>
      </div>
      <div
        className="z-50 lg:hidden fixed w-16 h-16 rounded-full right-4 bottom-4 bg-foreground cursor-pointer p-1"
        onClick={()=>setIsOpen(v=>!v)}
        style={isOpen?{}:{scale: "-1 1"}}
      >
        <div className="flex flex-col items-center justify-center w-full h-full border border-white rounded-full">
          <div
            className="w-6 rounded-full h-[3px] my-[3px] bg-white"
            style={isOpen?{transform: 'translateY(9px) rotate(45deg)'}:{}}
          />
          <div
            className="w-6 rounded-full h-[3px] my-[3px] bg-white"
            style={isOpen?{scale: "0 1"}:{}}
          />
          <div
            className="w-6 rounded-full h-[3px] my-[3px] bg-white"
            style={isOpen?{transform: 'translateY(-9px) rotate(-45deg)'}:{}}
          />
        </div>
      </div>
    </>
  )
}

function NavBtn({title, href, target}:{title: string, href: string, target?: string}) {
  return (
    <div className="cursor-pointer hover:opacity-50 text-black mx-6 lg:mx-12 lg:text-lg xl:text-xl">
      <Link href={href} target={target||""}>
        {title}
      </Link>
    </div>
  )
}

export default function NavBar() {
  const [containerStyle, setContainerStyle] = useState(0)

  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollY = window.scrollY || window.pageYOffset;
      setContainerStyle(scrollY <= window.innerHeight-10 ? 0 : 1);
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return (
    <>
      <div
        className="h-20 hidden lg:flex border-stone-300 fixed w-full rounded-full z-50 pr-12 pl-16 backdrop-blur-sm bg-background/50 font-black font-mplusrounded1c"
        style={containerStyle==0 ? {
          height: '5rem',
          backgroundColor: '#e7e4eb80',
          marginTop: '0rem',
          borderRadius: '0px',
        }:{
          height: '4rem',
          backgroundColor: '#ffffff80',
          marginTop: '0.5rem',
          borderRadius: '9999px',
          borderWidth: '0.5px',
        }}
      >
        <div className="h-full w-fit flex items-center">
          <a href="">
            <div className="cursor-pointer text-4xl text-blue2 font-black  tracking-[0.5rem]">
              KIM
            </div>
          </a>
        </div>
        <div className="h-full grow flex items-center justify-end">
          <NavBtn title="ABOUT" href="/#about"/>
          <NavBtn title="PROJECTS" href="/#projects"/>
          <NavBtn title="DSA" href="/#dsa"/>
          <NavBtn title="CONTACT" href="/#contact"/>
          <NavBtn title="SPECIAL" href="https://ouip.vercel.app" target="_blank"/>
        </div>
      </div>
      <MiniMenu/>
    </>
  )
}