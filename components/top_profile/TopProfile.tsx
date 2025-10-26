import Image from 'next/image';
import About from './About';
import Skill from './Skill';
import DSA from './DSA';
import Contact from './Contact';
import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa6';

export default function TopProfile() {
  return (
    <div className='md:flex
                    lg:ml-16
                    xs:mr-6 xs:ml-12
                    mr-4 ml-4'
    >
      <div className='flex flex-col items-center
                      md:max-w-[40vw] md:h-dvh md:sticky md:top-0
                      '>
        <div className='pt-10 text-[rgb(55,33,33)] font-[weight:600] font-newtegomin whitespace-pre tracking-tight
                        xl:text-4xl
                        lg:text-3xl
                        md:text-3xl
                        sm:text-4xl
                        xs:text-3xl
                        text-2xl pb-4'>
          {`Nattanan  Jeungtanasirikul`}
        </div>
        <div className=' my-4 w-fit relative border-2 p-1 rounded-md'>
          <div className='relative h-[350px] select-none'>
            <Image
              src='/prof.jpg'
              alt='profile'
              height={1463}
              width={1170}
              style={{objectFit: 'cover'}}
              draggable='false'
              className='w-full h-full'
            />
          </div>
        </div>
        <div className='text-4xl font-bold font-newtegomin text-cyan-600'>
          Kim
        </div>
        <div className='w-48 border-t-2 mt-2'/>
        <div className='mt-4'>
          <Link href={"/files/resume_nattanan.pdf"} download="resume_nattanan.pdf">
            <div className='border-1 rounded-full px-8 py-1 font-medium bg-white/50'>
              Resume
              <FaFilePdf className='inline-block ml-2 mb-1'/>
            </div>
          </Link>
        </div>
      </div>
      <div className='overflow-hidden
                      md:grow md:pl-4'>
        <About/>
        <Skill/>
        <DSA/>
        <Contact/>
      </div>
    </div>
  )
}