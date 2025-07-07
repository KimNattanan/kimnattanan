export default function About(){
  return (
    <div className="flex flex-col w-full max-w-full my-24 bg-[rgba(251,85,138,0.1)] border-1 border-x-0">
      <div className="flex justify-center text-7xl my-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]">
        ABOUT
      </div>
      <div className="mb-12 mx-12 text-xl whitespace-pre-wrap tracking-tight">
        {`       I'm  a  Computer  Engineering  student  at  Chulalongkorn  University.\nI'm  currently  exploring  frontend  and  backend  development.`}
      </div>
    </div>
  );
}