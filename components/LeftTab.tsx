import Image from 'next/image';
import Link from 'next/link';

export default function LeftTab(){
  return (
    <div className="fixed w-16 h-screen flex justify-center flex-col items-center select-none">
      <div className='flex flex-col-reverse items-center mt-2 my-6'>
        <Link
          href='https://github.com/KimNattanan'
          className='mt-2'
          target='_blank'
          id='github-link'
        >
          <Image
            src='/github_icon.svg'
            alt='github'
            width={32}
            height={32}
          />
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
          <Image
            src='/facebook_icon.svg'
            alt='facebook'
            width={32}
            height={32}
          />
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
          <Image
            src='/instagram_icon.svg'
            alt='instagram'
            width={32}
            height={32}
          />
        </Link>
        <div className='w-0 h-0 select-arrow border-l-10 border-r-10 border-t-16 border-transparent border-t-rose-500'/>
      </div>
    </div>
  );
}