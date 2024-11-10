"use client"

import { useEffect, useRef, useState } from "react";
import {motion} from 'framer-motion'
interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
    { name: "Tailwind css", percentage: 70 },
  { name: "Typescript", percentage: 85 },
  { name: "Next.js", percentage: 80 },
];

interface Circle {
  name: string;
  percentage: number;
}

const circleSkills: Circle[] = [
  { name: "Communication", percentage: 90 },
  { name: "Time Management", percentage: 80 },
  { name: "Problem-Solving ", percentage: 85 },
  { name: "Adaptability ", percentage: 75 },
];

// ! technical skills

const SkillBar: React.FC<Skill> = ({ name, percentage }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (barRef.current) {
        const rect = barRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  return (
    <div className="my-4">
      <div className="flex justify-between pb-2">
        <h3 className=" text-sm md:text-lg  text-white font-semibold">{name}</h3>
        <h3 className="text-white text-sm md:text-lg ">{percentage}%</h3>
      </div>
      <div className="relative w-full h-[5px] md:h-[6px] bg-black bg-opacity-70 rounded-full mb-7 md:mb-10">
        <div
          ref={barRef}
          className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${
            inView ? "bg-cyan-400" : "bg-gray-200"
          }`}
          style={{ width: inView ? `${percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
};

// ! professional skills

const CircularSkill: React.FC<Skill> = ({ name, percentage }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false); 
  const baseRadius = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const rect = circleRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const strokeWidth = isMobile ? 5 : 6;
  const svgSize = isMobile ? 100 : 120;
  const radius = isMobile ? baseRadius * 0.7 : baseRadius;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center md:my-4 ">
      <svg width={svgSize}
        height={svgSize} className="rotate-[-90deg]">
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="transparent"
          stroke="black"
          opacity={"0.7"}
          strokeWidth={strokeWidth}
        />
        <circle
          ref={circleRef}
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="transparent"
          stroke=" #22d3ee"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={inView ? offset : circumference}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="mt-2 text-sm md:text-lg  font-semibold text-white">{name}</span>
      <span className="text-white text-sm md:text-lg ">{percentage}%</span>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-black to-cyan-950 flex flex-col items-center" id="skills">
      <h1 className="font-bold text-3xl md:text-4xl text-cyan-400 text-center tracking-[8px] py-16">Skills</h1>
      
      <motion.div
        className="flex flex-col md:flex-row md:justify-around w-full px-4 md:px-8 lg:px-16 md:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.9 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
      >
        {/* ! technical skills section */}
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-0 px-[10%]">
          <h2 className="text-center text-white font-bold uppercase text-lg md:text-xl md:pb-14 pb-10 underline underline-offset-8">
            Technical Skills
          </h2>
          {skills.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>

        {/* ! professional skills section*/}
        <div className="w-full md:w-1/2 lg:w-1/3 md:px-0 md:mt-0 mt-14">
          <h2 className="text-center text-white font-bold uppercase text-lg md:text-xl md:pb-14 pb-10 underline underline-offset-8">
            Professional Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {circleSkills.map((circularSkill, index) => (
              <CircularSkill key={index} {...circularSkill} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}