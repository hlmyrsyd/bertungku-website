'use client';

import Image from 'next/image';
import { useTheme } from '../hooks/themeContext';
import SmoothScroll from './smoothScroll';

interface PortfolioContentProps {
    imageSrc: string;
    alt: string;
}

export default function PortfolioContent({ imageSrc, alt }: PortfolioContentProps) {
    const { isDark } = useTheme();

    return (
        <SmoothScroll>
            <div className="flex w-full h-full text-white">
                {/* Overlay for dark mode effect */}
                <div
                    className={`${
                    isDark ? 'bg-black/25' : 'bg-black/0'
                    } z-10 absolute inset-0 transition-all duration-500 delay-200`}
                />
                {/* Fullscreen Image */}
                <Image
                    src={imageSrc}
                    fill
                    alt={alt}
                    className="object-cover w-full h-full"
                    priority
                />
                <div className="z-20 relative mt-[200vh] p-10 text-black">
                    <h1 className="text-4xl font-bold">Scroll Area</h1>
                    <p className="mt-4 text-lg">You can now scroll this content vertically.</p>
                </div>
            </div>
        </SmoothScroll>
    );
}
