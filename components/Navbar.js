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
    <div className="flex justify-around sm:justify-start items-center mt-2 mb-5 ml-5 sm:my-5 sm:ml-8 bg-logo">
      <div className="w-40">
        <Link href='/'>
          <a>
          <Image
            src={logo_light}
            alt="logo_light"
          />
          </a>
        </Link>
      </div>
      <div className="sm:ml-10">
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a className="font-extrabold mr-2 md:mr-4 xl:mr-10">
            {item.name}
          </a>
        </Link>
      ))}
      </div>
    </div>
  )
}

export default Navbar
