'use client'
import Image from "next/image";
import BANNER from '../public/banner.png';
import { motion } from "motion/react";
import CARD from './components/gui_cards';
import MODELS from './components/models_cards';
import COMMENTS from './components/comment';
import AM from './components/aboutme';
import PFP from '../public/pfp_2.png';
import CODES from './components/code_cards';
import "./globals.css"

export default function Home() {

  return (
    <>
      <motion.div
        animate={{translateY: [20,0], opacity:[0,1]}}
        transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.8]
        }}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-[32px] row-start-2 items-center w-full justify-center">
            <div id="main_card" className=" w-full h-fit rounded-md overflow-hidden flex gap-10 flex-col content-center text-center items-center not-sm:p-4">
              <Image src={BANNER} alt="Banner" className=" blur-sm not-sm:hidden"/>
              <div className="flex flex-col not-sm:flex-col text-center sm:absolute items-center gap-10">
                <div id="pfp" className="bg-[#3a3a3a] not-sm:hidden sm:w-30 sm:h-30 lg:w-50 lg:h-50 absolute sm:-top-20 lg:-top-20 2xl:-top-14 2xl:h-66 2xl:w-66  content-center overflow-hidden rounded-full border-double border-8 border-[#242424]">
                  <Image 
                    src={PFP}
                    alt="Profile" 
                    width={1000}
                    height={1000}
                    className="top-96 border-transparent w-full"
                  />
                  
                </div>
                <Image 
                    src={PFP}
                    alt="Profile" 
                    width={200}
                    height={200}
                    className="top-96 border-transparent sm:hidden rounded-full"
                  />
                <div className="not-sm:text-center sm:content-center sm:items-center sm:absolute sm:top-12 sm:w-2xl lg:top-34 2xl:top-56" id="text-top">
                  <h1 className=" not-sm:text-sm font-bold lg:text-4xl sm:text-sm">Welcome Everyone; I'm Rise</h1>
                  <p className=" not-sm:text-sm lg:">I'm Pixelartist/Developer/CEO At Rysenz Studio</p>
                </div>
              </div>
            </div>
            <AM/>
            <CARD/>
            <MODELS/>
            <CODES />
            <COMMENTS />
            <footer className=" bottom-5 z-40">Also this website made by me too - Rise</footer>
          </main>
        </div>
      </motion.div>
    </>
  );
}