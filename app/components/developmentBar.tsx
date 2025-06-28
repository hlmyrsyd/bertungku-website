'use client';

import { motion } from 'framer-motion';
import { useBarHovered } from '../hooks/useBarHovered';
import { useTheme } from '../hooks/themeContext';

export default function DevelopmentBar() {
    const { isDark} = useTheme();
    const { isHovered, isBarHovered, setIsBarHovered } = useBarHovered();

    return (
        <motion.div
            onMouseEnter={() => setIsBarHovered(true)}
            onMouseLeave={() => setIsBarHovered(false)}
            initial={{ y: -200 }}
            animate={{ y: isHovered || isBarHovered ? 0 : -200 }}
            transition={{ duration: 0.8, ease: 'circInOut' }}
            className={`transition-colors duration-500 fixed top-0 left-0 w-full flex flex-col items-center z-50 py-20 bg-[var(--background)]/25 backdrop-blur-xs text-[var(--foreground)] shadow-lg 
                ${isDark 
                ? 'border-b-[0.5px] border-neutral-700'
                : 'border-b-[0.5px] border-neutral-300'
                }`}
        >
            <h1 className="text-4xl font-semibold">🚧 This website is in development</h1>
        </motion.div>
    );
}
