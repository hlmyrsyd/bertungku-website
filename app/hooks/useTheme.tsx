'use client';
import { useEffect, useState } from 'react';

export function useTheme() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
        root.style.setProperty('--background', '#0a0a0a');
        root.style.setProperty('--foreground', '#ededed');
        } else {
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#171717');
        }
    }, [isDark]);

    return { isDark, setIsDark };
}
