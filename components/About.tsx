export default function About(){
  return (
    <div className="flex flex-col w-full my-24 bg-[rgba(251,85,138,0.1)] border-1 border-x-0
                    max-md:w-[400px] max-md:mx-auto">
      <div className="flex justify-center my-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]
                      lg:text-7xl
                      text-5xl">
        {`ABOUT`}
      </div>
      <div className="mb-12 whitespace-pre-wrap tracking-tight
                      lg:text-xl lg:mx-12 lg:first-letter:ml-12
                      text-base mx-6 first-letter:ml-6">
        {`I'm a Computer Engineering student at Chulalongkorn University.  I'm currently exploring frontend and backend development.`}
      </div>
    </div>
  );
}