// components/PortfolioShowcase.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '../hooks/themeContext';
import PortfolioContent from './portfolioContent';

interface Section {
    id: number;
    bgColor: string;
    overlayColor: string;
    imageSrc: string;
    alt: string;
}

export default function PortfolioShowcase() {
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);
    const [clickedSection, setClickedSection] = useState<number | null>(null);
    const { setIsDark } = useTheme();

    const sections: Section[] = [
        {
        id: 1,
        bgColor: 'bg-white',
        overlayColor: 'bg-neutral-800',
        imageSrc: '/Image/image1.png',
        alt: 'Gambar Test 1',
        },
        {
        id: 2,
        bgColor: 'bg-gray-100',
        overlayColor: 'bg-blue-800',
        imageSrc: '/Image/image2.png',
        alt: 'Gambar Test 2',
        },
        {
        id: 3,
        bgColor: 'bg-slate-50',
        overlayColor: 'bg-green-800',
        imageSrc: '/Image/image3.png',
        alt: 'Gambar Test 3',
        },
        {
        id: 4,
        bgColor: 'bg-stone-100',
        overlayColor: 'bg-purple-800',
        imageSrc: '/Image/image4.png',
        alt: 'Gambar Test 4',
        },
    ];

    const handleSectionClick = (sectionId: number): void => {
        if (clickedSection === sectionId) {
        setClickedSection(null);
        setIsDark(false);
        } else {
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
                zIndex: clickedSection === section.id ? 50 : 10,
                }}
                transition={{ duration: 0.8, ease: 'circInOut' }}
            >
                <AnimatePresence>
                {(hoveredSection === section.id || clickedSection === section.id) && (
                    <motion.div
                    initial={{ y: '100%', height: '100%' }}
                    animate={{ y: '0%', height: '100%' }}
                    exit={{ y: '-100%', height: '70%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className={`absolute top-0 left-0 w-full h-full cursor-pointer ${clickedSection === section.id ? 'overflow-y-auto' : 'overflow-hidden'}`}
                    onClick={() => handleSectionClick(section.id)}
                    >
                    <div className="relative w-full h-full">
                        <PortfolioContent imageSrc={section.imageSrc} alt={section.alt} />
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
