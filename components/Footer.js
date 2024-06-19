import Image from "next/image";
import github_logo from '../public/svg_links/github_logo.svg'
import instagram_logo from '../public/svg_links/instagram_logo.svg'
import linkedin_logo from '../public/svg_links/linkedin_logo.svg'

const links = [
  { src: github_logo, alt: '/', href: 'https://github.com/pguilhermef'},
  // { src: instagram_logo, alt: '/projects', href: 'https://instagram.com/pege.dev' },
  { src: linkedin_logo, alt: '/wallpapers', href: 'https://linkedin.com/in/pguilhermef' },
]

function Footer() {
  return (
    <footer className='h-32 bg-white border flex justify-center items-center text-black'>
      <div className="flex flex-col justify-center items-center">
        <p id='about' className="cursor-default font-bold">Entre em contato comigo!</p>
        <p>
          pguilhermesanttos@gmail.com
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
    </footer>
  )
}

export default Footer
