import Image from 'next/image';
import Link from 'next/link';

export default function LeftTab(){
  return (
    <div className="fixed h-dvh flex justify-center flex-col items-center select-none
                    lg:w-16
                    w-12">
      <div className='flex flex-col-reverse items-center mt-2 my-6'>
        <Link
          href='https://github.com/KimNattanan'
          className='mt-2'
          target='_blank'
          id='github-link'
        >
          <div className='relative w-6 h-6 lg:w-8 lg:h-8'>
            <Image
              src='/github_icon.svg'
              alt='github'
              fill
            />
          </div>
        </Link>
        <div className='w-0 h-0 select-arrow border-l-10 border-r-10 border-t-16 border-transparent border-t-rose-500'/>
      </div>
      <div className='flex flex-col-reverse items-center mt-2 my-6'>
        <Link
          href='https://www.facebook.com/nattanan.jeungtanasirikul.1'
          className='mt-2'
          target='_blank'
          id='fb-link'
        >
          <div className='relative w-6 h-6 lg:w-8 lg:h-8'>
            <Image
              src='/facebook_icon.svg'
              alt='facebook'
              fill
            />
          </div>
        </Link>
        <div className='w-0 h-0 select-arrow border-l-10 border-r-10 border-t-16 border-transparent border-t-rose-500'/>
      </div>
      <div className='flex flex-col-reverse items-center mt-2 my-6'>
        <Link
          href='https://www.instagram.com/kimnattanan/'
          className='mt-2'
          target='_blank'
          id='ig-link'
        >
          <div className='relative w-6 h-6 lg:w-8 lg:h-8'>
            <Image
              src='/instagram_icon.svg'
              alt='instagram'
              fill
            />
          </div>
        </Link>
        <div className='w-0 h-0 select-arrow border-l-10 border-r-10 border-t-16 border-transparent border-t-rose-500'/>
      </div>
    </div>
  );
}