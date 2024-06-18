import { ExperienceCard } from '../components/ExperienceCard';

export default function Experiences() {
  const experience = {
    title: 'Senior Developer',
    company: 'Tech Company',
    employmentType: 'Full-time',
    description: `As a Senior Frontend Software Engineer at Cloudbeds, I'm responsible for the creation of new Frontend integrations with several lodging business channels such as Tripadvisor, Hopper, and HRS. I also enhance existing connections with platforms like Vrbo and Airbnb. Additionally, I play an important role within the Company's Frontend Brain Trust Group, driving the implementation of cutting-edge technologies and industry best practices throughout our Frontend teams.`,
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
        <p className='text-3xl md:text-4xl font-semibold'>Experiências</p>
      </div>
    </div>
  );
}