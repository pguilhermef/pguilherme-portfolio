import Image from "next/image";
import Link from "next/link";
import logo_light from "../public/logo_images/logo_light.png"

const navigation = [
  { name: 'Quem sou eu', href: '/' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Wallpapers', href: '/wallpapers' },
]

function Navbar() {
  return (
    <div>
      <div>
      <Link href='/'>
        <a>
        <Image
          src={logo_light}
          alt="logo_light"
        />
        </a>
      </Link>
      </div>
      <div>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a>
            {item.name}
          </a>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Navbar
