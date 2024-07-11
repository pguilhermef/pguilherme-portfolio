import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import closeNavbar from '../public/navbar_svg/close_navbar.svg'
import openNavbar from '../public/navbar_svg/open_navbar.svg'
import logo from '../public/logo_images/logo_light.png'

const navigation = [
  { name: 'Início', href: '/#home' },
  { name: 'Projetos', href: '/#projects' },
  { name: 'Serviços', href: '/#services'},
  { name: 'Contato', href: '/#contact' },
];

// To do: Criar menu responsivo para telas menores.

function Navbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  return (
    <section>
      <nav className="w-full py-3 dark:bg-black bg-portfolio-white fixed top-0 left-0 right-0 z-50 font-poppins">
        <div className="justify-between items-center px-7 mx-auto lg:max-w-7xl lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <div
              className="w-40 flex hover:cursor-pointer"
              onClick={(navbarIsOpen) => {
                if (navbarIsOpen) {
                  setNavbarIsOpen(!navbarIsOpen)
                }
              }}
              >
                <Link href="/">
                  <Image src={logo} alt="logo"/>
                </Link>
              </div>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="px-1 text-gray-700 rounded-lg outline-none"
                  onClick={() => setNavbarIsOpen(!navbarIsOpen)}
                >
                  {navbarIsOpen ? (
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
              className={`flex-1 justify-self-center lg:block ${
                navbarIsOpen ? 'p-12 block' : 'hidden'
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex">
                {navigation.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <li
                      onClick={(navbarIsOpen) => {
                        if (navbarIsOpen !== true) {
                          setNavbarIsOpen(!navbarIsOpen)
                        }
                      }}
                      className="flex justify-center items-center py-6 lg:py-0 text-xl text-black border-black lg:px-6 text-center border-b-2 lg:border-b-0 hover:text-gray-700 font-semibold lg:hover:bg-transparent cursor-pointer">
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar
