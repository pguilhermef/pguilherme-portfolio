import AboutMe from '../components/AboutMe'
import Experiences from '../components/Experiences'
import Homepage from '../components/Home'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='bg-logo w-auto'>
        <main>
          <Homepage />
          <Experiences />
          <Skills/>
          <Projects/>
        </main>
    </div>
  )
}
