'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/themeContext';
import { sections } from '../data/sections';
import Image from 'next/image';

export default function PortfolioShowcase() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const { isDark, setIsDark } = useTheme();

    const handleClick = (index: number) => {
        const isSame = activeIndex === index;
        setActiveIndex(isSame ? null : index);
        setIsDark(!isDark);
    };

    const isHoveredOrActive = (index: number) =>
        hoverIndex === index || activeIndex === index;

    return (
        <div className="absolute w-full h-screen z-0 overflow-hidden">
        <div className="flex flex-col xl:flex-row w-full h-full">
            {sections.map((section, index) => {
            const isActive = activeIndex === index;
            const isAnyActive = activeIndex !== null;
            const isVisible = isHoveredOrActive(index);

            return (
                <motion.div
                key={index}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                animate={{
                    width: isAnyActive ? (isActive ? '100%' : '0%') : '25%',
                    height: '100%',
                    y: 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 100 }}
                className={`relative ${section.bgColor} hover:cursor-pointer overflow-hidden border-white`}
                >
                {/* Image / Block */}
                <AnimatePresence>
                    {isVisible && (
                    <motion.div
                        key={`img-${index}`}
                        initial={{ y: '100%' }}
                        animate={{ y: '0%' }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="absolute bottom-0 w-full flex justify-center items-center"
                    >
                        <Image
                            src={section.imageSrc}
                            alt={section.alt}
                            width={1000}
                            height={1000}
                            className="w-[1920px] h-[1080px] object-cover transition-transform duration-500 ease-in-out"
                        />
                    </motion.div>
                    )}
                </AnimatePresence>

                {/* Label / Title */}
                <div className="absolute bottom-6 left-6 text-white text-2xl font-bold z-10 pointer-events-none">
                    {section.alt}
                </div>

                {/* Description Panel (only on click) */}
                <AnimatePresence>
                    {isActive && (
                        <div>
                            <motion.div 
                                className='fixed w-full h-full bg-black/25'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                            />
                            <motion.div
                                key={`desc-${index}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.6 }}
                                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-6 max-w-sm rounded-lg shadow-lg"
                            >
                                <p className="mb-4">
                                    {section.description}
                                </p>
                                <p className="text-sm italic opacity-80">
                                    Scroll down to explore ↓
                                </p>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
                </motion.div>
            );
            })}
        </div>
        </div>
    );
}
