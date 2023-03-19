import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import closeNavbar from '../public/navbar_svg/close_navbar.svg'
import openNavbar from '../public/navbar_svg/open_navbar.svg'
import logo from '../public/logo_images/logo_light.png'

const navigation = [
  { name: 'Início', href: '#home' },
  { name: 'Quem sou eu', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

// To do: Criar menu responsivo para telas menores.

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10 font-poppins">
        <div className="justify-between items-center px-7 mx-auto lg:max-w-7xl lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
              {/* LOGO */}
              <div
              className="w-40 lg:w-52 flex hover:cursor-pointer"
              onClick={() => setNavbar(!navbar)}
              >
                <Link href="/">
                  <Image src={logo} alt="logo"/>
                </Link>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-1 text-gray-700 rounded-lg outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={closeNavbar} width={30} height={30} alt="logo" />
                  ) : (
                    <Image src={openNavbar} width={30} height={30} alt="logo" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? 'p-12 block' : 'hidden'
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">
                {navigation.map((item) => (
                    <li
                    key={item.name}
                    onClick={() => setNavbar(!navbar)}
                    className="flex justify-center items-center py-6 text-xl text-black border-black lg:px-6 text-center border-b-2 lg:border-b-0 hover:text-gray-700 font-semibold lg:hover:bg-transparent">
                  <Link href={item.href} >
                    {item.name}
                  </Link>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
