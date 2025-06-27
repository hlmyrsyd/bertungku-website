'use client';

import { motion } from 'framer-motion';
import { useBarHovered } from '../hooks/useBarHovered';
import { useTheme } from '../hooks/themeContext';

export default function DevelopmentBar() {
    const { isDark, setIsDark } = useTheme();
    const { isHovered, isBarHovered, setIsBarHovered } = useBarHovered();

    return (
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
    );
}
