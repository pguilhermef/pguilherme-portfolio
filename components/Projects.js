import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import project1 from '../public/projects_thumb/1.png'
import project2 from '../public/projects_thumb/2.png'
import project3 from '../public/projects_thumb/3.png'
import project4 from '../public/projects_thumb/4.png'

const myProjects = [
  {
    name: 'Projeto 1',
    description: 'Descrição em breve',
    technologies: 'HTML, CSS, Javascript',
    thumbnail: project1,
    knowledgeArea: 'Back-end',
    githubLink: 'https://github.com/pguilhermef'
  },
  {
    name: 'Projeto 2',
    description: 'Descrição a caminho',
    technologies: 'Next.js, React, Tailwind.css, Javascript',
    thumbnail: project2,
    knowledgeArea: 'Back-end',
    githubLink: 'https://github.com/pguilhermef'
  },
  {
    name: 'Projeto 3',
    description: 'Descrição logo já',
    technologies: 'HTML, CSS, Javascript, React, LocalStorage',
    thumbnail: project3,
    knowledgeArea: 'Front-end',
    githubLink: 'https://github.com/pguilhermef'
  },
  {
    name: 'Projeto 4',
    description: 'Descrição em logística aduaneira Curitiba-PR',
    technologies: 'Next.js, React, Tailwind.css, Javascript',
    thumbnail: project4,
    knowledgeArea: 'Full-Stack',
    githubLink: 'https://github.com/pguilhermef'
  },
]

function Projects() {
  return (
    <section id='projects' className='flex flex-col justify-center items-center min-h-screen text-black font-poppins'>
      <div className='p-16 flex flex-col justify-around h-auto items-center px-7 lg:w-full lg:justify-center'>
        <div className='flex flex-col items-center p-5'>
          <p className='text-4xl font-semibold'>Projetos</p>
          <p className='text-portfolio-gray'>Meus trabalhos mais recentes</p>
        </div>
        <div className='flex items-center lg:justify-evenly lg:items-center lg:h-auto w-full lg:max-w-screen-lg'>
          {/* Projects */}
            <div className='flex w-full flex-wrap justify-evenly'>
              {myProjects.map((item) => {
                return (
                  <Link key={item.name} href={item.githubLink}>
                    <a target='_blank'>
                      <div className='flex flex-col items-start bg-white rounded-lg border-2 m-3 w-80 sm:w-60 md:w-80 hover:cursor-pointer'>
                        <div className='flex justify-end w-full p-3'>
                          <div
                          className='absolute z-10 bg-green-500 p-1 text-white rounded-sm mt-1 mr-1'>{item.knowledgeArea}</div>
                          <Image src={item.thumbnail} className='object-fit rounded' alt='thumbnail'/>
                        </div>
                        <div className='px-4 pb-4'>
                          <div
                          className='font-medium text-xl mb-1'
                          >
                            {item.name}
                          </div>
                          <div className='text-sm text-portfolio-gray'>{item.description}</div>
                        </div>
                      </div>
                    </a>
                  </Link> 
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
