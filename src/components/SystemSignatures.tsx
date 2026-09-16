"use client";

import { useEffect, useState } from "react";

export default function SystemSignatures() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().replace("T", " ").substring(0, 19) + " UTC");
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 pointer-events-none mix-blend-difference hidden md:block">
        <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
          {time || "SYSTEM ONLINE"}
        </p>
      </div>
    </>
  );
}
