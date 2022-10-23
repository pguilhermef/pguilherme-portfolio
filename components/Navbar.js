import Link from "next/link";

const navigation = [
  { name: 'Quem sou eu', href: '/' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Wallpapers', href: '/wallpapers' },
]

function Navbar() {
  return (
    <div>
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
