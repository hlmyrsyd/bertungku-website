'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Section {
    id: number;
    bgColor: string;
    overlayColor: string;
    content: React.ReactNode;
}

export default function PortfolioShowcase() {
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);
    const [clickedSection, setClickedSection] = useState<number | null>(null);

    // Content for each section - customize these as needed
    const sections: Section[] = [
        {
        id: 1,
        bgColor: 'bg-white',
        overlayColor: 'bg-neutral-800',
        content: (
            <div className="flex w-full h-full text-white">
                <Image 
                    src={'/Image/image1.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            {/* <h2 className="text-4xl font-bold mb-4">Section 1</h2>
            <p className="text-lg">Your content here - images, text, anything!</p> */}
            </div>
        )
        },
        {
        id: 2,
        bgColor: 'bg-gray-100',
        overlayColor: 'bg-blue-800',
        content: (
            <div className="flex w-full h-full text-white">
                <Image 
                    src={'/Image/image2.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            {/* <h2 className="text-4xl font-bold mb-4">Section 1</h2>
            <p className="text-lg">Your content here - images, text, anything!</p> */}
            </div>
        )
        },
        {
        id: 3,
        bgColor: 'bg-slate-50',
        overlayColor: 'bg-green-800',
        content: (
            <div className="flex w-full h-full text-white">
                <Image 
                    src={'/Image/image3.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            {/* <h2 className="text-4xl font-bold mb-4">Section 1</h2>
            <p className="text-lg">Your content here - images, text, anything!</p> */}
            </div>
        )
        },
        {
        id: 4,
        bgColor: 'bg-stone-100',
        overlayColor: 'bg-purple-800',
        content: (
            <div className="flex w-full h-full text-white">
                <Image 
                    src={'/Image/image4.png'}
                    fill
                    alt={'Gambar Test 1'}
                    className="object-cover w-full h-full"
                />
            {/* <h2 className="text-4xl font-bold mb-4">Section 1</h2>
            <p className="text-lg">Your content here - images, text, anything!</p> */}
            </div>
        )
        }
    ];

    const handleSectionClick = (sectionId : number): void => {
        if (clickedSection === sectionId) {
        // If clicking the already expanded section, close it
        setClickedSection(null);
        } else if (clickedSection !== null) {
        // If another section is expanded, close it first, then open the new one
        setClickedSection(null);
        setTimeout(() => setClickedSection(sectionId), 100);
        } else {
        // If no section is expanded, expand this one
        setClickedSection(sectionId);
        }
    };

    return (
        <div className="fixed flex flex-row w-full h-screen z-0">
        {sections.map((section) => (
            <AnimatePresence key={section.id}>
                <motion.div 
                    className={`border-[0.5px] border-neutral-400 relative h-screen ${section.bgColor} overflow-hidden`}
                    onMouseEnter={() => clickedSection === null && setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                    animate={{
                    width: clickedSection === section.id ? '100vw' : clickedSection !== null ? '0vw' : '25vw',
                    zIndex: clickedSection === section.id ? 50 : 10
                    }}
                    transition={{ 
                    duration: 0.6, 
                    ease: 'circInOut' 
                    }}
                >
                    <AnimatePresence>
                    {(hoveredSection === section.id || clickedSection === section.id) && (
                        <motion.div
                        initial={{ y: '100%', height: '100%' }}
                        animate={{ y: '0%', height: '100%' }}
                        exit={{ y: '-100%', height: '70%' }}
                        transition={{ 
                            duration: 0.8, 
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
                    
                    {/* Close button when section is expanded */}
                    {clickedSection === section.id && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-4 right-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold transition-colors"
                        onClick={(e) => {
                        e.stopPropagation();
                        setClickedSection(null);
                        }}
                    >
                        ×
                    </motion.button>
                    )}
                </motion.div>
            </AnimatePresence>
        ))}
        </div>
    );
}