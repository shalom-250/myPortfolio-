"use client";

import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Intercept and silence the specific React 19 "script tag" hydration warning
        // This is a known false positive with next-themes + React 19
        const originalError = console.error;
        console.error = (...args) => {
            if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag while rendering React component')) {
                return;
            }
            originalError.apply(console, args);
        };

        setMounted(true);
        
        return () => {
            console.error = originalError;
        };
    }, []);

    // Prevent script tag injection during SSR to satisfy React 19
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <NextThemesProvider {...props} enableColorScheme={false}>
            {children}
        </NextThemesProvider>
    );
}
