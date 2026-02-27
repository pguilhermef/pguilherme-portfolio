import { useEffect, useRef } from 'react'

// Pre-tokenized code lines to avoid dangerouslySetInnerHTML hydration issues
const codeLines = [
  [{ t: 'comment', v: '// Program.cs — ASP.NET Core 8' }],
  [{ t: 'keyword', v: 'var' }, { t: 'plain', v: ' builder = ' }, { t: 'method', v: 'WebApplication' }, { t: 'plain', v: '.' }, { t: 'method', v: 'CreateBuilder' }, { t: 'plain', v: '(args);' }],
  [],
  [{ t: 'plain', v: 'builder.Services' }],
  [{ t: 'plain', v: '    .' }, { t: 'method', v: 'AddControllers' }, { t: 'plain', v: '()' }],
  [{ t: 'plain', v: '    .' }, { t: 'method', v: 'AddJsonOptions' }, { t: 'plain', v: '(opt => opt' }],
  [{ t: 'plain', v: '        .JsonSerializerOptions' }],
  [{ t: 'plain', v: '        .PropertyNamingPolicy = JsonNamingPolicy.CamelCase);' }],
  [],
  [{ t: 'plain', v: 'builder.Services.' }, { t: 'method', v: 'AddScoped' }, { t: 'plain', v: '<' }, { t: 'type', v: 'IUserRepository' }, { t: 'plain', v: ', ' }, { t: 'type', v: 'UserRepository' }, { t: 'plain', v: '>();' }],
  [{ t: 'plain', v: 'builder.Services.' }, { t: 'method', v: 'AddScoped' }, { t: 'plain', v: '<' }, { t: 'type', v: 'IAuthService' }, { t: 'plain', v: ', ' }, { t: 'type', v: 'JwtAuthService' }, { t: 'plain', v: '>();' }],
  [{ t: 'plain', v: 'builder.Services.' }, { t: 'method', v: 'AddDbContext' }, { t: 'plain', v: '<' }, { t: 'type', v: 'AppDbContext' }, { t: 'plain', v: '>(opt =>' }],
  [{ t: 'plain', v: '    opt.' }, { t: 'method', v: 'UseNpgsql' }, { t: 'plain', v: '(builder.Configuration' }],
  [{ t: 'plain', v: '        .' }, { t: 'method', v: 'GetConnectionString' }, { t: 'plain', v: '(' }, { t: 'string', v: '"Default"' }, { t: 'plain', v: ')));' }],
  [],
  [{ t: 'keyword', v: 'var' }, { t: 'plain', v: ' app = builder.' }, { t: 'method', v: 'Build' }, { t: 'plain', v: '();' }],
  [],
  [{ t: 'plain', v: 'app.' }, { t: 'method', v: 'UseAuthentication' }, { t: 'plain', v: '();' }],
  [{ t: 'plain', v: 'app.' }, { t: 'method', v: 'UseAuthorization' }, { t: 'plain', v: '();' }],
  [{ t: 'plain', v: 'app.' }, { t: 'method', v: 'MapControllers' }, { t: 'plain', v: '();' }],
  [{ t: 'plain', v: 'app.' }, { t: 'method', v: 'Run' }, { t: 'plain', v: '();' }],
]

const tokenColors = {
  keyword: '#818cf8',
  type: '#a78bfa',
  method: '#60a5fa',
  string: '#6ee7b7',
  comment: '#475569',
  plain: '#94a3b8',
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    let animId
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.opacity})`
        ctx.fill()
      })

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99,102,241,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#0a0a0f',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          left: '-200px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '8rem 2rem 4rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left — Text */}
        <div style={{ animation: 'slideUp 0.8s ease forwards' }}>
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#4ade80',
                display: 'block',
                boxShadow: '0 0 8px rgba(74,222,128,0.8)',
                animation: 'pulse 2s infinite',
              }}
            />
            <span style={{ fontSize: '0.8rem', color: '#a5b4fc', fontWeight: 500 }}>
              Disponível para novos projetos
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: '#f1f5f9',
            }}
          >
            Paulo{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #a78bfa 60%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Guilherme
            </span>
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: '#a78bfa',
                fontWeight: 500,
              }}
            >
              Backend Developer
            </span>
            <span style={{ color: '#334155', fontSize: '1.2rem' }}>|</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                color: '#6366f1',
                fontWeight: 500,
              }}
            >
              C# & .NET Specialist
            </span>
          </div>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#64748b',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '2.5rem',
            }}
          >
            Desenvolvo APIs robustas e sistemas escaláveis com{' '}
            <strong style={{ color: '#a5b4fc' }}>C# e .NET</strong>. Foco em arquitetura limpa,
            performance e boas práticas de engenharia de software.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              Ver Projetos
            </a>
            <a href="#contact" className="btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Entrar em contato
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {[
              { value: '1+', label: 'Ano na Sys Manager' },
              { value: '10+', label: 'Soluções em produção' },
              { value: '89%', label: 'Redução de tempo em proc.' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Code Window */}
        <div
          style={{
            animation: 'slideUp 1s ease forwards',
            animationDelay: '0.2s',
            opacity: 0,
          }}
          className="hidden md:block"
        >
          <div
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              background: 'rgba(17,17,24,0.9)',
              border: '1px solid rgba(99,102,241,0.2)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Window bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.875rem 1.25rem',
                background: 'rgba(255,255,255,0.03)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
              <span
                style={{
                  marginLeft: 'auto',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#475569',
                }}
              >
                Program.cs
              </span>
            </div>

            {/* Code content */}
            <pre
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.78rem',
                lineHeight: 1.7,
                padding: '1.5rem',
                overflowX: 'auto',
                color: '#94a3b8',
                margin: 0,
              }}
            >
              {codeLines.map((tokens, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                  <span style={{ color: '#334155', userSelect: 'none', minWidth: '1.5rem', textAlign: 'right', flexShrink: 0 }}>
                    {i + 1}
                  </span>
                  <span>
                    {tokens.length === 0
                      ? '\u00a0'
                      : tokens.map((tok, j) => (
                        <span key={j} style={{ color: tokenColors[tok.t] }}>{tok.v}</span>
                      ))
                    }
                  </span>
                </div>
              ))}
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'float 3s ease-in-out infinite',
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: '0.7rem', color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          style={{
            width: '2px',
            height: '40px',
            background: 'linear-gradient(to bottom, #6366f1, transparent)',
            borderRadius: '2px',
          }}
        />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding-top: 7rem !important;
          }
        }
      `}</style>
    </section>
  )
}
