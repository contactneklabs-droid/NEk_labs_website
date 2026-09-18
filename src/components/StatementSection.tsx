"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section 
      ref={containerRef}
      className="py-32 md:py-48 bg-zinc-950 overflow-hidden relative border-t border-zinc-900 flex flex-col items-center justify-center min-h-[80vh]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Terminal Header */}
          <div className="bg-zinc-900/80 border-b border-zinc-800 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">
              nek_labs_compiler.exe — running
            </div>
            <div className="w-10"></div> {/* Spacer for center alignment */}
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto min-h-[300px]">
            {isInView && <TerminalContent />}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalContent() {
  const codeLines = [
    { type: "sys", text: "> Initializing NEk Labs Core..." },
    { type: "sys", text: "> Loading modules: Web, AI, Automation..." },
    { type: "empty", text: "" },
    { type: "comment", text: "// SYSTEM OUTPUT" },
    { type: "code", prefix: "const", varName: "mission", value: "WE DON'T JUST BUILD WEBSITES." },
    { type: "code", prefix: "const", varName: "reality", value: "WE ENGINEER DIGITAL SYSTEMS." },
    { type: "code", prefix: "const", varName: "methodology", value: "WE DON'T JUST USE AI. WE BUILD WITH IT." },
    { type: "empty", text: "" },
    { type: "sys", text: "> Status: Operational." },
    { type: "sys", text: "> Ready for deployment." }
  ];

  return (
    <div className="flex flex-col gap-1.5">
      {codeLines.map((line, idx) => (
        <TerminalLine key={idx} line={line} delay={idx * 0.7} />
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, delay: codeLines.length * 0.7 }}
        className="w-2.5 h-5 bg-zinc-400 mt-2 inline-block"
      />
    </div>
  );
}

function TerminalLine({ line, delay }: { line: { type: string; text?: string; prefix?: string; varName?: string; value?: string }, delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  if (line.type === "empty") return <div className="h-4"></div>;

  if (line.type === "sys") {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-500">{line.text}</motion.div>;
  }

  if (line.type === "comment") {
    return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-zinc-600 italic">{line.text}</motion.div>;
  }

  if (line.type === "code") {
    return (
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-zinc-300">
        <span className="text-purple-400">{line.prefix}</span>{" "}
        <span className="text-blue-400">{line.varName}</span>{" "}
        <span className="text-zinc-400">=</span>{" "}
        <span className="text-green-400">&quot;<TypewriterText text={line.value || ""} />&quot;</span><span className="text-zinc-400">;</span>
      </motion.div>
    );
  }

  return null;
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}
