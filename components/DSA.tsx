import Link from "next/link";

export default function DSA(){
  return (
    <div className="flex flex-col w-full max-w-full my-12 bg-[rgba(251,85,138,0.1)] border-1 border-x-0">
      <div className="flex justify-center text-7xl mt-8 text-[rgb(77,13,33)] select-none tracking-[0.5rem]">
        DSA
      </div>
      <div className="flex justify-center text-xl mb-8 text-[rgb(77,13,33)] select-none whitespace-pre-wrap tracking-tight">
        {`( Data  structures  and  Algorithms )`}
      </div>
      <div className="mb-12 mx-12 text-xl whitespace-pre-wrap tracking-tight">
        <div>
          <span className="">{`◉   The  19ᵗʰ  Thailand  Olympiad  in  Informatics :  `}</span>
          <span className="font-semibold text-amber-600">{`1ˢᵗ place`}</span>
        </div>
        <div>
          <span className="">{`◉   Codeforces :  `}</span>
          <Link
            href={'https://codeforces.com/profile/kimnattanan'}
            target="_blank"
            className="font-semibold text-[rgb(0,0,255)]"
          >kimnattanan</Link>
        </div>
        <div>
          <span className="">{`◉   Atcoder :  `}</span>
          <Link
            href={'https://atcoder.jp/users/kimnattanan'}
            target="_blank"
            className="font-semibold text-[#00C0C0]"
          >kimnattanan</Link>
        </div>
      </div>
    </div>
  );
}