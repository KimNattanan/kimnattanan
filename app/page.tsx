import BottomProfile from '@/components/bottom_profile/BottomProfile';
import LeftTab from '@/components/props/LeftTab';
import Sprite from '@/components/props/Sprite';
import TopProfile from '@/components/top_profile/TopProfile';

export default function Home() {
  return (
    <>
      <div className='h-[5000px] relative'>
        <div className="absolute w-full h-full -z-40 overflow-hidden">
          <Sprite width={200} height={200} gravity={3000} posX={-160}/>
        </div>
        <div className='-z-50'>

        </div>
        <LeftTab />
        <TopProfile />
        <BottomProfile />
      </div>
    </>
  );
}
