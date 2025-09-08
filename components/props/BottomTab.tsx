import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

export default function BottomTab(){
  return (
    <div className="fixed w-dvw justify-center flex-row items-center select-none bottom-0
                    lg:h-16
                    xs:hidden
                    h-12 flex">
      <div className='flex flex-col-reverse items-center mx-6'>
        <Link
          href='https://github.com/KimNattanan'
          target='_blank'
          id='github-link'
        >
          <div className='relative w-6 h-6 lg:w-8 lg:h-8'>
            <SiGithub size={'100%'}/>
          </div>
        </Link>
      </div>
      <div className='flex flex-col-reverse items-center mx-6'>
        <Link
          href='https://www.linkedin.com/in/kimnattanan/'
          target='_blank'
          id='linked-link'
        >
          <div className='relative w-6 h-6 lg:w-8 lg:h-8'>
            <FaLinkedin size={'100%'}/>
          </div>
        </Link>
      </div>
      <div className='flex flex-col-reverse items-center mx-6'>
        <Link
          href='https://www.facebook.com/nattanan.jeungtanasirikul.1'
          target='_blank'
          id='fb-link'
        >
          <div className='relative w-6 h-6 lg:w-8 lg:h-8'>
            <FaFacebook size={'100%'}/>
          </div>
        </Link>
      </div>
      <div className='flex flex-col-reverse items-center mx-6'>
        <Link
          href='https://www.instagram.com/kimnattanan/'
          target='_blank'
          id='ig-link'
        >
          <div className='relative w-6 h-6 lg:w-8 lg:h-8'>
            <FaInstagram size={'100%'}/>
          </div>
        </Link>
      </div>
    </div>
  );
}