'use client'
import { Application, extend, useTick } from '@pixi/react';
import { useState, useEffect, useRef } from 'react';
import { Texture, Assets, TilingSprite } from 'pixi.js';

function Tile(){
  const [texture, setTexture] = useState(Texture.EMPTY);
  const [tilePos, setTilePos] = useState({x: 0, y: 0});
  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load('/bg_overlay.png').then((res) => {
        setTexture(res)
      });
    }
  }, [texture]);
  useTick(time=>{
    setTilePos((prev)=>({
      x: prev.x - 0.5 * time.deltaTime,
      y: prev.y - 0.5 * time.deltaTime
    }));
  });
  return (
    <pixiTilingSprite
      texture={texture}
      alpha={0.5}
      width={10000}
      height={10000}
      anchor={{ x: 0.5, y: 0.5 }}
      tileScale={{ x: 0.09, y: 0.09 }}
      tilePosition={tilePos}
    />
  );
}

export default function Background(){
  extend({ TilingSprite });
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={parentRef} className='w-full h-full'>
      <Application
        backgroundAlpha={0}
        resizeTo={parentRef}
      >
        <Tile />
      </Application>
    </div>
  );
}