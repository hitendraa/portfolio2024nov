"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaPython, FaAws, FaJava, FaMobile, FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { SiNextdotjs, SiThreedotjs, SiTailwindcss, SiFramer, SiFlutter, SiTensorflow, SiMongodb } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';

const skills = [
  {
    category: "Frontend",
    icon: <FaReact className="text-4xl text-blue-400" />,
    items: [
      { name: "React", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Three.js", icon: <SiThreedotjs />, level: 80 },
      { name: "GSAP", icon: "✨", level: 75 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 90 },
      { name: "Framer", icon: <SiFramer />, level: 85 }
    ]
  },
  {
    category: "Mobile",
    icon: <FaMobile className="text-4xl text-green-400" />,
    items: [
      { name: "React Native", icon: <FaReact />, level: 85 },
      { name: "Flutter", icon: <SiFlutter />, level: 80 },
      { name: "Java", icon: <FaJava />, level: 85 },
      { name: "Android", icon: <FaMobile />, level: 80 }
    ]
  },
  {
    category: "Backend",
    icon: <FaNode className="text-4xl text-purple-400" />,
    items: [
      { name: "Python", icon: <FaPython />, level: 90 },
      { name: "AWS", icon: <FaAws />, level: 80 },
      { name: "Node.js", icon: <FaNode />, level: 85 },
      { name: "MongoDB", icon: <SiMongodb />, level: 85 }
    ]
  },
  {
    category: "AI/ML",
    icon: <BsRobot className="text-4xl text-cyan-400" />,
    items: [
      { name: "ML", icon: <SiTensorflow />, level: 90 },
      { name: "DL", icon: <BsRobot />, level: 85 },
      { name: "Gen AI", icon: "🤖", level: 85 },
      { name: "CV", icon: "👁️", level: 80 }
    ]
  }
];

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

export function SkillsSection() {
  return (
    <>
      {/* Skills Section with Scroll Container */}
      <div className="flex flex-col overflow-hidden bg-black relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black pointer-events-none" />
        
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-bold text-white mb-4">
                Mastering
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 block">
                  Tech Stack
                </span>
              </h1>
            </>
          }
        >
          <div className="max-w-6xl mx-auto w-full px-4">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-4 rounded-full bg-gray-800/50 backdrop-blur-sm mb-3"
                  >
                    {skillGroup.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {skillGroup.category}
                  </h3>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {skills.flatMap((group) =>
                group.items.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: idx * 0.05,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800/30 transition-colors">
                      <span className="text-xl text-gray-400 group-hover:text-white transition-colors">
                        {skill.icon}
                      </span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1 bg-gray-800/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 0.8,
                              delay: idx * 0.05,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>
        </ContainerScroll>
      </div>

      {/* Experience Section with Clean Modern UI */}
      <div className="relative bg-black py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Background Card */}
                <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                  hover:border-purple-500/30 transition-all duration-500 overflow-hidden group">
                  
                  {/* Content */}
                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      {/* Left Column - Title and Company */}
                      <div className="md:w-1/3">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                            <FaBriefcase className="text-2xl text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-purple-300">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-purple-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-purple-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Description and Skills */}
                      <div className="md:w-2/3">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIdx) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: skillIdx * 0.1,
                                ease: "backOut"
                              }}
                              className="px-4 py-2 text-sm rounded-lg bg-purple-500/10 
                                border border-purple-500/20 text-purple-300
                                hover:bg-purple-500/20 hover:border-purple-500/30 
                                transition-all duration-300"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                    blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 
                    blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                </div>

                {/* Connector Line (except for last item) */}
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-8 bottom-0 w-0.5 h-12 bg-gradient-to-b from-purple-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}