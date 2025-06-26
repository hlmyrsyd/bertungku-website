'use client';

import { useTheme } from "./hooks/useTheme";

export default function Home() {
  const {isDark, setIsDark} = useTheme();

  return (
    <div className="flex flex-col max-w-full h-screen items-center justify-center transition-colors duration-300">
      <h1 className="text-2xl">Hello this website is in development</h1>
      <button
        onClick={() => setIsDark(!isDark)}
        className={`cursor-pointer mt-4 px-4 py-2 rounded-xl transition-colors duration-300 ${
          isDark
            ? 'bg-neutral-800 hover:bg-neutral-700 text-white'
            : 'bg-zinc-200 hover:bg-zinc-300 text-black'
        }`}
      >
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
