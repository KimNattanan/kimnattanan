export default function DSA(){
  return (
    <div id="dsa">
      <div className="h-20"></div>
      <div className="bg-white/66 w-full rounded-[4rem] sm:rounded-[8rem] px-4 sm:px-12 pb-20">
        <div className="hidden sm:block topic lg:text-5xl!">
          Data Structures and Algorithms
        </div>
        <div className="sm:hidden topic lg:text-5xl!">
          <h1>DSA</h1>
          <p className="text-base sm:text-xs font-bold">Data Structures and Algorithms</p>
        </div>
        <div className="w-full md:w-[600px] lg:w-[800px] mx-auto mt-10">
          <div className="flex flex-col sm:flex-row py-6 border-b border-dashed border-background2">
            <div className="font-medium sm:font-normal bg-foreground text-center text-white p-4 text-xl w-full sm:w-[280px]">
              <p className="">TOI19</p>
              <p className="text-xs">The 19ᵗʰ Thailand Olympiad in Informatics</p>
            </div>
            <div className="self-center mt-6 sm:mt-0 sm:ml-6 font-black text-xl text-orange-400">
              1ˢᵗ place 🥇
            </div>
          </div>
          <div className="flex flex-col sm:flex-row py-6 border-b border-dashed border-stone-300">
            <a target="_blank" href="https://codeforces.com/profile/kimnattanan">
              <div className="font-medium sm:font-normal bg-blue3 rounded-lg text-center text-white p-4 text-xl w-full sm:w-[280px]">
                Codeforces
              </div>
            </a>
            <div className="self-center mt-6 sm:mt-0 sm:ml-6 font-medium text-lg sm:font-bold sm:text-xl">
              <p>Username: <span className="font-medium underline text-blue2 hover:opacity-50"><a href="https://codeforces.com/profile/kimnattanan" target="_blank">kimnattanan</a></span></p>
              <p>Highest Rating: <span className="text-[#00f]">1859</span></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row py-6 border-b border-dashed border-stone-300">
            <a target="_blank" href="https://atcoder.jp/users/kimnattanan">
              <div className="font-medium sm:font-normal bg-blue3 rounded-lg text-center text-white p-4 text-xl w-full sm:w-[280px]">
                Atcoder
              </div>
            </a>
            <div className="self-center mt-6 sm:mt-0 sm:ml-6 font-medium text-lg sm:font-bold sm:text-xl">
              <p>Username: <span className="font-medium underline text-blue2 hover:opacity-50"><a href="https://atcoder.jp/users/kimnattanan" target="_blank">kimnattanan</a></span></p>
              <p>Highest Rating: <span className="text-[#00f]">1658</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}