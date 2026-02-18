'use client'
import { FaAngleDown } from "react-icons/fa";
import { motion } from "motion/react";
import { useState } from "react";
import "../globals.css"
import { FaBluesky, FaDiscord, FaGithub  } from "react-icons/fa6";
import { GiAnvilImpact } from "react-icons/gi";

export default function App() {
    const [isMenu, setShow] = useState(false);
    const changeShow = () => {
    setShow(prevShow => {
            if (prevShow === true) {
                return false;
            }
            return true;
        });
    };
    return (
        <div className=" bg-[#00000049] z-50 flex flex-row fixed top-0 left-0 w-full p-5 text-center shadow-2xl items-center content-center justify-end gap-8">
            <a className=" text-4xl" href="https://github.com/lanzoz"><FaGithub /></a>
            <a className=" text-4xl"><FaBluesky /></a>
            <a className=" text-4xl" href="https://discord.com/invite/qvVurNUAZu" target="_blank"><FaDiscord /></a>
            {/*<a className=" flex flex-row text-center items-center text-2xl" onClick={changeShow}>Contact
                <motion.div
                    animate={{
                        translateY: [0,5,0,5,0]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                >
                    <FaAngleDown/>
                </motion.div>
            </a>
            {isMenu && (
            <div id="card" className="absolute top-20">
                <motion.div
                id="main_menu"
                initial={{ y: 0, opacity:0 }}
                animate={{ 
                    y: 5, 
                    opacity: 1
                }}
                exit={{ y: 0,opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 120 }}
              >
                <div className=" rounded-md bg-[#3a3a3a] p-2 w-fit h-fit shadow-2xl flex flex-col items-center text-start gap-2 font-bold border-2 border-[#ff3939]">
                    <p>You can found & talk to me here</p>
                    <div className=" bg-[#464646] w-full h-0.5"/>
                    <div className=" flex flex-row items-center gap-2">
                    <FaDiscord /><a href="https://discord.gg/35ByVCm5ah" target="blank"> Discord</a>
                    <GiAnvilImpact /><a href="https://mcmodels.net/vendors/3/rysenz" target="blank"> MCmodel</a>
                    <FaBluesky /><a href="https://bsky.app/profile/rysenz.bsky.social" target="blank"> BlueSky</a>
                    </div>
                    
                </div>
              </motion.div>
            </div>
            )}*/}
        </div>
    )
}