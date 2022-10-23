import Image from "next/image";
import github_logo from '../public/svg_links/github_logo.svg'
import instagram_logo from '../public/svg_links/instagram_logo.svg'
import linkedin_logo from '../public/svg_links/linkedin_logo.svg'

const links = [
  { src: github_logo, alt: '/' },
  { src: instagram_logo, alt: '/projects' },
  { src: linkedin_logo, alt: '/wallpapers' },
]

function Footer() {
  return (
    <>
    <div>
      <span>Entre em contato comigo!</span>
      <p>
        <a href="mailto:pguilhermesanttos@gmail.com">pguilhermesanttos@gmail.com</a>
      </p>
      <div>
      {links.map((item) => (
          <a key={item.alt}>
            <Image
              src={item.src}
              alt={item.alt}
            />
          </a>
      ))}
      </div>
    </div>
    </>
  )
}

export default Footer
