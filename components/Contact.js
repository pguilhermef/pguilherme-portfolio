import { useState, useRef, useEffect } from 'react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pguilhermef',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#e2e8f0',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pguilhermef',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: '#0ea5e9',
  },
  {
    label: 'Email',
    href: 'mailto:pguilherme@dev.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#a78bfa',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    color: '#e2e8f0',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-reveal"
      style={{ padding: '6rem 0 4rem', background: '#0a0a0f', position: 'relative' }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              color: '#6366f1',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            // vamos conversar
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            Entre em Contato
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Tenho um projeto interessante? Precisa de uma API robusta? Vamos conversar!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div>
            <div
              className="glass"
              style={{
                borderRadius: '1.25rem',
                padding: '2rem',
                marginBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  marginBottom: '0.5rem',
                }}
              >
                Disponível para oportunidades
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Estou aberto a propostas de emprego CLT/PJ, projetos freelance e colaborações em sistemas backend com C# e .NET.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(99,102,241,0.15)',
                      border: '1px solid rgba(99,102,241,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#475569' }}>Localização</div>
                    <div style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: 500 }}>Brasil — Remoto 🌎</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(99,102,241,0.15)',
                      border: '1px solid rgba(99,102,241,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#475569' }}>Disponibilidade</div>
                    <div style={{ fontSize: '0.875rem', color: '#4ade80', fontWeight: 500 }}>Disponível agora</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '0.875rem 1rem',
                    borderRadius: '0.75rem',
                    color: '#94a3b8',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = link.color
                    e.currentTarget.style.borderColor = `${link.color}33`
                    e.currentTarget.style.background = `${link.color}08`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  {link.icon}
                  <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>{link.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto' }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="glass"
            style={{
              borderRadius: '1.25rem',
              padding: '2rem',
            }}
          >
            {status === 'success' ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(74,222,128,0.15)',
                    border: '2px solid rgba(74,222,128,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                  }}
                >
                  ✓
                </div>
                <h3 style={{ color: '#4ade80', fontWeight: 700, fontSize: '1.1rem' }}>Mensagem enviada!</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
                  Obrigado pelo contato. Responderei em breve!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px', fontWeight: 500 }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(99,102,241,0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px', fontWeight: 500 }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(99,102,241,0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px', fontWeight: 500 }}>
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Proposta de projeto backend"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(99,102,241,0.5)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px', fontWeight: 500 }}>
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(99,102,241,0.5)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{
                    justifyContent: 'center',
                    opacity: status === 'sending' ? 0.7 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
