"use client"

import { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white px-4 pt-4 ">
      {/*! large screen navbar */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden pt-10 md:flex flex-col md:flex-row items-center gap-10 justify-between px-4 py-4 bg-black"
      >
        <h1 className="text-xl md:text-2xl font-bold font-sans text-white ml-12">
          <span className="text-yellow-500">P</span>ortfolio.
        </h1>
        <ul className="flex space-x-4 bg-cyan-300 bg-opacity-10 rounded-full p-1.5 font-semibold text-sm items-center">
          <li className="px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-500">
            <Link href="#home">Home</Link>
          </li>
          <li className="px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-500">
            <Link href="#about">About</Link>
          </li>
          <li className="px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-500">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-500">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-500">
            <Link href="#services">Services</Link>
          </li>
          <li className="px-6 py-1.5 rounded-full hover:bg-white hover:text-black transition duration-500">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </motion.div>

      {/*! small screen navbar */}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="md:hidden flex justify-between pt-8 px-[5%]"
      >
        <h1 className="text-xl md:text-2xl font-bold font-sans text-white ">
          <span className="text-yellow-500">P</span>ortfolio.
        </h1>
        <button
          onClick={toggleMenu}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <HiMenu size={20} className="text-white cursor-pointer" />
        </button>
      </motion.div>

      {/*! dropdown menu */}

      <div
        className={`md:hidden rounded-lg mt-8  py-4 transition-all duration-700 bg-gradient-to-b from-black via-cyan-950 to-black ease-in-out transform ${
          isOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-2 text-center font-semibold text-[15px]">
          <li className="mb-2 shadow-sm px-6 py-1.5 rounded-full hover:bg-white hover:text-black duration-500 ease-in">
            <Link href="#home">Home</Link>
          </li>
          <li className="mb-2 shadow-sm px-6 py-1.5 rounded-full hover:bg-white hover:text-black duration-500 ease-in">
            <Link href="#about">About</Link>
          </li>
          <li className="mb-2 shadow-sm px-6 py-1.5 rounded-full hover:bg-white hover:text-black duration-500 ease-in">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="mb-2 shadow-sm px-6 py-1.5 rounded-full hover:bg-white hover:text-black duration-500 ease-in">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="mb-2 shadow-sm px-6 py-1.5 rounded-full hover:bg-white hover:text-black duration-500 ease-in">
            <Link href="#services">Services</Link>
          </li>
          <li className="shadow-sm rounded-full px-6 py-1.5 hover:bg-white hover:text-black duration-500 ease-in">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
