import AboutMe from '../components/AboutMe'
import Homepage from '../components/Home'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className='bg-logo'>
        <main>
          <Homepage />
          <AboutMe />
          <Projects/>
          <Skills/>
          <Contact/>
        </main>
    </div>
  )
}
