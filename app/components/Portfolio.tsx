"use client";

import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import Head from "next/head";


export default function PortfolioShell({ children }: { children: ReactNode }) {
  const [noise, setNoise] = useState("");


  useEffect(() => {
    const chars = "█▓▒░ ";
    const interval = setInterval(() => {
      let art = "";
      for (let i = 0; i < 120; i++) {
        for (let j = 0; j < 20; j++) {
          art += chars[Math.floor(Math.random() * chars.length)];
        }
        art += "\n";
      }
      setNoise(art);
    }, 120);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <Head>
        <title>Natalya Iskanderova frontend</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="artsy dev portfolio" />
      </Head>

      <main className=" text-[#e2e2e2] min-h-screen font-mono p-20 relative overflow-hidden">
        {/* background noise */}
        <pre className="absolute w-full top-100 left-0 right-0 text-[#1a1a1a] text-[10px] leading-[10px] pointer-events-none select-none">
          {noise}
        </pre>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          {children}
        </motion.div>
      </main>
    </>
  );
}
