import Image from "next/image";
import Link from "next/link";

const skillTagTitles = [
  "C++",
  "Next.js", "TypeScript", "Socket.IO", "TailwindCSS",
  "Go", "Fiber v2", "Echo", "GORM", "Gorilla Mux", "Node.js",
  "Docker", "AWS", "gRPC", "WebSocket", "RabbitMQ", "PostgreSQL", "Redis", "MongoDB", "WebRTC", "MediaPipe"
]

function SkillTag({ title, color='#e45099', bgColor='transparent' }:{ title: string, color?: string, bgColor?: string }){
  if (!skillTagTitles.includes(title)) {
    throw new Error(`Invalid skill tag title: ${title}`);
  }
  return (
    <div
      className='mx-1 mb-1 px-4 text-xs h-fit rounded-full border sm:border-2 font-medium sm:font-bold'
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
          <ProjectGoChatBackend/>
          <div className="block lg:hidden sm:mx-12 border-b-2 border-dotted"></div>
          <ProjectSpellCam/>
          <div className="sm:mx-12 border-b-2 border-dotted"></div>
          <div className="hidden lg:block sm:mx-12 border-b-2 border-dotted"></div>
          <ProjectExprec/>
          <div className="block lg:hidden sm:mx-12 border-b-2 border-dotted"></div>
          <ProjectCleanGoUserService/>
          <div className="sm:mx-12 border-b-2 border-dotted"></div>
          <div className="hidden lg:block sm:mx-12 border-b-2 border-dotted"></div>
          <ProjectCPPLibrary/>
        </div>
      </div>
    </div>
  )
}

function ProjectGoChatBackend(){
  return (
    <div className='relative sm:w-[414px] mx-auto self-end'>
      <div className='flex p-10'>
        <Image
          src={"/img/projects/go-chat-backend-thumb.png"}
          width={256}
          height={256}
          alt="go-chat-backend"
          style={{ objectFit: "contain" }}
          className='w-full h-full border-black'
        />
      </div>
      <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
        <div className='text-xl font-bold text-center'>
          go-chat-backend
        </div>
        <div className='mt-2 text-base'>
          Chat backend implemented in Go, following a modular monolith architecture with support for RESTful using <span className="text-red2 font-bold">{`Echo`}</span> framework, gRPC, WebSocket APIs, and RabbitMQ-based messaging.
        </div>
        <div className="flex mt-4 flex-wrap">
          <SkillTag title="Go"/>
          <SkillTag title="Echo"/>
          <SkillTag title="gRPC"/>
          <SkillTag title="WebSocket"/>
          <SkillTag title="RabbitMQ"/>
          <SkillTag title="Redis"/>
          <SkillTag title="PostgreSQL"/>
          <SkillTag title="GORM"/>
          <SkillTag title="Docker"/>
        </div>
        <div className='mt-4 flex justify-center text-sm font-semibold text-blue2'>
          <Link href={"https://github.com/KimNattanan/go-chat-backend"} target='_blank'>
            <div className='w-fit underline underline-offset-2 cursor-pointer hover:opacity-50'>
              Learn more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectSpellCam(){
  return (
    <div className='relative sm:w-[414px] mx-auto self-end'>
      <div className='flex p-10'>
        <Image
          src={"/img/projects/spellcam-thumb.png"}
          width={478}
          height={320}
          alt="spellcam"
          style={{ objectFit: "contain" }}
          className='w-full h-full border-black'
        />
      </div>
      <div className="bg-white py-6 px-8 mb-4 rounded-md border border-stone-200">
        <div className='text-xl font-bold text-center'>
          SpellCam - Video Call Web App
        </div>
        <div className='mt-2 text-base'>
          A video call web application where users sign in, create custom hand gestures, and on a peer-to-peer video call, posing created hand gestures will displays the label for both people.
          Hand poses are detected with <span className="text-red2 font-bold">{`MediaPipe`}</span> Hand Landmarker from each caller's camera feed.
        </div>
        <div className="flex mt-4 flex-wrap">
          <SkillTag title="Next.js"/>
          <SkillTag title="TypeScript"/>
          <SkillTag title="TailwindCSS"/>
          <SkillTag title="Node.js"/>
          <SkillTag title="Socket.IO"/>
          <SkillTag title="WebRTC"/>
          <SkillTag title="MongoDB"/>
          <SkillTag title="MediaPipe"/>
        </div>
        <div className='mt-4 flex justify-center text-sm font-semibold text-blue2'>
          <Link href={"https://github.com/KimNattanan/spellcam"} target='_blank'>
            <div className='w-fit underline underline-offset-2 cursor-pointer hover:opacity-50'>
              Learn more
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectCleanGoUserService(){
  return (
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
          A Go-based user service built with Clean Architecture, featuring Google OAuth2 authentication, PostgreSQL persistence, and secure JWT access and refresh tokens with rotation, exposed via RESTful APIs using <span className="text-red2 font-bold">{`Gorilla Mux`}</span>.
        </div>
        <div className="flex mt-4 flex-wrap">
          <SkillTag title="Go"/>
          <SkillTag title="Gorilla Mux"/>
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
  );
}

function ProjectExprec(){
  return (
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
          A simple expense-tracking web application with a summary dashboard. Built with Next.js for the frontend and a Go backend using <span className="text-red2 font-bold">Fiber v2</span> and GORM.
        </div>
        <div className="flex mt-4 flex-wrap">
          <SkillTag title="Next.js"/>
          <SkillTag title="TypeScript"/>
          <SkillTag title="TailwindCSS"/>
          <SkillTag title="Go"/>
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
  );
}

function ProjectCPPLibrary(){
  return (
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
  );
}