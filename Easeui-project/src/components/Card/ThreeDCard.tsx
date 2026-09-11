import React, { useRef, useState } from "react";
import { cn } from "@/libs/utils";

export interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ThreeDCard = ({ children, className, ...props }: ThreeDCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15; // Max rotation 15deg
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={cn("inline-block", className)}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={cn(
          "relative w-full h-full transition-all ease-out shadow-xl rounded-xl border border-gray-200 dark:border-gray-800",
          isHovered ? "duration-100" : "duration-500" // Slower return when mouse leaves
        )}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          backgroundColor: 'var(--card-bg, #ffffff)'
        }}
      >
        <div 
          className="absolute inset-0 z-10 pointer-events-none rounded-xl transition-opacity duration-300"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.2) 25%, transparent 30%)",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? `translateX(${rotate.y}%) translateY(${rotate.x}%)` : "none"
          }}
        />
        <div 
          className="relative z-20 h-full w-full transition-transform duration-300 ease-out" 
          style={{ transform: isHovered ? "translateZ(40px)" : "translateZ(0px)" }}
        >
           {children}
        </div>
      </div>
    </div>
  );
};
