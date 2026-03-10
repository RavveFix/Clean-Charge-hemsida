import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  magneticRadius?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = "", 
  strength = 30, // How far it moves (pixels)
  magneticRadius = 100, // Distance to react to mouse
  ...props 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // We use a global mouse move to check distance to button center
    const onMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      
      const distX = e.clientX - btnCenterX;
      const distY = e.clientY - btnCenterY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < magneticRadius) {
        if (!isHovered) setIsHovered(true);
        // Pull the button towards cursor, but clamped by strength
        const pullX = (distX / magneticRadius) * strength;
        const pullY = (distY / magneticRadius) * strength;
        
        gsap.to(button, {
          x: pullX,
          y: pullY,
          duration: 0.6,
          ease: "power2.out"
        });
        
        // Inner text moves slightly more for parallax effect
        if(textRef.current) {
            gsap.to(textRef.current, {
                x: pullX * 0.4,
                y: pullY * 0.4,
                duration: 0.6,
                ease: "power2.out"
            });
        }
      } else {
        if (isHovered) {
          setIsHovered(false);
          // Snap back
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          });
          if(textRef.current) {
            gsap.to(textRef.current, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.3)"
            });
          }
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [strength, magneticRadius, isHovered]);

  return (
    <button 
      ref={buttonRef} 
      className={`relative inline-block ${className}`}
      {...props}
    >
      <div ref={textRef} className="pointer-events-none flex items-center justify-center w-full h-full gap-2">
        {children}
      </div>
    </button>
  );
};

export default MagneticButton;
