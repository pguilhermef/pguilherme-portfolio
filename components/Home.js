import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import myPhoto from '../public/pguilherme.jpeg';

function Homepage() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section id='home' className='flex flex-col items-center justify-end h-screen text-black font-poppins' ref={ref}>
      <div className='flex flex-col justify-end h-auto items-center lg:w-full lg:justify-center'>
      
<div className='flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-start lg:h-auto lg:w-5/6 lg:mb-10 lg:max-w-screen-2xl'>
  {/* Photo */}
  <div className='w-64 lg:w-72 flex justify-center'>
    <div className='flex justify-center border-solid border-8 border-black rounded-full black-and-white'>
      <Image src={myPhoto} alt="Foto de Paulo Guilherme, desenvolvedor Web Fullstack" className='rounded-full'/>
    </div>
  </div>

  {/* Infos */}
  <div className='flex flex-col mt-5 lg:mt-0 lg:text-lg'>
    <div className='flex'>
      <p className='text-4xl font-semibold'>Paulo Guilherme</p>
    </div>
    <div className='flex mt-1 text-gray-700'>
      <span>Desenvolvedor Web Fullstack</span>
    </div>
    <div className='flex flex-col mt-5 text-gray-700 max-w-md'>
  <p className="text-left break-words flex justify-start">
    Sou apaixonado por tecnologia e sempre em busca de novos desafios. Estou sempre buscando aprender novas ferramentas e aprimorar minhas habilidades para criar soluções e ajudar as pessoas através da tecnologia.
  </p>
</div>
  </div>
      </div>
        </div>

        
        {/* Mouse */}
        <div className={`flex justify-center mb-12 mt-8 lg:my-24 ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <div className='w-14'>
            <svg className='animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#000000" d="M12,6a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0-4A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9A5,5,0,0,1,17,9Z"/>
            </svg>
          </div>
          <span className='ml-3 mt-1 font-medium'>Role para baixo</span>
        </div>
    </section>
  )
}

export default Homepage
