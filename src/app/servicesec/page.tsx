
'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPalette, FaSearch } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaServer } from 'react-icons/fa';

const services = [
  { id: 1, title: 'Web Development', icon: <FaCode className="animate-bounce" />, description: 'Creating responsive, high-performance websites and web applications.' },
  { id: 2, title: 'Mobile App Development', icon: <FaMobileAlt className="animate-bounce" />, description: 'Building intuitive and efficient mobile applications for iOS and Android.' },
  { id: 3, title: 'UI/UX Design', icon: <FaPalette className="animate-bounce" />, description: 'Designing modern, user-friendly interfaces that enhance user experience.' },
  { id: 4, title: 'SEO Optimization', icon: <FaSearch className="animate-bounce" />, description: 'Improving your website’s visibility and ranking on search engines.' },
  { id: 5, title: 'E-commerce Solutions', icon: <AiOutlineShoppingCart className="animate-bounce" />, description: ' Build and integrate custom APIs that allow websites to interact with third-party services.' },
  { id: 6, title: 'API Development', icon: <FaServer className="animate-bounce" />, description: 'Implementing scalable and secure cloud solutions for your applications.' },
];

const ServiceSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ! for mobile screen

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ! mobile slider

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="h-auto p-8 sm:p-12 md:p-16 bg-gradient-to-b from-black to-cyan-950">
      <motion.div
        className="container mx-auto text-center"
       initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      >
        <h2 className="font-bold text-3xl md:text-4xl text-cyan-400 tracking-[8px] pt-5 md:pt-14 mb-[60px] md:mb-[100px]">Services</h2>

        {/* ! slider buttons for mobile */}

        {isMobile && (
          <div className="flex justify-between items-center mb-10">
            <button onClick={handlePrev} className="bg-cyan-400 text-black rounded-full p-2">
              <FaChevronLeft />
            </button>
            <button onClick={handleNext} className="bg-cyan-400 text-black rounded-full p-2">
              <FaChevronRight />
            </button>
          </div>
        )}

        <motion.div 
          className={`${
            isMobile ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          } gap-8 justify-center`}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3}}
              className={`${
                isMobile ? (index === currentIndex ? "block" : "hidden") : "block"
              } relative bg-white bg-opacity-10 rounded-lg shadow-lg md:mb-10 p-8 w-[88%] md:w-80 text-white transition-all duration-300 hover:bg-opacity-20`}
              whileHover={{ scale: 1.05 }}
            >
              {/*! cicle icon */}

              <div className="absolute -top-8 flex items-center justify-center bg-cyan-500 text-2xl text-white rounded-full w-16 h-16 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
