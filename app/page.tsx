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
        <div className="absolute w-full h-full -z-40 overflow-hidden">
          <Sprite width={200} height={200} gravity={2000} posX={-200}/>
        </div>
        <LeftTab />
        <div className='md:flex
                        lg:ml-16
                        xs:mr-12
                        mr-6
                        ml-12'
        >
          <div className='flex flex-col items-center
                          md:max-w-[40vw] md:h-screen md:sticky md:top-0
                          '>
            <div className='pt-10 text-[rgb(55,33,33)] font-[weight:600] font-newtegomin whitespace-pre tracking-tight
                            xl:text-4xl
                            lg:text-3xl
                            md:text-2xl
                            text-xs max-md:pb-4'>
              {`Nattanan  Jeungtanasirikul`}
            </div>
            <div className=' my-4 w-[60%] relative border-2 p-1 rounded-md'>
              <div className='relative w-full overflow-hidden select-none bg-[rgb(33,22,22)]'>
                <Image
                  src='/prof.jpg'
                  alt='profile'
                  height={1463}
                  width={1170}
                  style={{objectFit: 'contain'}}
                  draggable='false'
                />
              </div>
            </div>
            <div className='text-4xl font-bold font-newtegomin text-cyan-600'>
              Kim
            </div>
            <div className='w-48 border-t-2 mt-2'/>
          </div>
          <div className='overflow-hidden
                          md:grow md:pl-4'>
            <About/>
            <DSA/>
            <Contact/>
          </div>
        </div>
      </div>
    </>
  );
}
