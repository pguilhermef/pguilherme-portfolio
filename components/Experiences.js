import Link from 'next/link';
import { ExperienceCard } from '../components/ExperienceCard';

export default function Experiences() {
  const experience = {
    title: 'Desenvolvedor Junior',
    company: 'Macrosoft',
    employmentType: 'Full-time',
    description: `Como desenvolvedor na macrosoft eu desenvolvi muitas tecnologias e tudo isso que eu estou falando está servindo apenas como teste então não leve em conta o que está escrito aqui pois isso é balela, só pra ir testando responsividade e tamanho ideal de descrição. Esse truque eu aprendi com meu professor japonês que sempre me dizia: "その車はベロシティーが高いです". Nunca vou esquecer dessas belas palavras.
    `,
    skills: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    startDate: '2020-01-01',
    endDate: '2023-06-01',
  };

  return (
    <div>
      <div id='experiencies' className='flex flex-col items-center'>
        <div className='flex mt-20 font-poppins'>
          <p className='text-3xl md:text-4xl font-semibold'>Experiências</p>
        </div>
        <div className="w-full flex items-center justify-center px-5 pt-5">
          <ExperienceCard {...experience} />
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