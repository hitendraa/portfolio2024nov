'use client';
import Hero from '@/components/Hero';
import { SkillsSection } from '@/components/Skills';
import Projects from '@/components/Projects';
import CustomCursor from '@/components/CustomCursor';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(section, {
            opacity: 0.5,
            y: 50,
            duration: 1
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <CustomCursor />
      <section className="relative">
        <Hero />
      </section>
      <section className="relative -mt-20">
        <SkillsSection />
      </section>
      <section className="relative -mt-20">
        <Projects />
      </section>
    </main>
  );
}
