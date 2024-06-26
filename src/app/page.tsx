'use client'
import Hero from "../components/Hero";
import  {FloatingNavDemo}  from "@/components/NavDemo";
import  AnimatedTooltipPreview  from "@/components/AnimatedTooltipPreview";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";


const Home= () =>{
  return (
<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
  <div className="max-w-7xl w-full">
   <FloatingNavDemo />
   <Hero/>
   <Experience/>
   <AnimatedTooltipPreview/>
   <Clients/>
   {/* <Approach /> */}
   <Footer/>
  </div>
</main>
  );
}
export default Home