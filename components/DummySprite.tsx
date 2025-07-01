'use client'
import { Application, extend, useTick } from '@pixi/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Texture, Assets, Sprite, FederatedPointerEvent } from 'pixi.js';

function Dummy({parentRef} : {parentRef: React.RefObject<HTMLDivElement|null>}){
  const [fallAnim, setFallAnim] = useState(Texture.EMPTY);
  const [idleAnim, setIdleAnim] = useState(Texture.EMPTY);
  const [curAnim, setCurAnim] = useState(Texture.EMPTY);
  const [floorY, setFloorY] = useState(0);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [velo, setVelo] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [mouseDx, setMouseDx] = useState(0);
  const [mouseDy, setMouseDy] = useState(0);
  useEffect(() => {
    if (fallAnim === Texture.EMPTY) {
      Assets.load('/fall_anim.png').then((res) => {
        setFallAnim(res)
      });
    }
  }, [fallAnim]);
  useEffect(() => {
    if (idleAnim === Texture.EMPTY) {
      Assets.load('/idle_anim.png').then((res) => {
        setIdleAnim(res)
      });
    }
  }, [idleAnim]);

  const onScroll = useCallback(() => {
    const { scrollY, innerHeight } = window;
    setFloorY(scrollY + innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    setFloorY(window.scrollY + window.innerHeight);
    setCurY(floorY);
    setCurX(window.innerWidth-200);
    return () => {
       window.removeEventListener("scroll", onScroll);
    }
  }, []);

  useTick(time=>{
    if(dragging){
      if(curAnim !== fallAnim) setCurAnim(fallAnim);
      if(velo!=0) setVelo(0);
      return;
    }
    const dt = time.deltaTime;
    if(curY>floorY){
      setCurY(floorY);
      if(curAnim !== idleAnim) setCurAnim(idleAnim);
      if(velo!=0) setVelo(0);
    }
    else if(curY<floorY){
      if(curAnim !== fallAnim) setCurAnim(fallAnim);
      setCurY((prev) => {
        const newY = prev + velo*dt + 0.5 * 3 * dt * dt;
        return newY > floorY ? floorY : newY;
      });
      setVelo((prev) => prev + 3 * dt);
    }
    else if(curAnim !== idleAnim){
      setCurAnim(idleAnim);
      if(velo!=0) setVelo(0);
    }
  });

  const mouseDown = (e: FederatedPointerEvent) => {
    setDragging(true);
    setMouseDx(e.globalX - curX);
    setMouseDy(e.globalY - curY);
  };
  const mouseUp = useCallback(() => {
    setDragging(false);
  },[]);
  const mouseMove = (e: FederatedPointerEvent) => {
    if(!dragging) return;
    const newX = e.globalX - mouseDx;
    const newY = e.globalY - mouseDy;
    if(newX >= 100 && (parentRef == null || newX < parentRef.current!.clientWidth - 100)){
      setCurX(newX);
    }
    if(newY <= floorY){
      setCurY(newY);
    }
  };

  return (
    <pixiSprite
      texture={curAnim}
      alpha={1}
      width={200}
      height={200}
      anchor={{ x: 0.5, y: 1 }}
      position={{x:curX,y:curY}}
      eventMode='static'
      cursor='pointer'
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseMove={mouseMove}
      onMouseLeave={mouseUp}
    />
  );
}

extend({ Sprite });
export default function DummySprite(){
  const parentRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={parentRef} className='w-full h-full'>
      <Application
        backgroundAlpha={0}
        resizeTo={parentRef}
      >
        <Dummy parentRef={parentRef} />
      </Application>
    </div>
  );
}