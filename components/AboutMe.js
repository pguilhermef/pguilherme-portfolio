import React from 'react';
import Image from 'next/image';

import pegePhoto from '../public/pguilherme.jpeg'

function AboutMe() {
  return (
      <section
      id='about'
      className='flex h-screen text-black bg-green-400 text-center'
      >
        <h1
        className='m-auto'
        >ABOUT</h1>
      </section>  
  )
}

export default AboutMe