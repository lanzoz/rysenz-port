'use client'

import PF from '../../public/pfp.png';
import Image from "next/image";

export default function App(){
    return (
        <>
            <Image 
            src={PF}
            alt="Profile" 
            width={800}
            height={800}
            className="self-center"
            />
        </>
    )
}