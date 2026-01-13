import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { Item } from "@/components/ui/Items";
import { initialItems } from "@/data";

const Habilities = () => {
  const [items, setItems] = useState(initialItems);
  return (
    <div className="py-20 w-full" id="skills">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 6 }}
        transition={{
          duration: 1,
        }}
        className="text-[40px] font-bold capitalize text-center"
      >
        Mis <span className="text-purple">habilidades</span>
      </motion.p>
      {/* <AnimatePresence>
      {items.map(item => (
        <motion.li key={item.id} initial={{ opacity: 0 }} exit={{ opacity: 1 }} layout />
      ))}
    </AnimatePresence> */}
    <div className="w-2/6 mx-auto text-center lg:text-center mt-12 lg:grid-cols-4 grid-cols-1 ">
  <h1 className="sub-heading ">
    <span className="text-purple">Frontend</span>
  </h1>
  <div className="flex flex-row justify-center gap-12">
    {items.map((item) => (
      <Image
        key={item.name}
        height={400}
        width={400}
        src={item.image}
        alt={item.name}
        className="object-cover flex-auto !m-0 !p-0 object-top  xs:w-20 xs:h-20 h-10 w-10 border-2 group-hover:scale-105 group-hover:z-40 border-white relative transition duration-500"
      />
    ))}
  </div>
  <h1 className="sub-heading ">
    <span className="text-purple">Frontend</span>
  </h1>
  <div className="flex flex-row justify-center gap-12">
    {items.map((item) => (
      <Image
        key={item.name}
        height={400}
        width={400}
        src={item.image}
        alt={item.name}
        className="object-cover flex-auto !m-0 !p-0 object-top rounded-full xs:w-20 xs:h-20 h-10 w-10 border-2 group-hover:scale-105 group-hover:z-40 border-white relative transition duration-500"
      />
    ))}
  </div>
  {/* <h1 className="sub-heading ">
    <span className="text-purple">Frontend</span>
  </h1>
  <div className="flex flex-row justify-center gap-12">
    {items.map((item) => (
      <Image
        key={item.name}
        height={400}
        width={400}
        src={item.image}
        alt={item.name}
        className="object-cover flex-auto !m-0 !p-0 object-top rounded-full xs:w-20 xs:h-20 h-10 w-10 border-2 group-hover:scale-105 group-hover:z-40 border-white relative transition duration-500"
      />
    ))}
  </div> */}
</div>
    </div>
  );
};
export default Habilities;
