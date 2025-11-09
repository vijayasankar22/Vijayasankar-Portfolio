import React, { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const roles = [
  "Java Full Stack Developer",
  "Software Developer",
  "Android Developer",
  "Problem Solver",
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Typing animation logic
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1800);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((p) => (p + 1) % roles.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((p) => p + (reverse ? -1 : 1)),
      reverse ? 60 : 100
    );
    return () => clearTimeout(t);
  }, [subIndex, index, reverse]);

  // 🎯 Very slight parallax
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 60; // very soft motion
      const y = (window.innerHeight / 2 - e.clientY) / 60;
      setOffset({ x, y });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translate(${offset.x / 3}px, ${offset.y / 3}px)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Montserrat:wght@800&display=swap');

        .modern-font {
          font-family: 'Poppins','Montserrat',sans-serif;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #fff;
          /* 🩶 Porcelain 3D look */
          text-shadow:
            0 1px 0 #f8f8f8,
            0 2px 1px rgba(0,0,0,0.05),
            0 4px 2px rgba(0,0,0,0.04),
            0 8px 4px rgba(0,0,0,0.03),
            0 16px 8px rgba(0,0,0,0.02);
          transition: transform 0.25s ease, text-shadow 0.25s ease;
        }

        .modern-font:hover {
          transform: scale(1.02);
          text-shadow:
            0 1px 0 #ffffff,
            0 2px 1px rgba(255,255,255,0.4),
            0 6px 4px rgba(220,220,255,0.2),
            0 10px 6px rgba(180,180,255,0.15);
        }
        `}
      </style>

      {/* Content */}
      <div
        className="max-w-4xl z-10 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${offset.x * 0.4}px, ${offset.y * 0.4}px)`, // slight parallax depth
        }}
      >
        <h1 className="text-3xl md:text-4xl text-gray-300 mb-2 animate-fade-in-down">
          Hi, I'm
        </h1>

        {/* 🩶 Porcelain 3D Text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 modern-font">
          VIJAYASANKAR
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#e13b78] mb-8 animate-fade-in-up">
          {roles[index].substring(0, subIndex)}
          <span className="animate-pulse">|</span>
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a
            href="https://github.com/vijayasankar22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#d6044a] transition-transform duration-300 hover:scale-125"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/vijayasankarp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#d6044a] transition-transform duration-300 hover:scale-125"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:vijayasankar2225@gmail.com"
            className="text-gray-400 hover:text-[#d6044a] transition-transform duration-300 hover:scale-125"
          >
            <MailIcon />
          </a>
        </div>
      </div>

      {/* Scroll Arrow */}
      <a href="#about" className="absolute bottom-10 animate-bounce z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-[#e13b78]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
