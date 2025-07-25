import LeftTab from '@/components/LeftTab';
import Image from 'next/image';
import Sprite from '@/components/Sprite';
import About from '@/components/About';
import DSA from '@/components/DSA';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <div className='h-[5000px] relative'>
        <div className="absolute left-0 w-full h-full -z-40 overflow-hidden">
          <Sprite width={200} height={200} gravity={2000} posX={-200}/>
        </div>
        <LeftTab />
        <div className='flex ml-16'>
          <div className='h-screen min-w-[40vw] max-w-[40vw] sticky top-0 flex flex-col items-center'>
            <div className='text-4xl pt-10 text-[rgb(55,33,33)] font-[weight:600] font-newtegomin whitespace-pre tracking-tight'>
              {`Nattanan  Jeungtanasirikul`}
            </div>
            <div className=' my-4 w-[60%] relative border-2 p-1 rounded-md'>
              <div className='relative w-full select-none bg-[rgb(33,22,22)]'>
                <Image
                  src='/prof.jpg'
                  alt='profile'
                  height={1463}
                  width={1170}
                  draggable='false'
                />
              </div>
            </div>
            <div className='text-4xl font-bold font-newtegomin text-cyan-600'>
              Kim
            </div>
            <div className='w-48 border-t-2 mt-2'/>
          </div>
          <div className='grow pr-12 overflow-hidden'>
            <About/>
            <DSA/>
            <Contact/>
          </div>
        </div>
      </div>
    </>
  );
}
