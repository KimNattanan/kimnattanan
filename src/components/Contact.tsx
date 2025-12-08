'use client'

import { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TbCopy, TbCopyCheck } from "react-icons/tb";

function CopyBtn({ value, size }:{ value: string, size: string }){
  const [copied, setCopied] = useState(false);
  
  const copyHandler = ()=>{
    setCopied(true);
    setTimeout(()=>setCopied(false), 1000);
    navigator.clipboard.writeText(value);
  };

  return copied ? (
    <div>
      <TbCopyCheck size={size}/>
    </div>
  ) : (
    <div className="cursor-pointer hover:opacity-50" onClick={copyHandler}>
      <TbCopy size={size}/>
    </div>
  );
}

export default function Contact(){
  return (
    <div id="contact">
      <div className="h-20"></div>
      <div>
        <div className="topic">CONTACT</div>
        <div className="w-fit mx-auto font-medium">
          <div className="flex items-center mt-12 mb-4 sm:text-xl">
            <MdEmail size={"30px"}/>
            <p className="mx-2 sm:mx-4">:</p>
            <p className="border-b-2 mr-2 sm:mr-4 text-red1">jeung.nattanan@gmail.com</p>
            <CopyBtn value="jeung.nattanan@gmail.com" size="30px" />
          </div>
          <div className="flex items-center justify-center my-16">
            <div className="flex-1">
              <div className="hover:opacity-50 w-fit mx-auto">
                <a className="w-fit" target="_blank" href="https://github.com/KimNattanan">
                  <BsGithub size={"40px"}/>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="hover:opacity-50 w-fit mx-auto text-cyan-600">
                <a target="_blank" href="https://www.linkedin.com/in/kimnattanan/">
                  <BsLinkedin size={"40px"}/>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="hover:opacity-50 w-fit mx-auto text-blue1">
                <a target="_blank" href="https://www.facebook.com/nattanan.jeungtanasirikul.1">
                  <BsFacebook size={"40px"}/>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <div className="hover:opacity-50 w-fit mx-auto text-red1">
                <a target="_blank" href="https://www.instagram.com/kimnattanan/">
                  <BsInstagram size={"40px"}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto text-xl font-medium text-center text-glow">
          <span className="text-nowrap">I’m always open to messages, </span>
          <wbr/>
          <span className="text-nowrap">please feel free to reach out!</span>
        </div>
      </div>
    </div>
  );
}