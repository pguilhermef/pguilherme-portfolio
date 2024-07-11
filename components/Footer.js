import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo_images/logo_light.png'

function Footer() {
  return (
    <footer className='h-22 bg-white border flex justify-center items-center text-black'>
      <div className="flex flex- sm:flex-row justify-center items-center space-x-3">
        <Link href="/">
          <div className="w-28 mt-2">
            <Image src={logo} alt="logo"/>
          </div>
        </Link>
        <span className="hidden sm:inline-block">|</span>
        <div className="flex flex-col sm:flex-row sm:gap-1">
          <span className="font-bold text-center sm:text-left">© 2024 – por Paulo Guilherme.</span>
          <span className="font-bold text-center sm:text-left">Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
