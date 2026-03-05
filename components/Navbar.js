import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['about', 'skills', 'projects', 'experience', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(`#${id}`)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled
          ? 'rgba(10, 10, 15, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.15)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '1.25rem',
            background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}
        >
          {'<pguilherme.dev/>'}
        </a>

        {/* Desktop Nav */}
        <ul className="nav-desktop">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: active === link.href ? '#a5b4fc' : '#94a3b8',
                  background: active === link.href ? 'rgba(99,102,241,0.1)' : 'transparent',
                  transition: 'all 0.2s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => {
                  if (active !== link.href) {
                    e.target.style.color = '#c7d2fe'
                    e.target.style.background = 'rgba(99,102,241,0.06)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== link.href) {
                    e.target.style.color = '#94a3b8'
                    e.target.style.background = 'transparent'
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary"
              style={{ marginLeft: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
            >
              Contratar
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-mobile-btn"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: '#a5b4fc',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transformOrigin: 'center',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 1 ? 'scaleX(0)' : 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="nav-mobile-menu"
        style={{
          maxHeight: mobileOpen ? '500px' : '0',
          opacity: mobileOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
        }}
      >
        <div
          style={{
            background: 'rgba(10,10,15,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(99,102,241,0.2)',
            padding: '1rem 2rem 1.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: '#94a3b8',
                fontWeight: 500,
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{ marginTop: '1rem', justifyContent: 'center', width: '100%' }}
          >
            Contratar
          </a>
        </div>
      </div>

      <style jsx>{`
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }
        .nav-mobile-btn {
          display: none;
        }
        .nav-mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-btn {
            display: flex !important;
          }
          .nav-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </header>
  )
}
