import Image from 'next/image';
import React from 'react';
import myServices from '../content/myServices';

function Services() {
  return (
    <section id='services' className='flex flex-col justify-start items-center  text-black font-poppins cursor-default'>
      <div className='flex flex-col h-auto items-center lg:w-full mt-16 lg:px-16'>
        {/* Title */}
        <div className='flex flex-col items- mb-8 md:mb-10 text-center'>
          <p className='text-3xl md:text-4xl font-semibold'>Serviços</p>
          <p className='text-portfolio-gray text-sm md:text-base'>O que posso fazer pelo seu negócio</p>
        </div>
          {/* Skills */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-screen-lg xl:max-w-screen-xl p-6'>
          {myServices.map((item) => (
            <div key={item.name} className='flex flex-col items-start justify-start bg-white rounded-lg border-2 p-4'>
              <div className='flex justify-center items-start gap-2'>
                <Image src={item.image} alt={item.name} width={40} height={40} className='p-1' />
                <span className='font-semibold text-xl align-text-top leading-6'>{item.name}</span>
              </div>
              <p className='mt-2 text-left text-portfolio-gray'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
