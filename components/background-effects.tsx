"use client";

import { useEffect, useState } from "react";

export function BackgroundEffects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            {/* Animated Gradient Background */}
            <div className="fixed inset-0 -z-40 bg-gradient-to-br from-background via-background to-primary/5" />

            {/* Moving Grid */}
            <div
                className="fixed inset-0 -z-30 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 119, 198, 0.15) 0%, transparent 50%)`,
                }}
            />

            {/* Animated Particles */}
            <div className="fixed inset-0 -z-20">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-primary/10"
                        style={{
                            width: Math.random() * 4 + 1,
                            height: Math.random() * 4 + 1,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 10}s infinite linear`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
}