"use client"

import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => (
  <section
    id="contact"
    className="min-h-screen flex items-center justify-center bg-gradient-to-t from-black to-cyan-950 p-8 sm:p-12"
  >
    <motion.div
      className="w-full max-w-2xl rounded-xl md:p-8 p-[3%] text-center text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h2 className="font-bold text-3xl md:text-4xl text-cyan-400 text-center tracking-[8px] md:py-14 py-8 ">
        Contact Me
      </h2>
      <p className="mb-8 text-gray-300 text-sm md:text-[16px]">
        Were here to help! Please fill out the form below, and well get back to
        you as soon as possible.
      </p>

      <form className="space-y-6">
        <motion.input
          whileFocus={{ scale: 1.05, borderColor: "#22D3EE" }}
          className="w-full md:p-4 p-2 bg-transparent border border-gray-400 rounded-md text-white md:placeholder:text-base placeholder:text-[13px] placeholder-gray-400 focus:outline-none transition-all duration-300"
          type="text"
          placeholder="Your Name"
        />

        <motion.input
          whileFocus={{ scale: 1.05, borderColor: "#22D3EE" }}
          className="w-full md:p-4 p-2 bg-transparent border border-gray-400 rounded-md text-white md:placeholder:text-base placeholder:text-[13px] placeholder-gray-400 focus:outline-none transition-all duration-300"
          type="email"
          placeholder="Your Email"
        />

        <motion.input
          whileFocus={{ scale: 1.05, borderColor: "#22D3EE" }}
          className="w-full md:p-4 p-2 bg-transparent border border-gray-400 rounded-md text-white md:placeholder:text-base placeholder:text-[13px] placeholder-gray-400 focus:outline-none transition-all duration-300"
          type="tel"
          placeholder="Your Phone Number"
        />

        <motion.input
          whileFocus={{ scale: 1.05, borderColor: "#22D3EE" }}
          className="w-full md:p-4 p-2 bg-transparent border border-gray-400 rounded-md text-white md:placeholder:text-base placeholder:text-[13px] placeholder-gray-400 focus:outline-none transition-all duration-300"
          type="text"
          placeholder="Subject"
        />

        <motion.textarea
          whileFocus={{ scale: 1.05, borderColor: "#22D3EE" }}
          className="w-full md:p-4 p-2 bg-transparent resize-none border border-gray-400 rounded-md md:placeholder:text-base placeholder:text-[13px] text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
          rows={5}
          placeholder="Your Message"
        ></motion.textarea>

        {/*! button */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-cyan-700 text-white py-3 rounded-md hover:bg-cyan-600 transition-colors duration-300 font-semibold"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </section>
);

export default ContactSection;
