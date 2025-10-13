export default function Skill(){
  return (
    <div className="flex flex-col bg-[rgba(251,85,138,0.1)] border-1 border-x-0
                    md:w-full md:mx-0
                    xs:w-[384px] xs:my-24
                    w-[248px] mx-auto my-16">
      <div className="text-center mt-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]
                      lg:text-7xl
                      xs:text-5xl xs:mb-8
                      text-4xl mb-4">
        {`SKILL`}
      </div>
      <div className="whitespace-pre-wrap tracking-tight
                      lg:text-lg lg:mx-12
                      xs:text-left xs:mb-12 xs:flex xs:justify-center
                      text-sm mx-6 mb-8 "
        id="skill-box"
      >
        <div className="mb-4 xs:flex-auto xs:border-r-1">
          <div className="font-bold">Frontend</div>
          <ul>
            <li className="text-cyan-600">React.js, Next.js</li>
            <li className="text-cyan-700">Tailwind</li>
          </ul>
        </div>
        <div className="mb-4 xs:flex-auto xs:ml-4 xs:border-r-1">
          <div className="font-bold">Backend</div>
          <ul>
            <li className="text-lime-700">Node.js, Express</li>
            <li className="text-blue-700">Go</li>
          </ul>
        </div>
        <div className="xs:flex-auto xs:ml-4">
          <div className="font-bold">General</div>
          <ul>
            <li className="text-orange-600">Git</li>
            <li className="text-cyan-600">Docker</li>
            <li className="text-amber-600">AWS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}