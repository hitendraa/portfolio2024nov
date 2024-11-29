import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.2,
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none mix-blend-difference z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
