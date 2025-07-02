import DummySprite2 from "@/components/DummySprite2";

export default function Home() {
  return (
    <>
      <div className="w-full h-[6000px] relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <DummySprite2 />
        </div>
        hello! world?
      </div>
    </>
  );
}
