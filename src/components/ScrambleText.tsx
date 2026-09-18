"use client";

import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export default function ScrambleText({ text, asMono = false }: { text: string; asMono?: boolean }) {
  // Start with the exact text to prevent hydration mismatch between server and client
  const [displayText, setDisplayText] = useState(text);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;

    // Immediately scramble the text on mount/view to start the effect
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayText(
      text.split("").map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)])).join("")
    );

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={ref} className={asMono ? "font-mono tracking-widest" : ""}>{displayText}</span>;
}
