"use client";

import { useEffect } from "react";

export default function ClientTrigger() {
  useEffect(() => {
    // Small delay to ensure Navigation component has mounted and attached listener
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('open-nek-card'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  return null;
}
