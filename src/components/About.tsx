import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue Montreal"] text-5xl leading-[3.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className="w-full flex border-t-[1px] mt-20 pt-10 border-[#a1b562]">
        <div className="w-1/2">
        <h1 className="text-7xl">Our Approach:</h1>
        <button className='px-10 py-6 bg-zinc-900 flex items-center gap-4 rounded-full text-white mt-10'>Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
        </button>
        </div>
        <div className="w-1/2 h-[40vw] rounded-3xl bg-[#b0c859]"></div>
      </div>
    </div>
  )
}

export default About
