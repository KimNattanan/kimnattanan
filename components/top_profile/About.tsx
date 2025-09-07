export default function About(){
  return (
    <div className="flex flex-col bg-[rgba(251,85,138,0.1)] border-1 border-x-0
                    md:w-full md:mx-0
                    xs:w-[384px] xs:my-24
                    w-[248px] mx-auto my-16">
      <div className="text-center mt-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]
                      lg:text-7xl
                      xs:text-5xl xs:mb-8
                      text-4xl mb-4">
        {`ABOUT`}
      </div>
      <div className="whitespace-pre-wrap tracking-tight
                      lg:text-xl lg:mx-12 lg:first-letter:ml-12
                      xs:text-left xs:text-base first-letter:ml-6 xs:mb-12
                      text-xs mx-6 mb-8">
        {`I'm a Computer Engineering student at Chulalongkorn University.  I'm currently exploring frontend and backend development.`}
      </div>
    </div>
  );
}