import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const landingPage = () => {
  motion
  return (
    <div data-scroll data-section data-scroll-speed="-.6" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index == 1 && (<motion.div
                initial={{width: 0}}
                animate={{width:"9vw"}}
                transition={{ease: [0.76, 0, 0.24, 1], duration:1}}
                 className='mr-[1vw] rounded-md w-[9vw] h-[5vw] bg-red-500 relative -top-[0.1vw]'></motion.div>)}
                <h1 className="uppercase tracking-tighter font-bold leading-[6vw] text-[7.5vw] font-['Founders Grotesk']">{item}</h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-zinc-800 mt-20 py-5 px-20">
        {["For public and private companies", "From the first pitch to IPO",].map((item, index) => (
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className='px-5 flex items-center py-2 gap-5 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>start the project
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
              <span className='rotate-45'><FaArrowUpLong /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landingPage
