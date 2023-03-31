import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/hero.jpg'

const Hero = () => {
  return (
    
    <div name='home' className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
               
                <h4 className='py-3 text-2xl md:text-2xl font-bold'>India's Only Platform to help you find opportunities!</h4>
                <p className='text-1xl'>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
                <h5 className='py-3 text-1xl md:text-7xl text-'>Education for All</h5>
                
                <button className='py-3 px-6 sm:w-[60%] my-4 text-xl'><a href='/listing'>Find your calling</a></button>
            </div>
            <div>
                <img className='container px-32 py-8' src={bgImg} alt="/" />
            </div>
             
            
        </div>
    </div>
  )
}

export default Hero