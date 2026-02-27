'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface CustomCursorProps {
    containerRef: React.RefObject<HTMLElement | null>;
}

interface SnapTarget {
    x: number;
    y: number;
    width: number;
    height: number;
    borderRadius: number;
}

export default function CustomCursor({ containerRef }: CustomCursorProps) {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const [isVisible, setIsVisible] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [snap, setSnap] = useState<SnapTarget | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(true); // default true = hidden until confirmed mouse

    const springCfg = { damping: 22, stiffness: 420, mass: 0.5 };
    const x = useSpring(mouseX, springCfg);
    const y = useSpring(mouseY, springCfg);

    const widthVal = useMotionValue(24);
    const heightVal = useMotionValue(24);
    const radiusVal = useMotionValue(999);

    const wSpring = useSpring(widthVal, { damping: 20, stiffness: 350 });
    const hSpring = useSpring(heightVal, { damping: 20, stiffness: 350 });
    const rSpring = useSpring(radiusVal, { damping: 20, stiffness: 350 });

    useEffect(() => {
        // Only show on devices that support hover (real mouse, not touch)
        const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
        setIsTouchDevice(!mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsTouchDevice(!e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const getClickable = (el: HTMLElement): HTMLElement | null => {
            if (el.tagName === 'A' || el.tagName === 'BUTTON') return el;
            return el.closest('a, button') as HTMLElement | null;
        };

        const handleMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const clickable = getClickable(target);

            if (clickable) {
                // Snap: measure the element's rect and position cursor to cover it
                const rect = clickable.getBoundingClientRect();
                const padX = 10;
                const padY = 6;
                const newSnap: SnapTarget = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                    width: rect.width + padX * 2,
                    height: rect.height + padY * 2,
                    borderRadius: 8,
                };
                setSnap(newSnap);
                mouseX.set(newSnap.x);
                mouseY.set(newSnap.y);
                widthVal.set(newSnap.width);
                heightVal.set(newSnap.height);
                radiusVal.set(newSnap.borderRadius);
            } else {
                // Free-floating dot mode
                setSnap(null);
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
                widthVal.set(isClicking ? 16 : 22);
                heightVal.set(isClicking ? 16 : 22);
                radiusVal.set(999);
            }
        };

        const handleEnter = () => setIsVisible(true);
        const handleLeave = () => { setIsVisible(false); setSnap(null); };
        const handleDown = () => {
            setIsClicking(true);
            if (!snap) { widthVal.set(16); heightVal.set(16); }
        };
        const handleUp = () => {
            setIsClicking(false);
            if (!snap) { widthVal.set(22); heightVal.set(22); }
        };

        container.addEventListener('mousemove', handleMove);
        container.addEventListener('mouseenter', handleEnter);
        container.addEventListener('mouseleave', handleLeave);
        container.addEventListener('mousedown', handleDown);
        container.addEventListener('mouseup', handleUp);

        return () => {
            container.removeEventListener('mousemove', handleMove);
            container.removeEventListener('mouseenter', handleEnter);
            container.removeEventListener('mouseleave', handleLeave);
            container.removeEventListener('mousedown', handleDown);
            container.removeEventListener('mouseup', handleUp);
        };
    }, [containerRef, mouseX, mouseY, widthVal, heightVal, radiusVal, isClicking, snap]);

    // Don't render on touch/mobile devices
    if (isTouchDevice) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[9998]"
                    style={{
                        x,
                        y,
                        translateX: '-50%',
                        translateY: '-50%',
                        width: wSpring,
                        height: hSpring,
                        borderRadius: rSpring,
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{
                        opacity: 1,
                        scale: isClicking && !snap ? 0.85 : 1,
                        backgroundColor: snap
                            ? 'rgba(16, 163, 74, 0.12)'
                            : 'rgba(16, 163, 74, 0.22)',
                    }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 400 }}
                />
            )}
        </AnimatePresence>
    );
}
