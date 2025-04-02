import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import gsap from "gsap";

const PortfolioHeader = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: () => Math.random() * 1.5 + 0.5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-screen text-white font-mono overflow-hidden px-4 sm:px-6">
      {/* Top Left Info */}
      <div className="absolute top-5 left-5 text-xs leading-tight max-w-[90vw] sm:max-w-sm md:max-w-md">
        <p>NATALYA ISKANDEROVA</p>
        <p>FRONTEND DEVELOPER </p>
        <p> [ DE: Berlin ] </p>
        <p>[ FinTech, E-commerce, Web3, AI ] </p>
        <p className='mt-4'>
          I build thoughtful frontends - digital surfaces that breathe, respond, and scale.<br />
          Progressive by nature, precise by principle.<br />
          Experimental when needed, grounded in best practices.<br />
          8+ years across FinTech, e-commerce, enterprise.<br />
        </p>
      </div>

      {/* Top Right Status */}
      <div className="absolute top-5 right-5 text-xs flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <p>OPEN TO NEW PROJECTS</p>
      </div>

      {/* Center Visual — Glowing Eye */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div
          ref={glowRef}
          className="w-[280px] h-[280px] rounded-full bg-purple-700 opacity-30 blur-3xl"
        ></div>
      </div>

      {/* Bottom Left Work Preview */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-xs hidden sm:block">
        <p className="mb-2">SIDE ACTIVITIES</p>
        <Link href="/projects/side" passHref>
          <div
            className="w-60 h-48 rounded-md flex items-end justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/laptop.jpg')" }}
          >
            <span className="text-[25px]">WEB3/AI</span>
          </div>
        </Link>
      </div>

      {/* Left Text */}
      <div className="absolute bottom-5 left-5 text-xs hidden sm:block">
        <p>CREATING DIGITAL</p>
        <p>EXPERIENCES </p>
        <p>WITH NEXTJS / REACT</p>
      </div>

      {/* Bottom right Work Preview */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-xs hidden sm:block">
        <p className="mb-2">RECENT WORK</p>
        <Link href="/projects/main" passHref>
          <div
            className="w-60 h-58 rounded-md flex items-end justify-center pb-8 bg-cover bg-center"
            style={{ backgroundImage: "url('/past_projects.png')" }}
          >
            <span className="text-[25px]">EXPERIENCE</span>
          </div>
        </Link>
      </div>

      {/* Bottom Right Nav Circle (Desktop) */}
      <div className="absolute bottom-5 right-5 flex-col items-center gap-2 hidden sm:flex">
        <div className="relative w-38 h-38 border border-white rounded-full flex items-center justify-center text-[10px]">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1 left-1/2 -translate-x-1/2"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1 -translate-y-1/2"
          >
            GITHUB
          </a>
          <a
            href="https://t.me/georgianVirgin"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1 left-1/2 -translate-x-1/2"
          >
            TELEGRAM
          </a>
          <a
            href="https://discordapp.com/users/zealous_piglet_15528"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 right-1 -translate-y-1/2"
          >
            DISCORD
          </a>
          <span className="w-1 h-1 bg-white rounded-full"></span>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex sm:hidden gap-4 text-xs text-white">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a href="https://t.me/georgianVirgin" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
        <a href="https://discordapp.com/users/zealous_piglet_15528" target="_blank" rel="noopener noreferrer">DISCORD</a>
      </div>
    </div>
  );
};

export default PortfolioHeader;
