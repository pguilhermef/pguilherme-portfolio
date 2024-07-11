import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <section className='h-screen flex flex-col justify-center items-center font-poppins text-2xl text-center text-black'>
      <span>Email enviado, obrigado!</span>
      <span>Responderemos o mais breve possível.</span>
      <Link href='/'>
        <div className='mt-5'>
          <button className='flex btn fourth'>voltar para o início</button>
        </div>
      </Link>
    </section>
  )
}

export default index