import Image from 'next/image';
import React from 'react';
import myProjects from '../content/myProjects';

import eye from '../public/project_links/eye.svg';
import github from '../public/project_links/github-alt.svg';

function Projects() {
  return (
    <section id='projects' className='flex flex-col justify-center items-center min-h-screen text-black font-poppins'>
  <div className='p-6 md:p-10 lg:p-16 flex flex-col justify-around h-auto items-center md:px-12 lg:px-24 xl:px-32 2xl:px-48'>
    {/* Title */}
    <div className='flex flex-col items-center mt-10 mb-8 md:mb-10'>
      <p className='text-3xl md:text-4xl font-semibold'>Projetos</p>
      <p className='text-portfolio-gray text-sm md:text-base'>Meus trabalhos mais recentes</p>
    </div>
    <div className='flex flex-col md:flex-row items-center lg:justify-evenly lg:items-center lg:h-auto lg:max-w-screen-lg xl:max-w-6xl m-auto'>
      {/* Projects */}
      <div className='flex flex-wrap justify-center md:justify-evenly'>
        {myProjects.map((item) => {
          return (
            <div key={item.name} className='flex flex-col items-start bg-white rounded-lg border-2 m-3 w-72 md:w-80 lg:w-96 xl:w-80 mx-4 md:mx-8 lg:mx-12'>
              {/* Foto */}
              <div className='flex justify-end w-full p-2 md:p-3'>
                <div className='absolute z-10 bg-green-500 p-1 text-white rounded-sm mt-1 mr-1 text-xs md:text-sm cursor-default'>{item.knowledgeArea}</div>
                {/* Visualização e Github */}
                <div className='flex items-center absolute z-10 mt-36 md:mt-40 lg:mt-32 xl:mt-40 mr-1'>
                  <a href={item.vercelLink} target='_blank' rel="noreferrer"
                  className='flex p-1 bg-gray-700 rounded-sm opacity-80'>
                    <Image src={eye} alt='eye' className='opacity-70 hover:opacity-100 w-4 md:w-5'/>
                  </a>
                  <a href={item.githubLink} target='_blank' rel="noreferrer" className='flex p-1 ml-1 bg-gray-700 rounded-sm opacity-80'>
                    <Image src={github} alt='github' className='opacity-70 hover:opacity-100 w-4 md:w-5 '/>
                  </a>
                </div>
                <Image src={item.thumbnail} className='object-cover rounded' alt='thumbnail'/>
              </div>
              <div className='px-3 md:px-4 pb-3 md:pb-4'>
                <div className='font-medium text-base md:text-xl mb-1'>
                  {item.name}
                </div>
                <div className='text-sm md:text-base text-portfolio-gray'>{item.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </div>
</section>
  )
}

export default Projects
