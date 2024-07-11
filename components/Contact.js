import Image from 'next/image';
import React from 'react';

function Contact() {
  return (
    <section id='contact' className='flex flex-col justify-center items-center text-black font-poppins'>
      {/* Contato por E-mail */}
      <div className='flex flex-col items-center justify-center w-full md:w-7/12 p-6 py-10'>
        <div className='text-center mb-5'>
          <p className='text-3xl font-semibold'>Entre em Contato</p>
          <p className='text-gray-700'>Ficarei feliz em ajudar você!</p>
        </div>
        <form action="https://formsubmit.co/pauloguilhermefidelis@gmail.com" method="POST" className=" w-full md:w-5/6 2xl:w-4/6 space-y-2">
          <div>
          <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900">Seu nome</label>
              <input type="name" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="José Bezerra" required />
              <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900">Seu email</label>
              <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="josebezerra@gmail.com" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900">Sua mensagem</label>
              <textarea id="message" name="mensagem" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Mensagem..."></textarea>
          </div>
          <button type="submit" className='flex btn fourth'>ENVIAR E-MAIL</button>
      </form>
      </div>
    </section>
  )
}

export default Contact
