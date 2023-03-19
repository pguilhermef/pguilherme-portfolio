import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import myPhoto from '../public/pguilherme.jpeg';

function Homepage() {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <section id='home' className='flex flex-col justify-start items-center w-full text-black text-center font-poppins' ref={ref}>
      <div className='flex flex-col justify-start items-center sm:w-3/4 px-6 h-screen'>
        {/* Photo */}
        <div className='w-64 mt-32'>
          <div className='border-8 rounded-full black-and-white'>
            <Image src={myPhoto} alt="Guilherme's photo" className='rounded-full'/>
          </div>
        </div>
        {/* Infos */}
        <div className='flex flex-col h-2/6 w-full'>
          <div className='flex mt-14'>
            <p className='text-4xl font-semibold'>Paulo Guilherme</p>
          </div>
          <div className='flex mt-1 text-gray-700'>
            <span>Desenvolvedor Web Fullstack</span>
          </div>
          <div className='flex flex-col mt-5 text-gray-700 max-w-md'>
            <div className="text-left break-words flex justify-start">
              <span>Sou um desenvolvedor fullstack apaixonado por tecnologia e sempre em busca de novos desafios. Estou sempre buscando aprender novas ferramentas e aprimorar minhas habilidades para criar soluções e ajudar as pessoas através da tecnologia.</span>
            </div>
          </div>
        </div>
        {/* Mouse */}
        <div className={`flex justify-center mt-12 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <div className='w-14'>
            <svg className='animate-bounce' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#000000" d="M12,6a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0-4A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9A5,5,0,0,1,17,9Z"/>
            </svg>
          </div>
          <span className='ml-3 mt-1 font-medium'>Role para baixo</span>
        </div>
      </div>
    </section>
  )
}

export default Homepage
