import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
    let cards = [useAnimation(), useAnimation()]

    let hoverHandler = (index) => {
        cards[index].start({ y: "0" })
    }
    let hoverHandlerEnd = (index) => {
        cards[index].start({ y: "100%" })
    }

    return (
        <div className='w-full py-20'>
            <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-20">
                <h1 className='text-8xl font-["Nueu Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex mt-10 gap-10">
                    <motion.div onHoverStart={()=>
                        hoverHandler(0)
                    } onHoverEnd={()=>
                        hoverHandlerEnd(0)
                    } className="cardContainer relative w-1/2 h-[75vh] ">
                        <h1 className='card absolute flex overflow-hidden text-[#CDEA68] z-[9] text-6xl leading-none left-full top-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter'>
                            {"FYDE".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }} animate={cards[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.01 }} className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                        <div className="card w-full rounded-xl overflow-hidden h-full ">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>hoverHandler(1)} onHoverEnd={()=>hoverHandlerEnd(1)} className="cardContainer relative w-1/2 h-[75vh]  ">
                        <h1 className='card absolute flex overflow-hidden text-[#CDEA68] z-[9] text-6xl leading-none right-full top-1/2 translate-x-1/2 -translate-y-1/2 tracking-tighter'>
                            {"VISE".split("").map((item, index) => (
                                <motion.span initial={{ y: "100%" }} animate={cards[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.01 }} className='inline-block'>{item}</motion.span>
                            ))}
                        </h1>
                        <div className="card w-full rounded-xl overflow-hidden h-full ">
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Featured
