'use client'

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import COMMENTS from './components/comment';
import PFP from './components/pfp';
import CERT from './components/cert';

export default function Home() {
  const fullText = "Puttiphong Sripanphing";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 250;

  useEffect(() => {
    const handleType = () => {
      const shouldDelete = isDeleting;
      setDisplayText(
        shouldDelete 
          ? fullText.substring(0, displayText.length - 1) 
          : fullText.substring(0, displayText.length + 1)
      );

      if (!shouldDelete && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      else if (shouldDelete && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);
  return (
    <motion.div
      initial={{ translateY: 20, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="flex flex-col p-8 md:p-32 items-center min-h-screen ">
        <main className="h-full flex flex-col items-center w-full">
          <div className="flex flex-col-reverse lg:flex-row w-full justify-center items-center gap-10">
            <div className="flex flex-col gap-5 flex-1">
              <h2 className="text-3xl font-medium text-gray-300">Hello I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold min-h-[70px]">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1 w-1 h-10 md:h-12 bg-lime-400"
                />
              </h1>

              <p className="text-gray-400 text-lg">
                I'm a Java Developer / Pixelartist / Blockbench Modeler
              </p>

              <a 
                className="bg-[#ce53ff3d] hover:bg-[#ce53ff60] transition-colors rounded-md border border-[#ce53ff7a] w-fit px-6 py-2" 
                href="https://discord.com/invite/qvVurNUAZu" 
                target="_blank"
              >
                Let's talk with me
              </a>
              <div className="flex flex-wrap gap-8 mt-10">
                <StatBox number="3" label="Pixelart/Model" />
                <StatBox number="2" label="Minecraft/Java" />
                <StatBox number="1" label="Web Development" />
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <PFP />
            </div>
          </div>
          <div className="w-full mt-20">
            <CERT />
          </div>
          <div className="w-full mt-20">
            <COMMENTS />
          </div>
        </main>
      </div>
    </motion.div>
  );
}
function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl font-extrabold">{number} Years <span className="text-lime-400">+</span></h3>
      <p className="text-sm text-gray-400">{label} <span className="text-lime-400 font-bold">Experience</span></p>
    </div>
  );
}