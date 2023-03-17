import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo_light from "../public/logo_images/logo_light.png"

const navigation = [
  { name: 'Início', href: '#home' },
  { name: 'Quem sou eu', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

// To do: Criar menu responsivo para telas menores.

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="">
      <div className="mx-3 p-4 flex justify-center">
        <div className="flex justify-between xl:justify-evenly w-2/4 bg-red-500">
          {/* Logo */}
          <div className="flex justify-start items-center">
            <div className="flex jus w-40 xl:w-60">
                <Link href='/' className="light"> 
                  <a>
                  <Image
                    src={logo_light}
                    alt="logo_light"
                    className=""
                  />
                  </a>
                </Link>
              </div>
          </div>
          {/* Navigation */}
          <div className="flex justify-end items-center">
            <div className="hidden md:flex justify-end items-center space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="py-4 px-2 font-semibold xl:text-xl text-gray-700 hover:text-black transition duration-300">
                    {item.name}
                  </a>
              ))}
              </div>
          </div>

        </div>
      </div>
    </nav>
  )
}       

export default Navbar
