'use client'
import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FlatingNav";
import  AnimatedTooltipPreview  from "@/components/AnimatedTooltipPreview";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";


const Home= () =>{
  return (
<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
  <div className="max-w-7xl w-full">
   <FloatingNav navItems={navItems}/>
   <Hero/>
   <AnimatedTooltipPreview/>
   <Clients/>
   <Experience/>
   {/* <Approach /> */}
   <Footer/>
  </div>
</main>
  );
}
export default Home