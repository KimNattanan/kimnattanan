import Image from "next/image";
import Link from "next/link";

export default function DSA(){
  return (
    <div id="dsa">
      <div className="h-20"></div>
      <div className="bg-white/66 w-full rounded-[8rem] px-12 pb-20">
        <div className="topic text-5xl!">
          Data Structures and Algorithms
        </div>
        <div className="grid grid-cols-2 mx-auto text-xl max-w-[600px] mt-4">
          <div className="content-center border-r-2 border-dotted my-4 font-medium pr-4 text-center">
            <p>The 19ᵗʰ Thailand Olympiad</p>
            <p>in Informatics</p>
          </div>
          <div className="content-center text-[#e39b00] font-bold ml-8">
            1ˢᵗ place 🥇
          </div>
          <div className="content-center border-r-2 border-dotted my-4 font-medium pr-4 text-center">Codeforces</div>
          <div className="content-center text-[#0000ff] font-medium ml-8 hover:opacity-50">
            <a href="https://codeforces.com/profile/kimnattanan" target="_blank">kimnattanan - 1859</a>
          </div>
          <div className="content-center border-r-2 border-dotted my-4 font-medium pr-4 text-center">Atcoder</div>
          <div className="content-center text-[#0000ff] font-medium ml-8 hover:opacity-50">
            <a href="https://atcoder.jp/users/kimnattanan" target="_blank">kimnattanan - 1658</a>
          </div>
        </div>
      </div>
    </div>
  )
}