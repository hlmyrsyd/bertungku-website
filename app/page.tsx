'use client';

import DevelopmentBar from "./components/developmentBar";
import Navigation from "./components/navigation";
import PortfolioShowcase from "./components/portfolioShowcase";

export default function Home() {
  return (
    <div className="flex flex-col max-w-full h-screen items-center justify-start">

      <PortfolioShowcase />
      <DevelopmentBar />
      <Navigation />

    </div>
  );
}
