import Image from 'next/image';
import React from 'react';

import eye from '../public/project_links/eye.svg'
import github from '../public/project_links/github-alt.svg'

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
    githubLink: 'https://github.com/pguilhermef',
    vercelLink: 'https://linkedin.com/in/pguilhermef'
  },
  {
    name: 'Projeto 2',
    description: 'Descrição a caminho',
    technologies: 'Next.js, React, Tailwind.css, Javascript',
    thumbnail: project2,
    knowledgeArea: 'Back-end',
    githubLink: 'https://github.com/pguilhermef',
    vercelLink: 'https://github.com/pguilhermef'
  },
  {
    name: 'Projeto 3',
    description: 'Descrição logo já',
    technologies: 'HTML, CSS, Javascript, React, LocalStorage',
    thumbnail: project3,
    knowledgeArea: 'Front-end',
    githubLink: 'https://github.com/pguilhermef',
    vercelLink: 'https://github.com/pguilhermef'
  },
  {
    name: 'Projeto 4',
    description: 'Descrição em logística aduaneira Curitiba-PR',
    technologies: 'Next.js, React, Tailwind.css, Javascript',
    thumbnail: project4,
    knowledgeArea: 'Full-Stack',
    githubLink: 'https://github.com/pguilhermef',
    vercelLink: 'https://github.com/pguilhermef'
  },
]

function Projects() {
  return (
    <section id='projects' className='flex flex-col justify-center items-center min-h-screen text-black font-poppins'>
      <div className='p-16 flex flex-col justify-around h-auto items-center px-7 lg:w-full lg:justify-center'>
        {/* Title */}
        <div className='flex flex-col items-center mb-10'>
          <p className='text-4xl font-semibold'>Projetos</p>
          <p className='text-portfolio-gray'>Meus trabalhos mais recentes</p>
        </div>
        <div className='flex items-center lg:justify-evenly lg:items-center lg:h-auto lg:max-w-screen-lg xl:max-w-6xl m-auto'>
          {/* Projects */}
            <div className='flex flex-wrap justify-evenly '>
              {myProjects.map((item) => {
                return (
                  <div key={item.name} className='flex flex-col items-start bg-white rounded-lg border-2 m-3 w-80 mx-12'>
                    {/* Foto */}
                    <div className='flex justify-end w-full p-3'>
                      <div
                      className='absolute z-10 bg-green-500 p-1 text-white rounded-sm mt-1 mr-1'>{item.knowledgeArea}</div>
                      {/* Visualização e Github */}
                        <a
                          href={item.vercelLink}
                          target='_blank'
                          rel="noreferrer"
                          className='flex absolute z-10 bg-gray-700 p-1 rounded-sm mt-40 mr-10 '>
                            <Image src={eye} alt='eye' className='opacity-60 hover:opacity-100'/>
                        </a>
                        <a
                          href={item.githubLink}
                          target='_blank'
                          rel="noreferrer"
                          className='flex absolute z-10 bg-gray-700 p-1 rounded-sm mt-40 mr-1 '>
                            <Image src={github} alt='github' className='opacity-60 hover:opacity-100'/>
                        </a>
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
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
