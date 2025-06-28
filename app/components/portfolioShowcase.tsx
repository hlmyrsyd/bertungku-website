'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../hooks/themeContext';

interface Section {
    id: number;
    bgColor: string;
    overlayColor: string;
    content: React.ReactNode;
}

export default function PortfolioShowcase() {
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);
    const [clickedSection, setClickedSection] = useState<number | null>(null);
    const {isDark, setIsDark } = useTheme();

    // Content for each section - customize these as needed
    const sections: Section[] = [
        {
        id: 1,
        bgColor: 'bg-white',
        overlayColor: 'bg-neutral-800',
        content: (
            <div className="flex w-full h-full text-white">
                <div className={`${isDark ? 'bg-black/25' : 'bg-black/0'} z-10 relative flex w-full h-full transition-all duration-500 delay-200`}>
                </div>
                <Image 
                    src={'/Image/image1.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            </div>
        )
        },
        {
        id: 2,
        bgColor: 'bg-gray-100',
        overlayColor: 'bg-blue-800',
        content: (
            <div className="flex w-full h-full text-white">
                <div className={`${isDark ? 'bg-black/25' : 'bg-black/0'} z-10 relative flex w-full h-full transition-all duration-500 delay-200`}>
                </div>
                <Image 
                    src={'/Image/image2.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            </div>
        )
        },
        {
        id: 3,
        bgColor: 'bg-slate-50',
        overlayColor: 'bg-green-800',
        content: (
            <div className="flex w-full h-full text-white">
                <div className={`${isDark ? 'bg-black/25' : 'bg-black/0'} z-10 relative flex w-full h-full transition-all duration-500 delay-200`}>
                </div>
                <Image 
                    src={'/Image/image3.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            </div>
        )
        },
        {
        id: 4,
        bgColor: 'bg-stone-100',
        overlayColor: 'bg-purple-800',
        content: (
            <div className="flex w-full h-full text-white">
                <div className={`${isDark ? 'bg-black/25' : 'bg-black/0'} z-10 relative flex w-full h-full transition-all duration-500 delay-200`}>
                </div>
                <Image 
                    src={'/Image/image4.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            </div>
        )
        }
    ];

    const handleSectionClick = (sectionId: number): void => {
    if (clickedSection === sectionId) {
        // ❌ Clicking same section again: shrink & go back to light mode
        setClickedSection(null);
        setIsDark(false); // ✅ Return to light mode
        } else {
        // ✅ Clicking a new section: expand & go to dark mode
        setClickedSection(sectionId);
        setIsDark(true);
        }
    };

    return (
        <div className="fixed flex flex-row w-full h-screen z-0">
        {sections.map((section) => (
            <AnimatePresence key={section.id}>
                <motion.div 
                    className={`border border-neutral-300 relative h-screen ${section.bgColor} overflow-hidden`}
                    onMouseEnter={() => clickedSection === null && setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                    animate={{
                        width: clickedSection === section.id ? '100vw' : clickedSection !== null ? '0vw' : '25vw',
                        zIndex: clickedSection === section.id ? 50 : 10
                    }}
                    transition={{ 
                        duration: 0.6, 
                        ease: 'easeInOut' 
                    }}
                >
                    <AnimatePresence>
                    {(hoveredSection === section.id || clickedSection === section.id) && (
                        <motion.div
                        initial={{ y: '100%', height: '100%' }}
                        animate={{ y: '0%', height: '100%' }}
                        exit={{ y: '-100%', height: '70%' }}
                        transition={{
                            duration: 1, 
                            ease: 'easeInOut'
                        }}
                        className={`absolute top-0 left-0 w-full overflow-hidden cursor-pointer`}
                        onClick={() => handleSectionClick(section.id)}
                        >
                            <div className="relative w-full h-full">
                                {section.content}
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        ))}
        </div>
    );
}