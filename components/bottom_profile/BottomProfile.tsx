import Project from "./Projects";

export default function BottomProfile() {
  return (
    <div className="absolute w-full mt-16">
      <div className="lg:ml-16
                      xs:mr-6 xs:ml-18
                      mr-4 ml-4">
        {/* <div className="bg-white border-1 rounded-4xl mx-auto flex flex-col items-center relative
                        xl:w-[1000px]
                        lg:w-[800px]
                        md:w-[640px]
                        sm:w-[480px]
                        xs:w-[384px] xs:p-12
                        w-[248px] px-4 py-8"> */}
          <Project/>
        {/* </div> */}
      </div>
    </div>
  )
}