import AboutMe from '../components/AboutMe'
import Homepage from '../components/Home'
import Projects from '../components/Projects'
import Services from '../components/Services'

export default function Home() {
  return (
    <div className='bg-logo w-auto'>
        <main>
          <Homepage />
          <Projects/>
          <Services />
        </main>
    </div>
  )
}
