'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PortfolioContent from './portfolioContent';
import { sections } from '../data/portfolioSection';
import { handleSectionClick } from '../utils/portfolioHandlers';
import { Section } from '../types/portfolio';
import { useTheme } from '../hooks/themeContext';

export default function PortfolioShowcase() {
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);
    const [clickedSection, setClickedSection] = useState<number | null>(null);
    const {setIsDark} = useTheme();

    return (
        <div className="fixed flex flex-row w-full h-screen z-0">
            {sections.map((section: Section) => (
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
                        onClick={() => handleSectionClick(section.id, clickedSection, setClickedSection, setIsDark)}
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
