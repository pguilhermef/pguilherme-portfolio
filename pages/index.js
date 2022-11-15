import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pegePhoto from '../public/pguilherme.jpeg'
import { useEffect, useState } from 'react'

export default function Home() {
  return (
    <div className='bg-logo'>
      <div className={styles.container}>
        <Head>
          <title>Paulo Guilherme</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div>
            <h3>Quem sou eu?</h3>

            <p>Olá! Meu nome é Paulo Guilherme, e sou Desenvolvedor Web Front-End. Sou apaixonado em criar, automatizar e entender como as coisas funcionam. E nas horas vagas sou criador de conteúdo.
            </p>

            <p>Pra mim o conhecimento é uma dádiva, e a curiosidade é um combustível. Hoje eu crio soluções para resolver, facilitar e automatizar trabalhos repetitivos do meu dia a dia. No entanto, tenho trabalhado e estudado muito para que essas desenvolver soluções que vão muito além de problemas que sejam somente meus. Logo em breve terei o prazer de lançar algumas das minhas ideias que já estão em desenvolvimento!
            </p>      
          </div>
          <div>
            <Image src={pegePhoto} alt='Foto de Paulo Guilherme Fidelis'/>
          </div>
        </main>
      </div>
    </div>
  )
}
