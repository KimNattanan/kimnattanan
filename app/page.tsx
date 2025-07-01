import DummySprite from "@/components/DummySprite";

export default function Home() {
  return (
    <div className="w-full h-[10000px] relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <DummySprite />
      </div>
      hello! world?
    </div>
  );
}
