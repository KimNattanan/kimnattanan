import Link from "next/link";

export default function DSA(){
  return (
    <div className="flex flex-col w-full my-24 bg-[rgba(251,85,138,0.1)] border-1 border-x-0
                    max-md:w-[400px] max-md:mx-auto">
      <div className="flex justify-center mt-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]
                      lg:text-7xl
                      text-5xl">
        DSA
      </div>
      <div className="flex justify-center mb-8 text-[rgb(77,13,33)] select-none whitespace-pre-wrap tracking-tight
                      lg:text-xl
                      text-lg">
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
            className="font-semibold text-[rgb(0,0,255)]"
          >kimnattanan</Link>
        </div>
        <div>
          <span className="mr-3 inline-block first-letter:mr-3">
            ◉Atcoder :
          </span>
          <Link
            href={'https://atcoder.jp/users/kimnattanan'}
            target="_blank"
            className="font-semibold text-[#00C0C0]"
          >kimnattanan</Link>
        </div>
      </div>
      <div className="mb-12 text-sm mx-6 grid-cols-[1.5rem_2fr_1fr]
                      lg:hidden
                      grid">
        <div className="my-2">◉</div>
        <div className="my-2 pr-4 border-r-1">The 19ᵗʰ Thailand Olympiad in Informatics</div>
        <div className="py-2 pl-4 font-semibold text-amber-600 content-center">1ˢᵗ place</div>
        <div className="border-t-1"></div>
        <div className="border-t-1"></div>
        <div className="border-t-1"></div>
        <div className="my-2">◉</div>
        <div className="my-2 pr-4 border-r-1">Codeforces</div>
        <div className="py-2 pl-4 font-semibold text-[rgb(0,0,255)] content-center">
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
        <div className="py-2 pl-4 font-semibold text-[#00C0C0] content-center">
          <Link
            href={'https://atcoder.jp/users/kimnattanan'}
            target="_blank"
          >kimnattanan</Link>
        </div>
      </div>
    </div>
  );
}