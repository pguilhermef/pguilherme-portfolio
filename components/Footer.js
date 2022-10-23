import Image from "next/image";
import github_logo from '../public/svg_links/github_logo.svg'
import instagram_logo from '../public/svg_links/instagram_logo.svg'
import linkedin_logo from '../public/svg_links/linkedin_logo.svg'

const links = [
  { src: github_logo, alt: '/', href: 'https://github.com/pguilhermef'},
  { src: instagram_logo, alt: '/projects', href: 'https://instagram.com/pege.dev' },
  { src: linkedin_logo, alt: '/wallpapers', href: 'https://linkedin.com/in/pguilhermef' },
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
          <a key={item.alt} href={item.href} target='blank'>
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
