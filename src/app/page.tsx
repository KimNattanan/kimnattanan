import Contact from "@/components/Contact";
import DSA from "@/components/DSA";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

function LinkContainer() {
  return (
    <div className="flex justify-center flex-wrap">
      <Link
        className="content-center my-2` hover:opacity-50 sm:text-2xl"
        href={"/files/resume_nattanan.pdf"}
        download="resume_nattanan.pdf"
      >
        <div className='font-black w-fit border border-dashed rounded-lg px-4 sm:px-8 sm:py-1 sm:border-2 mx-2'>
          Resume
          <FaFilePdf className='inline-block ml-2 mb-1'/>
        </div>
      </Link>
      <div className="flex my-2">
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://github.com/KimNattanan'
          target='_blank'
          id='github-link'
        >
          <div className='relative w-6 aspect-square sm:w-8'>
            <SiGithub size={'100%'}/>
          </div>
        </Link>
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://www.linkedin.com/in/kimnattanan/'
          target='_blank'
          id='linkedin-link'
        >
          <div className='relative w-6 aspect-square sm:w-8 text-cyan-600'>
            <FaLinkedin size={'100%'}/>
          </div>
        </Link>
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://www.facebook.com/nattanan.jeungtanasirikul.1'
          target='_blank'
          id='fb-link'
        >
          <div className='relative w-6 aspect-square sm:w-8 text-blue1'>
            <FaFacebook size={'100%'}/>
          </div>
        </Link>
        <Link
          className="mx-2 content-center hover:opacity-50"
          href='https://www.instagram.com/kimnattanan/'
          target='_blank'
          id='ig-link'
        >
          <div className='relative w-6 aspect-square sm:w-8 text-red1'>
            <FaInstagram size={'100%'}/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="lg:mx-10 xl:mx-20 lg:flex lg:flex-row">
        <div className="grow lg:pr-10 xl:pr-20 lg:pt-20 pt-6 sm:pb-6 pb-4">
          <div className="text-[1.43rem] sm:text-4xl xl:text-5xl font-black text-center text-glow">
            Nattanan Jeungtanasirikul
          </div>
          <div className="text-sm leading-4 sm:text-base text-center sm:mt-2 lg:text-xl font-bold text-blue1 text-glow">
            Computer Engineering student at <span className=" text-nowrap">Chulalongkorn University</span>
          </div>
          <div className="lg:block hidden font-black mx-auto w-fit text-3xl text-black mt-16 text-glow">{`I'm Kim`}</div>
          <div className="hidden lg:block w-fit mx-auto space-y-2 mt-6 text-lg text-center text-glow">
            <p>Interest in building reliable, efficient software.</p>
            <p>Love practicing competitive programming.</p>
          </div>
          <div className="hidden lg:block mt-20">
            <LinkContainer/>
          </div>
        </div>
        <div className="hidden lg:block aspect-9/16 h-[calc(100vh-5rem)] mx-auto relative shrink-0 overflow-hidden rounded-[4rem]">
          <Image
            alt="profile"
            src={'/img/prof.jpg'}
            fill
          />
        </div>
        <div className="lg:hidden">
          <div className="flex">
            <div className="grow px-4 sm:px-6">
              <div className="font-black mx-auto w-fit text-2xl text-black mt-10 sm:mt-20 sm:text-3xl text-glow">{`I'm Kim`}</div>
              <div className="w-fit mx-auto space-y-6 mt-12 text-xs sm:text-lg text-center text-glow">
                <p>
                  <span className="text-nowrap">Interest in building reliable, </span>
                  <wbr/>
                  <span className="text-nowrap">efficient software.</span>
                </p>
                <p><span className="text-nowrap">Love practicing </span><wbr/><span className="text-nowrap">competitive programming.</span></p>
              </div>
              <div className="mt-14 sm:mt-32">
                <LinkContainer/>
              </div>
            </div>
            <div className="w-[40vw] h-[300px] sm:w-[40vw] sm:h-[500px] relative shrink-0 overflow-hidden rounded-3xl sm:rounded-[4rem]">
              <Image
                alt="profile"
                src={'/img/prof.jpg'}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Projects/>
      <DSA/>
      <Contact/>
      <div className="w-fit mx-auto text-center mb-12 mt-20">
        <p>©KimNattanan</p>
      </div>
    </>
  );
}
