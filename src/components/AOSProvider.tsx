"use client";

import { ReactNode, useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = (await import("aos")).default as any; // 👈 type ignore
      AOS.init({
        duration: 1000,
        once: false,
      });
    };

    loadAOS();
  }, []);

  return <>{children}</>;
}
