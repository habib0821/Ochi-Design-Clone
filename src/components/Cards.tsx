import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen flex gap-5 px-32'>
            <div className="cardcontainer w-1/2 h-[50vh]">
                <div className="card relative flex justify-center items-center rounded-xl w-full h-full bg-[#004D43]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2019-2022</button>
                </div>
            </div>
            <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
                <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />    
                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2019</button>
                </div>
                <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2'>&copy;2019</button>
                </div>

            </div>
        </div>
    )
}

export default Cards
