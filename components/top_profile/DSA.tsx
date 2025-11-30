import Link from "next/link";

export default function DSA(){
  return (
    <div className="flex flex-col bg-[rgba(251,85,138,0.1)] border-1 border-x-0
                    md:w-full md:mx-0
                    xs:w-[384px] xs:my-24
                    w-[248px] mx-auto my-16">
      <div className="flex justify-center mt-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]
                      lg:text-7xl
                      xs:text-5xl
                      text-4xl">
        DSA
      </div>
      <div className="flex justify-center text-[rgb(77,13,33)] select-none whitespace-pre-wrap tracking-tight
                      lg:text-xl
                      xs:text-lg xs:mb-8
                      text-sm mb-4">
        {`( Data Structures and Algorithms )`}
      </div>
      <div className="mb-12 whitespace-pre-wrap tracking-tight
                      xl:text-xl xl:mx-12
                      lg:block lg:text-base lg:mx-8
                      hidden">
        <div>
          <div className="mr-3 inline-block first-letter:mr-3">
            ◉The 19ᵗʰ Thailand Olympiad in Informatics :
          </div>
          <span className="font-semibold text-amber-600">1ˢᵗ place</span>
        </div>
        <div>
          <span className="mr-3 inline-block first-letter:mr-3">
            ◉Codeforces :
          </span>
          <Link
            href={'https://codeforces.com/profile/kimnattanan'}
            target="_blank"
            className="font-semibold text-[#0000FF]"
          >kimnattanan</Link>
        </div>
        <div>
          <span className="mr-3 inline-block first-letter:mr-3">
            ◉Atcoder :
          </span>
          <Link
            href={'https://atcoder.jp/users/kimnattanan'}
            target="_blank"
            className="font-semibold text-[#0000FF]"
          >kimnattanan</Link>
        </div>
      </div>
      <div className="mx-6 grid grid-cols-[1.5rem_2fr_1fr]
                      lg:hidden
                      xs:text-sm xs:mb-12
                      text-xs mb-8">
        <div className="my-2">◉</div>
        <div className="my-2 pr-4 border-r-1">The 19ᵗʰ Thailand Olympiad in Informatics</div>
        <div className="py-2 pl-4 font-semibold text-amber-600 content-center">1ˢᵗ place</div>
        <div className="border-t-1"></div>
        <div className="border-t-1"></div>
        <div className="border-t-1"></div>
        <div className="my-2">◉</div>
        <div className="my-2 pr-4 border-r-1">Codeforces</div>
        <div className="py-2 pl-4 font-semibold text-[#0000FF] content-center">
          <Link
            href={'https://codeforces.com/profile/kimnattanan'}
            target="_blank"
          >kimnattanan</Link>
        </div>
        <div className="border-t-1"></div>
        <div className="border-t-1"></div>
        <div className="border-t-1"></div>
        <div className="my-2">◉</div>
        <div className="my-2 pr-4 border-r-1">Atcoder</div>
        <div className="py-2 pl-4 font-semibold text-[#0000FF] content-center">
          <Link
            href={'https://atcoder.jp/users/kimnattanan'}
            target="_blank"
          >kimnattanan</Link>
        </div>
      </div>
    </div>
  );
}