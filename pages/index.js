import Head from 'next/head'
import styles from '../styles/Home.module.css'

import AboutMe from '../components/AboutMe'
import Home from '../components/Home'

export default function Index() {
  return (
    <div className='bg-logo'>
      <div className={styles.container}>
        <Head>
          <title>Paulo Guilherme</title>
          <link rel="icon" href="/favicon.ico" />
          {/* Box Icons
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
          Unicons
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link> */}
        </Head>
        <main>
          <AboutMe />
          <Home />
        </main>
      </div>
    </div>
  )
}
