import Navbar from '../components/Navbar'
import Hero from '../components/Home'
import About from '../components/About'
import Skills from '../components/Services'
import Projects from '../components/Projects'
import Experiences from '../components/Experiences'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
