'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { FaGithub, FaLinkedinIn, FaReact, FaPython } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" }
    });

    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1
    })
    .from(textRef.current?.children || [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })
    .from(imageRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1
    }, "-=0.5");

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      {/* Background grid animation */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-20">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="grid-item animate-pulse" />
        ))}
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div ref={textRef} className="text-white space-y-6">
          <h2 className="text-xl font-light text-purple-400">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Hitendra Singh Choudhary
          </h1>
          <div className="space-y-4 text-lg text-gray-300">
            <p className="font-light">
              A passionate <span className="font-semibold text-purple-400">Full Stack Developer</span> and 
              <span className="font-semibold text-pink-400"> AI Specialist</span> from Jodhpur, Rajasthan
            </p>
            <p>
              Currently pursuing BTech in Computer Science (AIML) at JIET Jodhpur,
              set to graduate in 2026
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
              Full Stack Development
            </span>
            <span className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
              AI/ML Specialist
            </span>
            <span className="px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
              Android Development
            </span>
            <span className="px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30">
              3D Web Development
            </span>
          </div>
        </div>

        <div ref={imageRef} className="relative w-64 h-64 mx-auto lg:w-72 lg:h-72">
          {/* Main profile image with gradient border */}
          <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 animate-border-pulse">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-black/50 backdrop-blur-sm">
              <img
                src="/profile.jpeg"
                alt="Hitendra Singh Choudhary"
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500/10 rounded-full animate-pulse animation-delay-2000" />
          
          {/* Tech stack badges */}
          <div className="absolute -top-2 right-0 bg-white/10 backdrop-blur-md rounded-full p-2 animate-float">
            <FaReact className="w-8 h-8 text-[#61DAFB]" />
          </div>
          <div className="absolute top-1/4 -right-4 bg-white/10 backdrop-blur-md rounded-full p-2 animate-float animation-delay-2000">
            <TbBrandNextjs className="w-8 h-8 text-white" />
          </div>
          <div className="absolute top-1/2 -right-6 bg-white/10 backdrop-blur-md rounded-full p-2 animate-float animation-delay-4000">
            <FaPython className="w-8 h-8 text-[#3776AB]" />
          </div>

          {/* Achievement badges */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 animate-float">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-xl">🏆</span>
              <span className="text-white text-sm font-medium">Smart India Hackathon Lead</span>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 animate-float-delay">
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">💼</span>
              <span className="text-white text-sm font-medium">Android Development Intern</span>
            </div>
          </div>

          {/* Social links */}
          <div className="absolute bottom-1/4 -left-6 flex flex-col gap-4">
            <a href="https://github.com/hitendraa" target="_blank" rel="noopener noreferrer"
               className="bg-white/10 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors">
              <FaGithub className="w-5 h-5 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/hitendra-singh-choudhary-5837631b8" target="_blank" rel="noopener noreferrer"
               className="bg-white/10 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors">
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
