'use client'
import { Application, extend, useTick } from '@pixi/react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Texture, Assets, Sprite, FederatedPointerEvent } from 'pixi.js';

function Dummy(
  {parentRef, mouseX, mouseY} :
  {parentRef: React.RefObject<HTMLDivElement|null>, mouseX: number, mouseY: number}
){
  const [fallAnim, setFallAnim] = useState(Texture.EMPTY);
  const [idleAnim, setIdleAnim] = useState(Texture.EMPTY);
  const [curAnim, setCurAnim] = useState(Texture.EMPTY);
  const [floorY, setFloorY] = useState(0);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [velo, setVelo] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [pivotX, setPivotX] = useState(0);
  const [pivotY, setPivotY] = useState(0);
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
    window.addEventListener("mouseup", mouseUp);
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
    setPivotX(e.globalX - curX);
    setPivotY(e.globalY - curY);
  };
  const mouseUp = useCallback(() => {
    setDragging(false);
  },[]);
  useEffect(()=>{
    if(!dragging) return;
    const newX = mouseX - pivotX;
    const newY = mouseY - pivotY;
    if(newX >= 100 && (parentRef == null || newX < parentRef.current!.clientWidth - 100)){
      setCurX(newX);
    }
    if(newY>=200 && newY <= floorY){
      setCurY(newY);
    }
  },[mouseX,mouseY]);

  return (
    <pixiSprite
      texture={curAnim}
      alpha={1}
      width={200}
      height={200}
      anchor={{ x: 0.5, y: 1 }}
      eventMode='static'
      position={{x:curX,y:curY}}
      cursor='pointer'
      onMouseDown={mouseDown}
    />
  );
}

extend({ Sprite });
export default function DummySprite(){
  const parentRef = useRef<HTMLDivElement>(null);
  const [mouseX,setMouseX] = useState(0);
  const [mouseY,setMouseY] = useState(0);
  return (
    <div ref={parentRef} className='w-full h-full' onMouseMove={(e)=>{
      setMouseX(e.pageX);
      setMouseY(e.pageY);
    }}>
      <Application
        backgroundAlpha={0}
        resizeTo={parentRef}
        eventMode='auto'
      >
        <Dummy parentRef={parentRef} mouseX={mouseX} mouseY={mouseY} />
      </Application>
    </div>
  );
}