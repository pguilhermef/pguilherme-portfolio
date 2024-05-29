import Image from 'next/image';
import React from 'react';

import eye from '../public/project_links/eye.svg';
import github from '../public/project_links/github-alt.svg';

import project1 from '../public/projects_thumb/1.png';
import project2 from '../public/projects_thumb/2.png';
import project3 from '../public/projects_thumb/3.png';
import project4 from '../public/projects_thumb/4.png';

const myProjects = [
  {
    name: 'Go Pizza - Landing Page',
    description: 'Uma Landing Page criada para atrair potenciais franqueados para uma rede de pizzarias. Foquei em oferecer uma apresentação visualmente atraente dos produtos e informações sobre as vantagens de se tornar um franqueado.',
    technologies: 'React, Tailwind',
    thumbnail: project1,
    knowledgeArea: 'Front-end',
    githubLink: 'https://github.com/pguilhermef/go2pizza',
    vercelLink: 'https://www.mbebfranquias.com.br/'
  },
  {
    name: 'Star Wars - Filtro de Planetas',
    description: 'Simples site criado para estudar sobre o consumo de apis e criação de filtros. Esse foi um dos meus primeiros projetos. Com o conhecimento que tenho hoje tenho muitos planos de melhorias para esse site. Você pode encontrar esses planos no README do github.',
    technologies: 'HTML, CSS, Javascript',
    thumbnail: project2,
    knowledgeArea: 'Front-end',
    githubLink: 'https://github.com/pguilhermef/starwars-planets-filter',
    vercelLink: 'https://starwars-planets-filter.vercel.app/'
  },
  {
    name: 'Higmaster - Landing Page',
    description: 'Landing Page criada para uma empresa local para atrair novos clientes de maneira mais profissional e dinâmica. Design simples e direto com botões que levam diretamente ao contato da empresa.',
    technologies: 'HTML, CSS, Javascript, React',
    thumbnail: project3,
    knowledgeArea: 'Front-end',
    githubLink: 'https://github.com/pguilhermef/higmaster',
    vercelLink: 'https://higmaster.vercel.app/'
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
                <div className='absolute z-10 bg-green-500 p-1 text-white rounded-sm mt-1 mr-1 text-xs md:text-sm'>{item.knowledgeArea}</div>
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
