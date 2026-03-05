import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setSize()

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

    window.addEventListener('resize', setSize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <section
      id="home"
      className="hero-section"
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
      <div className="hero-grid">
        {/* Left — Text */}
        <div style={{ animation: 'slideUp 0.8s ease forwards' }}>
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
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
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
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
              marginBottom: '1.0rem',
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
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
                fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                color: '#6366f1',
                fontWeight: 500,
              }}
            >
              C# &amp; .NET
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

          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
          <div className="hero-stats">
            {[
              { value: '2+', label: 'Anos de experiência' },
              { value: '15+', label: 'Soluções próprias' },
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

        {/* Right — Profile Photo */}
        <div
          className="hero-photo-wrapper"
          style={{
            animation: 'slideUp 1s ease forwards',
            animationDelay: '0.2s',
            opacity: 0,
          }}
        >
          <div className="hero-photo-container">
            {/* Ambient glow behind the photo */}
            <div
              className="hero-photo-glow"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '110%',
                height: '110%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)',
                pointerEvents: 'none',
                animation: 'glowPulse 4s ease-in-out infinite',
                zIndex: 0,
              }}
            />

            {/* Photo ring */}
            <div className="hero-photo-ring">
              <div className="hero-photo-inner">
                <img
                  src="/profile.png"
                  alt="Paulo Guilherme — Backend Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="hero-floating-badge"
              style={{
                position: 'absolute',
                top: '8%',
                right: '-5%',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '12px',
                background: 'rgba(17,17,24,0.9)',
                border: '1px solid rgba(99,102,241,0.3)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                animation: 'floatBadge 5s ease-in-out infinite',
                zIndex: 2,
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>⚡</span>
              <span style={{ fontSize: '0.75rem', color: '#a5b4fc', fontWeight: 600 }}>
                C# & .NET
              </span>
            </div>

            <div
              className="hero-floating-badge"
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '-8%',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '12px',
                background: 'rgba(17,17,24,0.9)',
                border: '1px solid rgba(139,92,246,0.3)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                animation: 'floatBadge 5s ease-in-out infinite 1.5s',
                zIndex: 2,
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
                }}
              />
              <span style={{ fontSize: '0.75rem', color: '#6ee7b7', fontWeight: 600 }}>
                Open to Work
              </span>
            </div>

            <div
              className="hero-floating-badge"
              style={{
                position: 'absolute',
                bottom: '5%',
                right: '0%',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '12px',
                background: 'rgba(17,17,24,0.9)',
                border: '1px solid rgba(96,165,250,0.3)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                animation: 'floatBadge 5s ease-in-out infinite 3s',
                zIndex: 2,
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>☁️</span>
              <span style={{ fontSize: '0.75rem', color: '#93c5fd', fontWeight: 600 }}>
                Azure
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — positioned BELOW stats */}
      <div className="hero-scroll-indicator">
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
        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 8rem 2rem 6rem;
          width: 100%;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .hero-photo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-photo-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 380px;
        }
        .hero-photo-ring {
          position: relative;
          z-index: 1;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, #6366f1, #a78bfa, #818cf8, #6366f1);
          box-shadow: 0 0 60px rgba(99,102,241,0.3), 0 0 120px rgba(139,92,246,0.1);
          animation: ringRotate 8s linear infinite;
        }
        .hero-photo-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #0a0a0f;
          border: 3px solid #0a0a0f;
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: float 3s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes ringRotate {
          0% { background: linear-gradient(0deg, #6366f1, #a78bfa, #818cf8, #6366f1); }
          25% { background: linear-gradient(90deg, #6366f1, #a78bfa, #818cf8, #6366f1); }
          50% { background: linear-gradient(180deg, #6366f1, #a78bfa, #818cf8, #6366f1); }
          75% { background: linear-gradient(270deg, #6366f1, #a78bfa, #818cf8, #6366f1); }
          100% { background: linear-gradient(360deg, #6366f1, #a78bfa, #818cf8, #6366f1); }
        }

        /* ──── Tablet ──── */
        @media (max-width: 1024px) {
          .hero-grid {
            gap: 2.5rem;
          }
          .hero-photo-ring {
            width: 280px;
            height: 280px;
          }
        }

        /* ──── Mobile ──── */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding-top: 7rem !important;
            padding-bottom: 5rem !important;
          }
          .hero-photo-wrapper {
            order: -1;
          }
          .hero-photo-ring {
            width: 220px;
            height: 220px;
          }
          .hero-photo-container {
            max-width: 280px;
          }
          .hero-floating-badge {
            display: none !important;
          }
          .hero-stats {
            gap: 1.25rem;
            flex-wrap: wrap;
          }
          .hero-scroll-indicator {
            display: none;
          }
        }

        /* ──── Small Mobile ──── */
        @media (max-width: 480px) {
          .hero-grid {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 6rem !important;
            padding-bottom: 4rem !important;
            gap: 2rem !important;
          }
          .hero-photo-ring {
            width: 180px;
            height: 180px;
          }
          .hero-stats {
            gap: 1rem;
          }
          .hero-stats > div {
            min-width: 0;
          }
        }
      `}</style>
    </section>
  )
}
