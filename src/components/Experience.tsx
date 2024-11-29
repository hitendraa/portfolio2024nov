"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Android Development Intern",
    company: "Maxgen Technologies",
    location: "Ahmedabad",
    period: "May 2024 - June 2024",
    description: "Developed mobile applications using React Native and Flutter, implementing modern UI/UX practices and state management solutions.",
    skills: ["React Native", "Flutter", "Android Development", "UI/UX"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Team Lead",
    company: "Smart India Hackathon",
    location: "JIET Jodhpur",
    period: "September 2023",
    description: "Led a team in developing innovative solutions for real-world problems, demonstrating leadership and technical expertise.",
    skills: ["Team Leadership", "Problem Solving", "Full Stack Development"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Finalist",
    company: "Hack-ITO 2.0",
    location: "JIET Universe",
    period: "September 2023",
    description: "Selected as a finalist for innovative project presentation and technical implementation.",
    skills: ["Innovation", "Project Development", "Technical Presentation"],
    gradient: "from-green-500 to-emerald-500"
  }
];

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for background blobs
      const blobs = document.querySelectorAll('.exp-blob');
      blobs.forEach(blob => {
        gsap.to(blob, {
          y: Math.random() * 100 - 50,
          duration: 10 + Math.random() * 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      // Title animation
      gsap.from(".experience-title", {
        scrollTrigger: {
          trigger: ".experience-title",
          start: "top bottom",
          end: "bottom center",
          scrub: 1
        },
        opacity: 0,
        y: 100,
        duration: 1
      });

      // Cards stagger animation
      const cards = document.querySelectorAll('.experience-card');
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1
          },
          opacity: 0,
          y: 100,
          rotation: index % 2 === 0 ? 5 : -5,
          duration: 1
        });
      });

      // Skills tags animation
      gsap.from(".skill-tag", {
        scrollTrigger: {
          trigger: ".experience-cards",
          start: "top center",
          end: "bottom center",
          scrub: 1
        },
        scale: 0,
        opacity: 0,
        stagger: 0.02,
        duration: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-black">
      {/* Matching background exactly with Skills section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-80 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16 experience-title">
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building real-world experience through internships and innovative projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 experience-cards">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className="experience-card group"
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 h-full
                            hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} blur-xl`} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient}`} />
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-purple-400 font-medium">{exp.company}</div>
                    <div className="text-gray-500 text-sm flex items-center gap-2">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-tag px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20
                                hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
