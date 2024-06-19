import Link from 'next/link';
import { ExperienceCard } from '../components/ExperienceCard';
import myExperiences from '../content/myExperiences';

export default function Experiences() {
  myExperiences

  return (
    <div>
      <div id='experiencies' className='flex flex-col items-center'>
        <div className='flex mt-20 font-poppins'>
          <p className='text-3xl md:text-4xl font-semibold'>Experiências</p>
        </div>
        <div className="w-full flex items-center justify-center px-5 pt-5">
          <ExperienceCard {...myExperiences[0]} />
        </div>
      </div>
      <div className='flex font-poppins max-w-4xl m-auto'>
        <Link href='/experiences'>
          <p className='text-1xl md:text-2xl font-semibold px-5 sm:px-0 hover:text-green-500  cursor-pointer'>{`Ver todas as experiências →`}</p>
        </Link>
      </div>
    </div>
  );
}