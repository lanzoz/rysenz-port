'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import "../globals.css"
export default function App() {
    const [images, setImages] = useState([]);
  
  useEffect(() => {
    fetch('/api/codes')
      .then(res => res.json())
      .then(data => setImages(data.images))
      .catch(err => console.error('Error loading images:', err));
  }, []);
    return (
        <div className="flex flex-col bg-[#3a3a3a] w-full h-fit p-5 text-center gap-5 z-10">
            <h1 className=" not-sm:text-[1.2rem] sm:text-[2.5rem] font-bold">Code</h1>
            <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center rounded-md not-sm:gap-1 gap-4 content-center text-center items-center">
              {images.length > 0 ? (
                images.map((imageName, index) => (
                  <motion.div 
                    key={index} 
                    className="shadow-2xl bg-[#252525] hover:border-2 hover:border-[#ff3939] flex rounded-md not-sm:w-[8rem] not-sm:h-[8rem] sm:w-[17rem] sm:h-[17rem] lg:w-[22rem] 2xl:w-[25rem] 2xl:h-[25rem] overflow-hidden p-1 sm:p-5"
                    whileInView={{translateY: [20,0], opacity:[0,1]}}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        times: [0, 1]
                    }}
                  >
                    <Image 
                      src={`/portfolio/code/${imageName}`} 
                      alt={`Portfolio image ${index + 1}`} 
                      width={1000} 
                      height={1000}
                      className="object-cover rounded-md hover:scale-150 hover:transition-all duration-500"
                    />
                  </motion.div>
                ))
              ) : (
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="shadow-2xl p-2 bg-[#252525] rounded-md w-full h-full flex items-center justify-center">
                    <div className="text-gray-400">...</div>
                  </div>
                ))
              )}
          </div>
        </div>
    )
}