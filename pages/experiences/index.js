import Link from 'next/link'
import React from 'react'

function experiencesPage() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <div className='flex justify-center items-center text-xl font-bold'>Calma lá caladengo. Já já você vai ver isso aqui cheio de experiencias incriveis</div>
      <Link href='/'>
        <h1 className='mt-4 text-xl font-medium'>
        Clique aqui para voltar à página principal
        </h1>
        </Link>
    </div>
  )
}

export default experiencesPage