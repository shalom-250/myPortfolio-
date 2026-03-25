"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface SmoothScrollProps {
  children: React.ReactNode;
  marginLeft?: string | number;
  width?: string;
  paddingTop?: string | number;
}

export default function SmoothScroll({ 
  children, 
  marginLeft = 0, 
  width = "100%",
  paddingTop = 0
}: SmoothScrollProps) {
  const [contentHeight, setContentHeight] = useState(0);
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { scrollY, scrollYProgress } = useScroll();
  
  const smoothY = useSpring(scrollY, {
    damping: 25, /* Tighter damping */
    stiffness: 200, /* Higher stiffness for speed */
    mass: 0.1,
    restDelta: 0.001
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 35,
    restDelta: 0.001
  });

  const y = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (contentRef.current) {
        resizeObserver.observe(contentRef.current);
    }
    
    return () => resizeObserver.disconnect();
  }, [children]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-red z-[10000] origin-left shadow-[0_0_15px_rgba(237,112,20,0.5)]"
        style={{ scaleX, opacity: mounted ? 1 : 0 }}
      />

      <div style={{ height: contentHeight }} className="w-full pointer-events-none" />
      
      <motion.div
        ref={contentRef}
        style={{ 
          y, 
          left: marginLeft,
          width: width,
          paddingTop: paddingTop
        }}
        className="fixed top-0 pointer-events-auto overflow-hidden will-change-transform z-10"
      >
        {children}
      </motion.div>
    </>
  );
}
