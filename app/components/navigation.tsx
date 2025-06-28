'use client';

import { useTheme } from "../hooks/themeContext";

export default function Navigation() {
    const { isDark } = useTheme();

    return (
        <div className="flex flex-row w-full items-start z-10 transition-all duration-500 delay-200">
            {/* Logo + Title */}
            <div className="flex flex-row justify-start items-center w-1/4 gap-4 p-10">
                <div className={`${isDark ? 'text-white' : 'text-neutral-800'} transition-all duration-500 delay-200`}>
                    <svg width="30" height="30" viewBox="0 0 100 99" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path d="M0 51.2406V30.9642L8.43077 35.5447L70.8308 0V20.3374L8.43077 56.2486L0 51.2406Z" />
                        <path d="M0 91.9155V71.578L12.4308 78.5404L62.4 50.0802L87.3231 64.2492L100 57.1647V77.3189L87.3231 84.5256L62.4 70.3566L12.4308 99L0 91.9155Z" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold tracking-widest">
                Ber
                <span className="font-medium tracking-widest">tungku</span>
                </h1>
            </div>

            {/* Motto */}
            <div className="flex flex-col w-1/4 p-10">
                <p className="text-2xl">
                Form <br />
                Follows <br />
                Function
                </p>
            </div>

            {/* Hero */}
            <div className="flex flex-col w-2/4 gap-10 p-10">
                <h1 className="text-7xl">
                CREATE IDEAL INTERIOR FOR YOU
                </h1>
                <div className="text-xl p-2 px-8 border rounded-full w-fit">
                    CONSULT NOW
                </div>
            </div>
        </div>
    );
}
