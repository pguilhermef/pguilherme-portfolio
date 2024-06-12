import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import myPhoto from '../public/pguilherme.jpeg';
import github_logo from '../public/svg_links/github_logo.svg'
import instagram_logo from '../public/svg_links/instagram_logo.svg'
import linkedin_logo from '../public/svg_links/linkedin_logo.svg'

const myInfo = {
  name: 'Paulo Guilherme',
  profession: 'Desenvolvedor Web Front-End',
  photo: myPhoto,
  passions: 'Sou apaixonado por tecnologia e estou sempre em busca de novos desafios. Estou sempre buscando aprender novas ferramentas e aprimorar minhas habilidades para criar soluções e ajudar as pessoas através da tecnologia.',
}

const links = [
  {
    src: github_logo,
    alt: '/',
    href: 'https://github.com/pguilhermef'
  },
  // {
  //   src: instagram_logo,
  //   alt: '/projects',
  //   href: 'https://instagram.com/pege.dev'
  // },
  {
    src: linkedin_logo,
    alt: '/wallpapers',
    href: 'https://linkedin.com/in/pguilhermef'
  },
]

function Homepage() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
  <section id='home' className='flex flex-col items-center justify-center h-screen text-black font-poppins lg:mt-5 lg:mb-10' ref={ref}>
  <div className='flex flex-col justify-around items-center w-full max-w-7xl lg:h-4/6 mt-20 lg:mt-5'>
    <div className='flex flex-col h-auto items-center lg:px-7 lg:w-full lg:flex-row lg:justify-evenly lg:items-start lg:h-auto '>
      {/* Redes sociais */}
      <div className='p-2 max-w-lg lg:w-80 flex justify-center mb-5'>
        <div className='flex flex-col items-center justify-center mr-2 lg:w-2/4'>
          {links.map((item) => (
            <a key={item.alt} href={item.href} target='blank'>
              <Image src={item.src} alt={item.alt} />
            </a>
          ))}
        </div>
        {/* Foto */}
        <div className='flex justify-center border-solid border-8 border-black rounded-full black-and-white w-56 lg:w-auto'>
          <Image src={myInfo.photo} alt={`Foto de ${myInfo.name}, ${myInfo.profession}`} className='rounded-full' />
        </div>
      </div>
        {/* Infos */}
  <div className='flex flex-col lg:text-lg px-5'>
    <div className='flex'>
      <p className='text-4xl font-semibold'>{myInfo.name}</p>
    </div>
    <div className='flex mt-1 text-gray-700'>
      <span>{myInfo.profession}</span>
    </div>
    <div className='flex flex-col mt-5 text-gray-700 max-w-md'>
      <p className='text-left break-words flex justify-start'>{myInfo.passions}</p>
    </div>
  </div>
</div>
</div>
{/* Mouse */}

  <div className={`flex justify-center ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 p-2 my-4`}>
    <div className='w-14'>
      <svg className='animate-bounce' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path fill='#000000' d='M12,6a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0-4A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9A5,5,0,0,1,17,9Z' />
      </svg>
    </div>
    <span className='ml-3 mt-1 font-medium'>Role para baixo</span>
  </div>
</section>

  )
}

export default Homepage
