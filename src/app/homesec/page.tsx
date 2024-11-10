"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {FaGithub,FaInstagram,FaLinkedin,FaTwitter,FaYoutube,} from "react-icons/fa";

const HomeSection = () => (
  <div className="relative bg-gradient-to-b from-black to-cyan-950">
    <motion.div
      className="flex flex-col-reverse w-full md:flex-row h-auto md:h-[600px] bg-gradient-to-b from-black to-cyan-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="md:mt-[120px] mt-14 text-white mx-4 md:mx-[80px] md:w-[570px] md:pl-0 md:pr-0 pl-[2%] "
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="md:text-4xl text-[26px] font-bold text-white font-sans"
          transition={{ duration: 0.3 }}
        >
          Hi, It&#39;s <span className="text-yellow-500">Alishba Naveed</span>
        </motion.h2>

        <motion.p
          className="md:text-[17px] text-[15px] font-semibold text-white italic font-sans md:mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I&#39;m a <span className="text-cyan-500">Frontend Developer</span>
        </motion.p>

        <motion.p
          className="md:mt-4 mt-2 md:text-sm text-[13px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I’m Alishba Naveed, a dedicated Frontend Developer with a passion for
          creating visually appealing, efficient, and user-friendly web
          experiences with HTML, CSS, JavaScript, TypeScript, Node.js, and
          frameworks like React and Next.js.
        </motion.p>

        <motion.div
          className="flex md:gap-6 gap-4 text-white md:mt-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube].map(
            (Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="hover:border-cyan-500 hover:text-cyan-500 duration-300 ease-in border-2 border-white rounded-full md:w-9 md:h-9 md:p-2 h-[34px] w-[34px] p-[7px]" />
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div
          className="md:mt-8 mt-10 flex md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link href="#contact">
            <motion.button
              className="bg-cyan-500 md:px-7 px-5 py-2 rounded-full text-[#20242d] font-bold text-sm hover:bg-white duration-500 ease-in"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Contact me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center md:justify-end mt-0 md:mt-[90px] md:ml-[18%] md:mr-[80px]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative flex items-center justify-center w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 506 506"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#eab308"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [0, 120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.svg>
          <Image
            src="/img.jpg"
            alt="profile photo"
            className="rounded-full object-cover filter brightness-110 md:h-[250px] md:w-[250px] h-[160px] w-[160px]"
            width={100}
            height={100}
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default HomeSection;
