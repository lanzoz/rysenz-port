'use client'

import { motion } from 'framer-motion';
import C1 from '../../public/cert/cert1.png';
import C2 from '../../public/cert/cert2.png';
import C3 from '../../public/cert/cert3.png';
import C4 from '../../public/cert/cert4.png';
import Image from "next/image";

// 1. เบิ้ลรูปเป็น 3 ชุด (C1-C4, C1-C4, C1-C4)
const certs = [C1, C2, C3, C4];
const tripleCerts = [...certs, ...certs, ...certs]; 

export default function App() {
  return (
    <div className="relative w-full py-10 overflow-hidden bg-transparent">
      
      <div 
        className="relative flex"
        style={{
          // ปรับ Mask ให้กว้างขึ้นเพื่อให้เห็นรูปชัดๆ ตรงกลาง
          maskImage: 'linear-gradient(to right, transparent, black 0%, black 0%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 50%, black 50%, transparent)'
        }}
      >
        <motion.div 
          className="flex gap-10 flex-nowrap"
          animate={{
            // 2. เลื่อนไปแค่ -33.33% (ซึ่งคือระยะของ 1 ชุดพอดีจากทั้งหมด 3 ชุด)
            x: ["0%", "-33.33%"] 
          }}
          transition={{
            ease: "linear",
            duration: 15, // ปรับความเร็วตามชอบ
            repeat: Infinity,
          }}
        >
          {tripleCerts.map((cert, index) => (
            <div key={index} className="flex-shrink-0 w-[400px] md:w-[500px]"> 
              <Image 
                src={cert}
                alt={`Certificate-${index}`} 
                width={530}
                height={530}
                priority={index < 4} // โหลดรูปชุดแรกทันทีเพื่อความลื่นไหล
                className="rounded-xl shadow-2xl border border-white/5 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}