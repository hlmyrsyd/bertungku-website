'use client';

import DevelopmentBar from "./components/developmentBar";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col max-w-full h-screen items-center justify-start">

      <DevelopmentBar />
      <Navigation />
      
    </div>
  );
}
