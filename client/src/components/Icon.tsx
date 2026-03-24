"use client";

import React from "react";

export default function Icon({ className = "w-8 h-8", ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            {/* Geometric Luxury S */}
            <path
                d="M35 25H75V40H45V50H75V65H35"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="square"
                className="text-accent-red"
            />
            {/* Elite Coding Slash */}
            <path
                d="M60 15L40 75"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="square"
                className="text-foreground/60 dark:text-foreground/30"
            />
        </svg>
    );
}
