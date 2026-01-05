import Image from "next/image";

export default function Work(){
  return (
    <div id="projects" className="lg:mt-0 mt-20">
      <div className="h-20 lg:block hidden"></div>
      <div className="bg-white/66 w-full rounded-[4rem] sm:rounded-[8rem] px-12 pb-20">
        <div className="topic">
          WORK
        </div>
        <div className="lg:grid lg:grid-cols-1">
          <div className='relative sm:w-[414px] mx-auto self-end'>
            <div className='flex py-10 sm:px-10 w-[200px] h-[200px] mx-auto'>
              <Image
                src={"/img/work/fecamp.jpg"}
                width={200}
                height={200}
                alt="exprec"
                style={{ objectFit: "contain" }}
                className='w-full h-full border rounded-xl border-black'
              />
            </div>
            <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
              <div className='text-xl font-bold text-center'>
                FE Camp 19
              </div>
              <div className='text-sm text-gray-500 font-medium text-center'>
                Oct. 2025 - Current
              </div>
              <div className='text-lg font-medium text-center my-2'>
                Senior Backend Developer
              </div>
              <div className='mt-2 text-base'>
                Contributed to backend development of a Learning Management System(LMS).
                Implemented RESTful APIs using <span className="text-red2 font-bold">Java</span> and <span className="text-red2 font-bold">Spring Boot</span>.
              </div>
            </div>
          </div>
          <div className="block lg:hidden mx-12 border-b-2 border-dotted"></div>
        </div>
      </div>
    </div>
  )
}