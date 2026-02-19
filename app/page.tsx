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
      {/* 1. แก้ Padding ตรงนี้: ลบ padding ด้านล่างออก เพื่อให้รูปชนขอบจอได้ */}
      <div className="flex flex-col pt-8 px-6 md:pt-20 md:px-16 lg:px-24 items-center min-h-screen">
        <main className="h-full flex flex-col items-center w-full">
          
          {/* 2. เปลี่ยน items-center เป็น lg:items-end เพื่อให้ของในจอกว้างตกลงไปชิดขอบล่าง */}
          <div className="flex flex-col-reverse lg:flex-row w-full min-h-[calc(100vh-5rem)] justify-between items-center lg:items-end gap-10 lg:gap-0">
            
            {/* 3. ฝั่งข้อความ: เพิ่ม lg:pb-32 หรือ lg:mb-32 เพื่อดันให้ข้อความยังลอยอยู่ตรงกลางจอ ไม่ตกไปข้างล่างตามรูป */}
            <div className="flex flex-col gap-5 flex-1 text-center lg:text-left items-center lg:items-start lg:mb-32 z-10">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300">Hello I'm</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold min-h-[80px] md:min-h-[70px] flex items-center flex-wrap justify-center lg:justify-start">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1 w-1 h-8 sm:h-10 md:h-12 bg-lime-400"
                />
              </h1>

              <p className="text-gray-400 text-base md:text-lg">
                I'm a Java Developer / Pixelartist / Blockbench Modeler
              </p>

              <a 
                className="bg-[#ce53ff3d] hover:bg-[#ce53ff60] transition-colors rounded-md border border-[#ce53ff7a] w-fit px-6 py-2 mt-2" 
                href="https://discord.com/invite/qvVurNUAZu" 
                target="_blank"
              >
                Let's talk with me
              </a>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mt-8 md:mt-10 w-full">
                <StatBox number="3" label="Pixelart/Model" />
                <StatBox number="8" label="Minecraft Java" />
                <StatBox number="1" label="Web Development" />
                <StatBox number="1" label="Java Development" />
              </div>
            </div>

            {/* 4. ฝั่งรูปภาพ: ปรับ w-[...] ให้ใหญ่ขึ้น และใช้ self-end เพื่อบังคับชิดล่าง */}
            <div className="w-full sm:w-3/4 lg:w-[50%] max-w-3xl flex justify-center lg:justify-end items-end self-end pointer-events-none">
              <PFP />
            </div>
            
          </div>

          <div className="w-full bg-[#00000038] text-center p-4 md:p-8 content-center items-center flex flex-col rounded-xl mt-10 lg:mt-0">
            {/* แก้ไข class not-sm ให้เป็น standard tailwind */}
            <h1 className="text-2xl sm:text-[2.5rem] font-bold text-lime-400 mb-4">
              Current Projects
            </h1>
            
            {/* ปรับให้โปรเจกต์เรียงแนวตั้งในมือถือ และแนวนอนในจอที่ใหญ่ขึ้น */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 p-5 w-full max-w-5xl">
              <h1 className="text-2xl md:text-4xl">HighGround</h1>
              <h1 className="text-2xl md:text-4xl">LocoChat</h1>
              <h1 className="text-2xl md:text-4xl">SoulBound</h1>
            </div>

            <h1 className="text-2xl sm:text-[2.5rem] font-bold text-lime-400 mt-10 mb-4">
              Certs
            </h1>
            <div className="w-full max-w-6xl overflow-x-auto">
              <CERT />
            </div>

            <div className="w-full max-w-6xl mt-10">
              <COMMENTS />
            </div>
          </div>
          
        </main>
      </div>
    </motion.div>
  );
}

function StatBox({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="text-2xl md:text-3xl font-extrabold">{number} Years <span className="text-lime-400">+</span></h3>
      <p className="text-xs md:text-sm text-gray-400 text-center lg:text-left">
        {label} <br className="block sm:hidden"/> 
        <span className="text-lime-400 font-bold">Experience</span>
      </p>
    </div>
  );
}