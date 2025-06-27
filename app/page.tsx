'use client';

import { motion } from "framer-motion";
import { useTheme } from "./hooks/useTheme";
import { useBarHovered } from "./hooks/useBarHovered";

export default function Home() {
  const {isDark, setIsDark} = useTheme();
  const {isHovered} = useBarHovered();
  const {isBarHovered, setIsBarHovered} = useBarHovered();

  return (
    <div className="flex flex-col max-w-full h-screen items-center justify-start">

      {/* DEVELOPMENT PAGE */}
      <motion.div
        onMouseEnter={() => setIsBarHovered(true)}
        onMouseLeave={() => setIsBarHovered(false)}
        initial={{ y: -150 }}
        animate={{ y: isHovered || isBarHovered ? 0 : -150 }}
        transition={{ duration: 0.8, ease: 'circInOut' }}
        className={`transition-colors duration-500 fixed top-0 left-0 w-full flex flex-col items-center z-50 py-8 bg-[var(--background)]/25 backdrop-blur-xs text-[var(--foreground)] shadow-lg 
          ${isDark 
            ? 'border-b-[0.5px] border-neutral-700'
            : 'border-b-[0.5px] border-neutral-300'
          }`}
      >
        <h1 className="text-xl font-semibold">🚧 This website is in development</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`cursor-pointer mt-2 px-4 py-2 rounded-xl text-sm transition-colors duration-300 ${
            isDark
              ? 'bg-neutral-800 hover:bg-neutral-700 text-white'
              : 'bg-zinc-300 hover:bg-zinc-400 text-black'
          }`}
        >
          Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
      </motion.div>

      {/* NAVIGATION */}
      <div className="flex flex-row w-full items-start p-10">
        <div className="flex flex-row justify-start items-center w-1/4 gap-4">
          <div className={`${isDark} ? 'text-white' : 'text-neutral-800' `} >
            {/* BERTUNGKU LOGO */}
            <svg width="30" height="30" viewBox="0 0 100 99" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 51.2406V30.9642L8.43077 35.5447L70.8308 0V20.3374L8.43077 56.2486L0 51.2406Z" fill="currentColor"/>
              <path d="M0 91.9155V71.578L12.4308 78.5404L62.4 50.0802L87.3231 64.2492L100 57.1647V77.3189L87.3231 84.5256L62.4 70.3566L12.4308 99L0 91.9155Z" fill="currentColor"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-widest">
            Ber
            <span className="font-medium tracking-widest">tungku</span>
          </h1>
        </div>
        <div className="flex flex-col w-1/4">
          <p className="text-xl">
            Form <br/>
            Follows <br/>
            Function
          </p>
        </div>
        <div className="flex flex-col w-2/4">
          <h1 className="text-7xl">
            CREATE IDEAL INTERIOR FOR YOU
          </h1>
        </div>
      </div>
    </div>
  );
}
