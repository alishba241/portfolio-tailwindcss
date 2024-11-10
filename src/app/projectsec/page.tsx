"use client"

import Image from "next/image";
import Link from "next/link";
import {FaGithub,FaLink,FaChevronLeft,FaChevronRight} from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ! for mobile screen

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js, showcasing my projects, skills, and experience.",
      imageUrl: "/proj1.JPG",
      liveDemoUrl: "https://portfolio2-html-css.vercel.app/",
      codeUrl: "#",
    },
    {
      title: "Online Courese Website",
      description:
        "A platform for exploring and enrolling in online courses, developed in Next.js.",
      imageUrl: "/proj2.JPG",
      liveDemoUrl: "https://online-course-assignment-tailwind.vercel.app/",
      codeUrl:
        "https://github.com/alishba241/online-course-assignment-tailwind.git",
    },

    {
      title: "Blog Website",
      description:
        " A responsive blog site created with Next.js, featuring categories and individual blog posts.",
      imageUrl: "/proj4.JPG",
      liveDemoUrl: "https://nextjs-blog-website-lemon.vercel.app/",
      codeUrl: "https://github.com/alishba241/nextjs-blog-website.git",
    },
    {
      title: "Figma Design",
      description:
        "Custom UI/UX design prototypes made in Figma to visualize and plan website layouts.",
      imageUrl: "/proj5.JPG",
      liveDemoUrl: "https://figma-hackathon-project.vercel.app/",
      codeUrl: "https://github.com/alishba241/figma-hackathon-project.git",
    },
    {
      title: "Personal Portfolio",
      description:
        "A visually engaging portfolio highlighting my work, skills, and experience, built using Next.js.",
      imageUrl: "/proj3.JPG",
      liveDemoUrl: "https://portfolio-website-yqir.vercel.app/",
      codeUrl: "https://github.com/alishba241/portfolio-website.git",
    },
    {
      title: "Stop Watch App",
      description:
        "A functional stopwatch app with start, stop, and reset options, developed in Next.js.",
      imageUrl: "/proj6.JPG",
      liveDemoUrl: "https://stop-watch-nine-nu.vercel.app/",
      codeUrl: "https://github.com/alishba241/stop-watch",
    },
  ];

  // ! mobile slider
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div
      className="py-12 bg-gradient-to-t from-black to-cyan-950"
      id="projects"
    >
      <motion.div
        className="container mx-auto px-6 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="font-bold text-3xl md:text-4xl text-cyan-400 text-center tracking-[8px] pt-8 mb-[70px] md:pt-14 md:mb-[100px]">
          Projects
        </h2>

        {/* ! slider buttons for mobile */}

        {isMobile && (
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={handlePrev}
              className="bg-cyan-400 text-black rounded-full p-2"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-cyan-400 text-black rounded-full p-2"
            >
              <FaChevronRight />
            </button>
          </div>
        )}

        {/* ! slider container */}
        <div
          className={`${
            isMobile
              ? "flex overflow-hidden justify-center"
              : "grid gap-8 sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative group bg-white bg-opacity-15 rounded-lg border border-cyan-400 p-4 transition-transform duration-300 ease-in-out ${
                isMobile ? (index === currentIndex ? "block" : "hidden") : ""
              }`}
              style={{ width: isMobile ? "88%" : "100%" }}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 filter brightness-100 md:brightness-75 md:hover:brightness-100"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-white">
                  {project.title}
                </h3>
                <p className="text-white text-[14px] pt-1 pb-4">
                  {project.description}
                </p>
                {/* buttons */}
                <div className="flex gap-4">
                  <Link href={project.liveDemoUrl} target={"_blank"}>
                    <button className="bg-white bg-opacity-40 hover:bg-yellow-500 hover:bg-opacity-100 duration-500 ease-in-out h-9 w-9 rounded-full text-center flex items-center justify-center">
                      <FaLink />
                    </button>
                  </Link>
                  <Link href={project.codeUrl} target={"_blank"}>
                    <button className="bg-white bg-opacity-40 hover:bg-yellow-500 hover:bg-opacity-100 duration-500 ease-in-out h-9 w-9 rounded-full text-center flex items-center justify-center">
                      <FaGithub />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
