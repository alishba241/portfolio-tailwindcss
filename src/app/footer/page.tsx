import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-cyan-950 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4 border-t border-gray-700 pt-4">
        {/* Copyright Info */}
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-cyan-400">Alishba Naveed</span>.
          All rights reserved.
        </p>

        {/*! social links */}

        <div className="flex space-x-6">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={23}
              className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={23}
              className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            />
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter
              size={23}
              className="hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
