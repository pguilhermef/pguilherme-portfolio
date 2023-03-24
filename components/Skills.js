import Image from 'next/image';
import React from 'react';

import medal from '../public/award.svg'

const mySkills = [
  {
    name: 'Front-end',
    technologies: [
      'HTML',
      'React.js',
      'CSS',
      'Next.js',
      'Javascript',
      'Redux',
      'Jest',
      'Tailwind',
    ] 
  },
  {
    name: 'Back-end',
    technologies: [
      'Node.js',
      'Python',
      'MongoDB',
      'MySQL',
      'Typescript',
      'POO',
      'Docker',
      'API Restful',
    ] 
  },
  {
    name: 'Extras',
    technologies: [
      'Linux',
      'Git',
      'Kanban',
      'Scrum',
      'CI/CD',
      'JWT',
      'SOLID',
      'TDD',
    ] 
  },
]

function Skills() {
  return (
    <section id='skills' className='flex flex-col justify-center items-center min-h-[70vh] text-black font-poppins cursor-default'>
        <div className='flex flex-col h-auto items-center lg:w-full min-h-[60vh]'>
          {/* Title */}
          <div className='flex flex-col items-center'>
            <p className='text-4xl font-semibold'>Habilidades</p>
          </div>
          <div className='flex items-center lg:justify-evenly lg:items-center lg:h-auto lg:max-w-screen-lg xl:max-w-screen-xl m-auto'>
            {/* Skills */}
              <div className='flex flex-wrap justify-evenly 2xl:justify-between '>
                {mySkills.map((item) => {
                  return (
                    <div key={item.name} className='flex flex-col items-center justify-center bg-white rounded-lg border-2 w-80 m-3 sm:w-60 lg:w-80'>
                      <div className='flex flex-col justify-evenly items-center'>
                        <div className='font-semibold text-xl mt-5'>
                          {item.name}
                        </div>
                        <div className='flex flex-wrap justify-evenly mt-5'>
                          {item.technologies.map((tech) => (
                          <div key={tech} className='w-28 lg:mx-4 my-2 flex items-start'>
                            <div className='mr-1'>
                              <Image src={medal} alt='medal' />
                            </div>
                            <div className='text-portfolio-gray'>
                              {tech}
                            </div>
                          </div>
                          ))}
                        </div>
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

export default Skills
