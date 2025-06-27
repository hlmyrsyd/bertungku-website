'use client';
import { useEffect, useState } from "react";

export function useBarHovered() {
    const [isHovered, setIsHovered] = useState(false);
    const [isBarHovered, setIsBarHovered] = useState(false);
    
        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
            setIsHovered(e.clientY <= 20);
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }, []);
    
        return { isHovered, isBarHovered, setIsBarHovered };
}