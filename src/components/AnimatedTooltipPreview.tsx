import React, { useEffect } from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
 import { r,po,ne,py,l,ph,g,w,n,t,v } from "@/data";
import { Button } from "./ui/MovingBorder";

const  AnimatedTooltipPreview= () =>{
  return (
    <div className="flex relative flex-col items-center justify-center py-20  w-full" id="skills">
      <div className="absolute top-1 heading ">
      <BubbleText/>
    </div>
      
  <div className="flex-col items-center gap-8  lg:grid sm:grid-cols-2 justify-center xs:w-full w-full">   
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={r} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
        <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={n} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
   <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={ne} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
     <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={po} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
    <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={py} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
       <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={v} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
  <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={t} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
  <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={ph} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
     <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={g} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
 <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={w} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
 <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>
<div className="flex items-center mt-4 justify-center">
<AnimatedTooltip items={l} />
    <Button 
          duration={Math.floor(Math.random() * 10000) + 10000}
          className="flex-1 text-black dark:text-white border-neutral-200 justify-start dark:border-slate-800 sm:w-96 w-24" >
 <div className="h-5 rounded-xl " style={{width: "70%", background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(165,91,227,1) 35%, rgba(0,212,255,1) 100%)"}}></div>
    </Button>
    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">70%</span>
</div>

 </div>  
    </div>
    
  );
}
const BubbleText = () => {
    useEffect(() => {
      const spans = document.querySelectorAll(
        ".hover-text span"
      ) as NodeListOf<HTMLSpanElement>;
  
      spans.forEach((span) => {
        span.addEventListener("mouseenter", function (this: typeof span) {
          this.style.fontWeight = "900";
          this.style.color = "rgb(238, 242, 255)";
  
          const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
          const rightNeighbor = this.nextElementSibling as HTMLSpanElement;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "500";
            leftNeighbor.style.color = "rgb(199, 210, 254)";
          }
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "500";
            rightNeighbor.style.color = "rgb(199, 210, 254)";
          }
        });
  
        span.addEventListener("mouseleave", function (this: typeof span) {
          this.style.fontWeight = "100";
          this.style.color = "rgb(165, 180, 252)";
  
          const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
          const rightNeighbor = this.nextElementSibling as HTMLSpanElement;
  
          if (leftNeighbor) {
            leftNeighbor.style.fontWeight = "100";
            leftNeighbor.style.color = "rgb(165, 180, 252)";
          }
  
          if (rightNeighbor) {
            rightNeighbor.style.fontWeight = "100";
            rightNeighbor.style.color = "rgb(165, 180, 252)";
          }
        });
      });
    }, []);
  
    return (
      <div className="hover-text text-center text-5xl text-indigo-300 place-content-center bg-black">
        <Text>Habilidades</Text>
      </div>
    );
  };
  
  const Text = ({ children }: { children: string }) => {
    return (
      <>
        {children.split("").map((child, idx) => (
          <span
            style={{
              transition: "0.35s font-weight, 0.35s color",
            }}
            key={idx}
          >
            {child}
          </span>
        ))}
      </>
    );
  };
export default AnimatedTooltipPreview