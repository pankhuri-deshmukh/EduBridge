import React from 'react';

import bgImg from '../assets/hero.jpg'

function About() {
  return (
    <div name='home' className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
      <h1 className='py-3 text-2xl md:text-2xl font-bold'>About Us</h1>
      <p>Our platform aims to provide underprivileged individuals with access to free education opportunities. We believe that education is a fundamental right, and we are committed to breaking down the barriers that prevent individuals from accessing it.</p>
      <p>Our platform offers a comprehensive database of free education initiatives and resources, as well as guidance and support throughout the application process. We work with local organizations to promote our platform and provide additional resources and support to those who need it most.</p>
      <p>Thank you for supporting our mission to make education accessible to all.</p>
    </div>
    <div>
                <img className='container px-32 py-8' src={bgImg} alt="/" />
            </div>
    </div>
    </div>
     
  );
}

export default About;
