"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";
import { projects } from "@/data/projects";
import { ProjectCardProps } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.25, 0.25, 0, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative bg-black/30 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10
                hover:border-purple-500/30 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.div 
          className="project-image absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        >
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                        opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
        </motion.div>
      </div>

      <div className="relative p-6 bg-gradient-to-b from-black/0 to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              delay: 0.2 + index * 0.1,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-sm">
            <span 
              className={`inline-block h-2 w-2 rounded-full bg-gradient-to-r ${project.gradient}`}
              role="presentation" 
            />
            <span className="text-purple-400">{project.category}</span>
          </div>

          <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="mt-4 text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.3,
                    delay: 0.3 + i * 0.1,
                    ease: "backOut"
                  }
                }}
                viewport={{ once: true }}
                className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20
                         hover:bg-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link group relative inline-flex items-center gap-2 px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                            group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-500" />
              <FaGithub className="text-xl relative z-10 text-white group-hover:text-purple-400 transition-colors duration-300" />
              <span className="relative z-10 text-white group-hover:text-purple-400 transition-colors duration-300">Code</span>
            </motion.a>
            
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link group relative inline-flex items-center gap-2 px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit live demo of ${project.title}`}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 
                            group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-500" />
              <FaPlay className="text-xl relative z-10 text-white group-hover:text-cyan-400 transition-colors duration-300" />
              <span className="relative z-10 text-white group-hover:text-cyan-400 transition-colors duration-300">Demo</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-container", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                       from-purple-400 to-pink-600 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing innovation through code and creativity
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "3D Web", "AI/ML", "Machine Learning"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
