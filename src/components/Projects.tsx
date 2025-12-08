import Image from "next/image";
import Link from "next/link";

function SkillTag({ title, color='#e45099', bgColor='transparent' }:{ title: string, color?: string, bgColor?: string }){
  return (
    <div
      className='mx-2 mb-1 px-4 text-xs h-fit rounded-full border sm:border-2 font-medium sm:font-bold'
      style={{color: color, backgroundColor: bgColor}}
    >
      {title}
    </div>
  )
}

export default function Projects(){
  return (
    <div id="projects" className="lg:mt-0 mt-20">
      <div className="h-20 lg:block hidden"></div>
      <div className="bg-white/66 w-full rounded-[4rem] sm:rounded-[8rem] px-12 pb-20">
        <div className="topic">
          PROJECTS
        </div>
        <div className="lg:grid lg:grid-cols-2">
          <div className='relative sm:w-[414px] mx-auto self-end'>
            <div className='flex py-10 sm:px-10'>
              <Image
                src={"/img/projects/exprec-thumb.png"}
                width={492}
                height={740}
                alt="exprec"
                style={{ objectFit: "contain" }}
                className='w-full h-full border rounded-xl border-black'
              />
            </div>
            <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
              <div className='text-xl font-bold text-center'>
                Exprec - Expense Tracking Website
              </div>
              <div className='mt-2 text-base'>
                A simple website for tracking expenses and see summary dashboard. Making the expense noting easier by making templates of price and category.
              </div>
              <div className="flex mt-4 flex-wrap">
                <SkillTag title="Next.js"/>
                <SkillTag title="Typescript"/>
                <SkillTag title="GO"/>
                <SkillTag title="Fiber v2"/>
                <SkillTag title="GORM"/>
                <SkillTag title="PostgreSQL"/>
                <SkillTag title="Docker"/>
                <SkillTag title="AWS"/>
              </div>
              <div className='mt-4 flex justify-center text-sm font-semibold text-blue2'>
                <Link href={"https://github.com/KimNattanan/exprec-backend"} target='_blank'>
                  <div className='w-fit underline underline-offset-2 cursor-pointer hover:opacity-50'>
                    Learn more
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="block lg:hidden sm:mx-12 border-b-2 border-dotted"></div>
          <div className='relative sm:w-[414px] mx-auto self-end'>
            <div className='flex p-10'>
              <Image
                src={"/img/projects/go-user-service-thumb.png"}
                width={375}
                height={375}
                alt="go-user-service"
                style={{ objectFit: "contain" }}
                className='w-full h-full border rounded-full border-black'
              />
            </div>
            <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
              <div className='text-xl font-bold text-center'>
                Clean Go User Service
              </div>
              <div className='mt-2 text-base'>
                A Go-based User Service designed with Clean Architecture, integrating the
                <span className="text-red2 font-bold">{` Gorilla `}</span>
                framework, Google OAuth2 authentication, and a robust token management system.
              </div>
              <div className="flex mt-4 flex-wrap">
                <SkillTag title="GO"/>
                <SkillTag title="Gorilla"/>
                <SkillTag title="GORM"/>
                <SkillTag title="PostgreSQL"/>
                <SkillTag title="Redis"/>
                <SkillTag title="Docker"/>
              </div>
              <div className='mt-4 flex justify-center text-sm font-semibold text-blue2'>
                <Link href={"https://github.com/KimNattanan/go-user-service"} target='_blank'>
                  <div className='w-fit underline underline-offset-2 cursor-pointer hover:opacity-50'>
                    Learn more
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:mx-12 border-b-2 border-dotted"></div>
          <div className="hidden lg:block sm:mx-12 border-b-2 border-dotted"></div>
          <div className='relative sm:w-[414px] mx-auto self-end'>
            <div className='flex p-10'>
              <Image
                src={"/img/projects/codeforces.webp"}
                width={256}
                height={256}
                alt="codeforces"
                style={{ objectFit: "contain" }}
                className='w-full h-full border-black'
              />
            </div>
            <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
              <div className='text-xl font-bold text-center'>
                Algorithms and Code Resources in C++
              </div>
              <div className='mt-2 text-base'>
                Algorithms for competitive programming and solutions to some problems.
              </div>
              <div className="flex mt-4 flex-wrap">
                <SkillTag title="C++"/>
              </div>
              <div className='mt-4 flex justify-center text-sm font-semibold text-blue2'>
                <Link href={"https://github.com/KimNattanan/compet"} target='_blank'>
                  <div className='w-fit underline underline-offset-2 cursor-pointer hover:opacity-50'>
                    Learn more
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="block lg:hidden mx-12 border-b-2 border-dotted"></div>
        </div>
      </div>
    </div>
  )
}