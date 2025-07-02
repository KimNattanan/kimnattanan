import LeftTab from '@/components/LeftTab';
import Image from 'next/image';
import DummySprite from '@/components/DummySprite';
import About from '@/components/About';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='h-[5000px] relative'>
        <div className="absolute top-0 left-0 w-full h-full -z-40">
          <DummySprite posX={164}/>
        </div>
        <LeftTab />
        <div className='flex ml-16'>
          <div className='h-screen flex-1/2 sticky top-0 flex flex-col items-center'>
            <div>
              Nattanan Jeungtanasirikul
            </div>
            <div className='mt-10 w-[50%] aspect-square relative border-2 p-2 rounded-md'>
              <div className='relative w-full h-full'>
                <Image
                  src='/fall_anim.png'
                  alt='profile'
                  fill
                />
              </div>
            </div>
          </div>
          <div className='flex-1/2'>
            <div className='w-full flex justify-center mt-8'>
              <Link
                href='/dummy'
                target='_blank'
                className='text-3xl text-rose-500 hover:scale-150'
              >??</Link>
            </div>
            <About/>
            <About/>
            <About/>
          </div>
        </div>
      </div>
    </>
  );
}
