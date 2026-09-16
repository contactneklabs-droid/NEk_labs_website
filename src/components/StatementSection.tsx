"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WarpText from "./WarpText";

export default function StatementSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section 
      ref={containerRef}
      className="py-40 bg-zinc-950 overflow-hidden relative border-t border-zinc-900 flex flex-col items-center justify-center min-h-[80vh]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center w-full"
      >
        <motion.div style={{ y: y1 }} className="w-full flex justify-center">
          <WarpText 
            text="WE DON'T JUST BUILD WEBSITES." 
            color="#52525b"
            fontSize="clamp(2rem, 5vw, 6rem)"
            className="w-full max-w-5xl h-[100px] md:h-[150px]"
            warpScale={1.5}
          />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="w-full flex justify-center -mt-6 md:-mt-12">
          <WarpText 
            text="WE BUILD DIGITAL SYSTEMS." 
            color="#ffffff"
            fontSize="clamp(2rem, 5vw, 6rem)"
            className="w-full max-w-5xl h-[100px] md:h-[150px]"
          />
        </motion.div>
        
        <motion.div style={{ y: y1 }} className="w-full flex justify-center mt-12 md:mt-24">
          <WarpText 
            text="WE DON'T JUST USE AI." 
            color="#52525b"
            fontSize="clamp(2rem, 5vw, 6rem)"
            className="w-full max-w-5xl h-[100px] md:h-[150px]"
            warpScale={1.5}
          />
        </motion.div>

        <motion.div style={{ y: y2 }} className="w-full flex justify-center -mt-6 md:-mt-12">
          <WarpText 
            text="WE BUILD WITH IT." 
            color="#ffffff"
            fontSize="clamp(2rem, 5vw, 6rem)"
            className="w-full max-w-5xl h-[100px] md:h-[150px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
