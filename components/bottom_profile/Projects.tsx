import Image from 'next/image'
import Link from 'next/link'

export default function Project(){
  return (
    <div>
      <div className="text-center text-[rgb(77,13,33)] select-none tracking-[0.5rem]
                      lg:text-7xl
                      xs:text-5xl xs:mb-8
                      text-3xl mb-4">
        {`PROJECTS`}
      </div>
      <div className='border-1 w-full lg:w-3/4 xl:w-2/3 aspect-[4/3] p-8 mx-auto relative bg-black/5 my-12'>
        <div className='flex h-full p-10'>
          <div className='w-full h-full relative flex overflow-hidden'>
            <Image
              src={"/exprec-page3.png"}
              width={492}
              height={740}
              alt="exprec-1"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className='h-full relative flex overflow-hidden'>
            <Image
              src={"/exprec-dashboard.jpeg"}
              width={637}
              height={1254}
              alt="exprec-2"
              className=' object-contain'
            />
          </div>
        </div>
        <div className='text-xl font-bold text-center'>
          Exprec - Expense Tracking Website
        </div>
        <div className='text-lg mt-2 mb-8'>
          <div>A simple website for tracking expenses and see summary dashboard. Making the expense noting easier by making templates of price and category.</div>
        </div>
        <div className='flex justify-center text-sm font-semibold text-cyan-600'>
          <Link href={"https://exprec.kim"} target='_blank'>
            <div className='w-fit underline underline-offset-2 cursor-pointer'>
              exprec.kim
            </div>
          </Link>
          <Link href={"https://github.com/KimNattanan/exprec-frontend"} target='_blank'>
            <div className='w-fit underline underline-offset-2 mx-4 cursor-pointer'>
              github-frontend
            </div>
          </Link>
          <Link href={"https://github.com/KimNattanan/exprec-backend"} target='_blank'>
            <div className='w-fit underline underline-offset-2 cursor-pointer'>
              github-backend
            </div>
          </Link>
        </div>
      </div>
      <div className='border-1 w-full lg:w-3/4 xl:w-2/3 p-8 mx-auto relative bg-black/5 my-12'>
        <div className='text-xl font-bold text-center'>
          Algorithms and Code Resources in C++
        </div>
        <div className='text-lg mt-4 mb-8'>
          <div className='text-lg font-semibold w-fit text-cyan-600 underline underline-offset-2 cursor-pointer my-2'>
            <Link href={"https://github.com/KimNattanan/posn"} target='_blank'>
              Competitive Programming Algorithms and Problem Solutions
            </Link>
          </div>
          <div>
            Algorithms for competitive programming and solutions to some problems.
          </div>
          <div className='text font-semibold w-fit text-cyan-600 underline underline-offset-2 cursor-pointer my-2'>
            <Link href={"https://github.com/KimNattanan/posn"} target='_blank'>
              For POSN
            </Link>
          </div>
          <div>
            More specific scope to POSN.
          </div>
        </div>
      </div>
    </div>
  )
}