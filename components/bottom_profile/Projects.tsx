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
      <div className='border-1 w-full lg:w-3/4 xl:w-2/3 aspect-[4/3] p-8 mx-auto relative bg-black/5'>
        <div className='w-full h-full mx-auto relative flex p-10'>
          <Image
            src={"/exprec-page3.png"}
            width={492}
            height={740}
            alt="exprec-1"
          />
          <Image
            src={"/exprec-dashboard.jpeg"}
            width={537}
            height={1452}
            alt="exprec-2"
          />
        </div>
        <div className='text-xl font-bold text-center'>
          Exprec - Expense Tracking Website
        </div>
        <div className='text-lg mt-2 mb-8'>
          <div>A simple website for tracking expenses and see summary dashboard. Making the expense noting easier by making templates of price and category.</div>
        </div>
        <div className='flex justify-center'>
          <Link href={"https://exprec.kim"} target='_blank'>
            <div className='text-sm font-semibold w-fit text-cyan-600 border-b-2 cursor-pointer'>
              exprec.kim
            </div>
          </Link>
          <Link href={"https://github.com/KimNattanan/exprec-frontend"} target='_blank'>
            <div className='text-sm font-semibold w-fit mx-4 text-cyan-600 border-b-2 cursor-pointer'>
              github-frontend
            </div>
          </Link>
          <Link href={"https://github.com/KimNattanan/exprec-backend"} target='_blank'>
            <div className='text-sm font-semibold w-fit text-cyan-600 border-b-2 cursor-pointer'>
              github-backend
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}