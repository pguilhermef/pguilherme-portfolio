import Image from 'next/image';
import React from 'react';
import myProjects from '../content/myProjects';
import eye from '../public/project_links/eye.svg';
import github from '../public/project_links/github-alt.svg';

function Projects() {
  return (
    <section id='projects' className='flex flex-col justify-center items-center min-h-screen text-black font-poppins'>
      <div className='px-6 md:px-10 lg:p-16 flex flex-col justify-around h-auto items-center lg:px-24 xl:px-32 2xl:px-48'>
        {/* Title */}
        <div className='flex flex-col items-center mb-8 md:mb-10'>
          <p className='text-3xl md:text-4xl font-semibold'>Projetos</p>
          <p className='text-portfolio-gray text-sm md:text-base'>Meus trabalhos mais recentes</p>
        </div>
        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
          {myProjects.map((item) => (
            <div key={item.name} className='flex flex-col items-start bg-white rounded-lg border-2 max-w-sm lg:max-w-md p-4'>
              <div className='flex justify-end p-2 md:p-3 relative'>
                <div className='flex items-end absolute z-10 mr-2 bottom-5'>
                  <a href={item.vercelLink} target='_blank' rel="noreferrer" className='flex p-1 bg-gray-700 rounded-sm opacity-80'>
                    <Image src={eye} alt='eye' className='opacity-70 hover:opacity-100 w-4 md:w-5' />
                  </a>
                </div>
                <Image src={item.thumbnail} className='object-cover rounded' alt='thumbnail' />
              </div>
              <div className='px-3 md:px-4 pb-3 md:pb-4'>
                <div className='font-medium text-base md:text-xl mb-1'>
                  {item.name}
                </div>
                <div className='text-sm md:text-base text-portfolio-gray text-justify'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
