import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import myPhoto from '../public/pguilherme_2.jpeg';
import clock from '../public/about_me_infos/clock.svg';
import desktop from '../public/about_me_infos/desktop.svg';

const myInfo = {
  name: 'Paulo Guilherme',
  profession: 'Desenvolvedor Web Fullstack',
  infosInSquares: [
    {
      icon: clock,
      title: 'Experiência',
      content: '1 Ano',
    },
    {
      icon: desktop,
      title: 'Projetos',
      content: '20+',
    }
  ],
  photo: myPhoto,
}

const handleDownload = () => {
  return window.alert('O currículo está sendo reconstruído. Portanto, está indisponível no momento.')
};

function AboutMe() {
  return (
    <section id='about' class='flex flex-col justify-center items-center h-screen lg:h-[80vh] text-black font-poppins'>
  <div class='flex flex-col justify-evenly items-center w-full max-w-7xl h-[90vh] lg:h-8/12'>
    <div class='flex flex-col h-auto items-center lg:w-full lg:justify-center'>
      <div class='flex'>
        <p class='text-4xl font-semibold mt-2'>Sobre mim</p>
      </div>
      <div class='flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-center lg:h-auto lg:w-5/6 lg:mt-14 lg:mb-10 lg:max-w-screen-xl'>
        <div class='w-48 lg:w-72 mt-5 flex justify-center'>
          <div class='flex justify-center rounded-3xl black-and-white shadow-xl'>
            <Image src={myInfo.photo} alt={`Foto de ${myInfo.name}, ${myInfo.profession}`} class='rounded-2xl' />
          </div>
        </div>
        <div class='flex flex-col mt-5 lg:mt-0 lg:text-lg'>
          <div class='flex w-full justify-center px-5'>
            {myInfo.infosInSquares.map((item) => (
              <div key={item.title} class='flex flex-col w-full items-center bg-white rounded-lg border-2 px-2 py-1 mx-1 lg:py-3'>
                <Image src={item.icon} alt={`${item.title} icon`} />
                <div class='text-black font-medium'>{item.title}</div>
                <div class='text-filter font-medium text-portfolio-gray'>{item.content}</div>
              </div>
            ))}
          </div>
          <div class='flex flex-col mt-2 lg:mt-5 text-portfolio-gray max-w-md'>
            <p class='text-left break-words px-7'>
              Ao escrever códigos, meu lema é: <strong>Limpeza, otimização, melhoria contínua e persistência.</strong> As principais tecnologias que uso são o <strong>React.js</strong> e <strong>Node.js</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div onclick={handleDownload} class='flex justify-center items-center px-6 py-3 lg:mt-6 bg-gray-800 rounded-xl cursor-pointer hover:bg-gray-700 mt-5'>
      <span class='mt-1 font-medium text-white'>Baixar currículo</span>
      <div class='ml-2 w-8'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path fill="#FAFAFA" d="M20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.1,1.1,0,0,0,13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-4.71-4.71-.29.3V12a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2a1,1,0,0,0-1.42-1.42Z"/>
          </svg>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutMe
