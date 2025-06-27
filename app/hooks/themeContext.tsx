'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--background', isDark ? '#0a0a0a' : '#ffffff');
        root.style.setProperty('--foreground', isDark ? '#ededed' : '#171717');
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
