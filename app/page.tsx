'use client';

import { useEffect, useRef } from "react";
import DevelopmentBar from "./components/developmentBar";
import Navigation from "./components/navigation";
import PortfolioShowcase from "./components/portfolioShowcase";
import Lenis from "lenis";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  
  return (
    <div className="flex flex-col max-w-full h-full items-center justify-start">

      <DevelopmentBar />
      <Navigation />
      <PortfolioShowcase />
      <div className="flex h-[100vh]">Test</div>
    </div>
  );
}
