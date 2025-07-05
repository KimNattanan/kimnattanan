import LeftTab from '@/components/LeftTab';
import Image from 'next/image';
import Sprite from '@/components/Sprite';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <div className='h-[5000px] relative'>
        <div className="absolute top-0 left-0 w-full h-full -z-40">
          <Sprite width={300} height={300} gravity={2000} posX={64}/>
        </div>
        <LeftTab />
        <div className='flex ml-16'>
          <div className='h-screen w-[40vw] sticky top-0 flex flex-col items-center'>
            <div>
              Nattanan Jeungtanasirikul
            </div>
            <div className='mt-10 w-[50%] aspect-square relative border-2 p-1 rounded-md'>
              <div className='relative w-full h-full select-none bg-[rgb(33,22,22)]'>
                <Image
                  src='/prof.jpg'
                  alt='profile'
                  fill
                />
              </div>
            </div>
          </div>
          <div className='grow'>
            <About/>
            <About/>
            <About/>
          </div>
        </div>
      </div>
    </>
  );
}
