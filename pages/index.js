import AboutMe from '../components/AboutMe'
import Homepage from '../components/Home'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='bg-logo'>
        <main>
          <Homepage />
          <AboutMe />
          <Projects/>
          <Skills/>
        </main>
    </div>
  )
}
