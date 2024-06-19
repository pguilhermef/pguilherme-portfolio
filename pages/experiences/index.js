import Link from 'next/link'
import React from 'react'
import { ExperienceCard } from '../../components/ExperienceCard'
import myExperiences from '../../content/myExperiences'

function experiencesPage() {
  return (
    <div className='text-black'>
      <div id='experiencies' className='flex flex-col items-center'>
        <div className='flex mt-20 font-poppins'>
          <p className='text-3xl md:text-4xl font-semibold'>Experiências</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-5">
          {myExperiences.map((experience, index) => (
            <div className='flex flex-col' key={index}>
              <ExperienceCard {...experience} />
              {index < myExperiences.length - 1 && (
                <div className='flex flex-col text-2xl'>
                  <div>
                    •
                  </div>
                  <div>
                    •
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='flex font-poppins max-w-4xl m-auto'>
        <Link href='/'>
          <p className='text-1xl md:text-2xl font-semibold px-5 sm:px-0 hover:text-green-500 cursor-pointer my-10'>{`← Voltar`}</p>
        </Link>
      </div>
    </div>
  )
}

export default experiencesPage
