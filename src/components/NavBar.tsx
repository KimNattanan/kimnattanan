'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

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
    </>
  )
}