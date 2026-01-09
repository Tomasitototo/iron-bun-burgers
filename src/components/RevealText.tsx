import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RevealTextProps {
    text: string;
    className?: string;
    image?: string;
}

export const RevealText = ({ text, className, image = "img/burger1.png" }: RevealTextProps) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLHeadingElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <span
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative inline-block cursor-default select-none group ${className}`}
        >
            {/* 
        Layer 1: The Image Masked by Text (The "Reveal" Effect)
        This layer sits on top. It contains the image but is clipped by the text.
        We also use clip-path circle to only show the part near the mouse.
      */}
            <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    clipPath: isHovered
                        ? `circle(100px at ${mousePosition.x}px ${mousePosition.y}px)`
                        : "circle(0px at 0px 0px)",
                    transition: "clip-path 0.3s ease-out", // Smooth expand/shrink of the "flashlight"
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    backgroundImage: `url('${image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "transparent",
                }}
                aria-hidden="true"
            >
                {text}
            </div>

            {/* 
        Layer 2: The Base Text
        This is what we see normally. It's the "cover".
        In the "Stunning" example, it's white.
        It sits below the mask layer (z-10).
      */}
            <span className="relative z-10 block text-primary">
                {text}
            </span>

            {/* 
        Background Image container for the text-clip referenced in layer 1. 
        Actually, Layer 1 handles the background image directly on the div.
        
        However, standard `background-clip: text` often requires the element to HAVE the text content.
        That is why Layer 1 repeats the `{text}`.
      */}

        </span>
    );
};
