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
      <div className='
        relative w-full aspect-[4/3] mx-auto
        bg-black/5 border-1
        lg:w-1/2
        sm:w-2/3
        py-8 px-4 xs:px-8 my-12
      '>
        <div className='
          flex
          md:px-10 md:pt-10 md:mb-10
          mb-4
        '>
          <Image
            src={"/exprec-thumb.png"}
            width={492}
            height={740}
            alt="exprec-1"
            style={{ objectFit: "contain" }}
            className='w-full h-full border-1 rounded-xl border-black'
          />
        </div>
        <div className='
          sm:text-xl font-bold text-center
          xs:text-lg
        '>
          Exprec - Expense Tracking Website
        </div>
        <div className='
          mt-2 mb-8
          sm:text-lg
          xs:text-base
          text-sm
        '>
          A simple website for tracking expenses and see summary dashboard. Making the expense noting easier by making templates of price and category.
        </div>
        <div className='flex justify-center text-sm font-semibold text-cyan-600'>
          <Link href={"https://exprec.kim"} target='_blank'>
            <div className='w-fit underline underline-offset-2 cursor-pointer text-center'>
              exprec.kim
            </div>
          </Link>
          <Link href={"https://github.com/KimNattanan/exprec-frontend"} target='_blank'>
            <div className='w-fit underline underline-offset-2 mx-4 cursor-pointer text-center'>
              github-frontend
            </div>
          </Link>
          <Link href={"https://github.com/KimNattanan/exprec-backend"} target='_blank'>
            <div className='w-fit underline underline-offset-2 cursor-pointer text-center'>
              github-backend
            </div>
          </Link>
        </div>
      </div>
      <div className='
        relative w-full mx-auto
        bg-black/5 border-1
        lg:w-1/2
        sm:w-2/3
        py-8 px-4 xs:px-8 my-12
      '>
        <div className='
          sm:text-xl font-bold text-center
          xs:text-lg
        '>
          Algorithms and Code Resources in C++
        </div>
        <div className='
          mt-2 mb-8
          sm:text-lg
          xs:text-base
          text-sm
        '>
          <div className='font-semibold w-fit text-cyan-600 underline underline-offset-2 cursor-pointer my-2'>
            <Link href={"https://github.com/KimNattanan/compet"} target='_blank'>
              Competitive Programming Algorithms and Problem Solutions
            </Link>
          </div>
          <div>
            Algorithms for competitive programming and solutions to some problems.
          </div>
          <div className='font-semibold w-fit text-cyan-600 underline underline-offset-2 cursor-pointer my-2'>
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