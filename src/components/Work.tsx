"use client";

import Image from "next/image";
import { useState } from "react";

export default function Work(){
  return (
    <div id="work" className="lg:mt-0 mt-20">
      <div className="h-20 lg:block hidden"></div>
      <div className="bg-white/66 w-full rounded-[4rem] sm:rounded-[8rem] px-12 pb-20">
        <div className="topic">
          WORK
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <FeCamp19 />
          <div className="block lg:hidden mx-12 border-b-2 border-dotted"></div>
          <PosnBuuTA />
        </div>
      </div>
    </div>
  )
}

function FeCamp19(){
  return (
    <div className='relative sm:w-[414px] mx-auto self-end'>
      <div className='flex py-10 px-10 w-[200px] h-[200px] mx-auto'>
        <Image
          src={"/img/work/fecamp.jpg"}
          width={200}
          height={200}
          alt="exprec"
          style={{ objectFit: "contain" }}
          className='w-full h-full border rounded-xl border-black'
        />
      </div>
      <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
        <div className='text-xl font-bold text-center'>
          FE Camp 19
        </div>
        <div className='text-sm text-gray-500 font-medium text-center'>
          Oct. 2025 - Current
        </div>
        <div className='text-lg font-medium text-center my-2'>
          Senior Backend Developer
        </div>
        <div className='mt-2 text-base'>
          Led backend development of a Learning Management System using <span className="text-red2 font-bold">Java</span> and <span className="text-red2 font-bold">Spring Boot</span>, designing RESTful APIs, role-based access control, and course management modules for a platform used by approximately 500 users.
        </div>
      </div>
    </div>
  )
}

function PosnBuuTA(){
  const [imageToggle, setImageToggle] = useState(false);
  return (
    <div className='relative sm:w-[414px] mx-auto self-end'>
      <div className="flex py-10 sm:px-10 relative">
        <div className="mb-4 relative flex w-full">
          <div
            className='h-[256px] aspect-3/4 mx-auto absolute inset-0 my-auto'
            style={imageToggle ? {opacity: "0%", zIndex: "-10"} : {opacity: "100%", zIndex: "20"}}
          >
            <Image
              src={"/img/work/posnbuuta1.png"}
              width={256}
              height={314} 
              alt="posnbuuta1"
              style={{ objectFit: "cover" }}
              className='w-full h-full border border-black rounded-xl'
            />
          </div>
          <div
            className='h-[256px] aspect-square mx-auto'
            style={imageToggle ? {opacity: "100%", zIndex: "20"} : {opacity: "0%", zIndex: "-10"}}
          >
            <Image
              src={"/img/work/posnbuuta2.jpg"}
              width={256}
              height={314} 
              alt="posnbuuta1"
              style={{ objectFit: "cover" }}
              className='w-full h-full border border-black rounded-xl'
            />
          </div>
        </div>
        <div
          className='h-[100px] aspect-square self-end right-0 mr-8 absolute opacity-100 cursor-pointer'
          style={imageToggle ? {opacity: "0%", zIndex: "30"} : {opacity: "100%", zIndex: "40"}}
          onClick={()=>setImageToggle(!imageToggle)}
        >
          <Image
            src={"/img/work/posnbuuta2.jpg"}
            width={543}
            height={405} 
            alt="posnbuuta2"
            style={{ objectFit: "cover" }}
            className='w-full h-full border border-black rounded-xl'
          />
        </div>
        <div
          className='h-[100px] aspect-square self-end right-0 mr-8 absolute opacity-100 cursor-pointer'
          style={imageToggle ? {opacity: "100%", zIndex: "40"} : {opacity: "0%", zIndex: "30"}}
          onClick={()=>setImageToggle(!imageToggle)}
        >
          <Image
            src={"/img/work/posnbuuta1.png"}
            width={543}
            height={405} 
            alt="posnbuuta2"
            style={{ objectFit: "cover" }}
            className='w-full h-full border border-black rounded-xl'
          />
        </div>
      </div>
      <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
        <div className='text-xl font-bold text-center'>
          POSN BUU
        </div>
        <div className='text-sm text-gray-500 font-medium text-center'>
          Oct. 2023 - Current
        </div>
        <div className='text-lg font-medium text-center my-2'>
          Teaching Assistant
        </div>
        <div className='mt-2 text-base'>
          Instructed high school students from Eastern Thailand in data structures and algorithms.
          Designed competitive programming problems and comprehensive test cases for contestant selection.
        </div>
      </div>
    </div>
  )
}
