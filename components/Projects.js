import { useEffect, useRef } from 'react'

const projects = [
  {
    id: 1,
    name: 'FinanceAPI',
    description:
      'API RESTful completa para gestão financeira pessoal e empresarial. Inclui autenticação JWT, relatórios automáticos, integração com Open Banking e categorização inteligente de transações.',
    tech: ['C#', '.NET 8', 'SQL Server', 'JWT', 'EF Core', 'Docker'],
    type: 'Backend API',
    accentColor: '#6366f1',
    icon: '💳',
    features: ['Autenticação JWT/Refresh Token', 'CQRS + MediatR', 'Rate Limiting', 'OpenAPI docs'],
    github: 'https://github.com/pguilhermef',
    status: 'Em produção',
  },
  {
    id: 2,
    name: 'TaskFlow API',
    description:
      'Sistema de gerenciamento de tarefas e projetos com funcionalidades em tempo real via SignalR. Suporte a equipes, boards kanban, notificações push e relatórios de produtividade.',
    tech: ['C#', 'ASP.NET Core', 'SignalR', 'Redis', 'PostgreSQL'],
    type: 'Real-time System',
    accentColor: '#a78bfa',
    icon: '📋',
    features: ['WebSocket real-time', 'Redis pub/sub', 'Clean Architecture', 'xUnit tests'],
    github: 'https://github.com/pguilhermef',
    status: 'Em desenvolvimento',
  },
  {
    id: 3,
    name: 'AuthService',
    description:
      'Microsserviço de autenticação e autorização centralizado. OAuth 2.0, OpenID Connect, gerenciamento de roles/claims, tokens rotativos e auditoria completa de acessos.',
    tech: ['C#', '.NET', 'OAuth 2.0', 'SQL Server', 'Docker', 'Azure'],
    type: 'Microservice',
    accentColor: '#60a5fa',
    icon: '🔐',
    features: ['OAuth 2.0 / OIDC', 'Role-based access', 'Audit logs', 'Azure AD integration'],
    github: 'https://github.com/pguilhermef',
    status: 'Concluído',
  },
  {
    id: 4,
    name: 'Go Pizza — Web',
    description:
      'Landing page conversão para franqueados de uma rede de pizzarias. Interface atraente com formulário de qualificação integrado ao CRM.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    type: 'Front-end',
    accentColor: '#f472b6',
    icon: '🍕',
    features: ['Responsivo', 'CRM integration', 'SEO otimizado', 'Alta conversão'],
    github: 'https://github.com/pguilhermef/go2pizza',
    live: 'https://www.mbebfranquias.com.br/',
    status: 'Em produção',
  },
]

const statusColors = {
  'Em produção': '#4ade80',
  'Em desenvolvimento': '#fbbf24',
  'Concluído': '#60a5fa',
}

export default function Projects() {
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

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-reveal"
      style={{ padding: '6rem 0', background: '#0a0a0f', position: 'relative' }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
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
            // projetos selecionados
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
            O que eu construí
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Projetos reais focados em soluções backend robustas e escaláveis.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, idx) => (
            <div
              key={project.id}
              style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                background: 'rgba(17,17,24,0.9)',
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s ease',
                animationDelay: `${idx * 0.1}s`,
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = `${project.accentColor}40`
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${project.accentColor}25`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Card header bar */}
              <div
                style={{
                  height: '4px',
                  background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}55)`,
                }}
              />

              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Icon + type + status */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${project.accentColor}15`,
                        border: `1px solid ${project.accentColor}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                      }}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '2px' }}>
                        {project.name}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: project.accentColor,
                          background: `${project.accentColor}15`,
                          padding: '2px 8px',
                          borderRadius: '999px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: statusColors[project.status],
                        boxShadow: `0 0 8px ${statusColors[project.status]}`,
                      }}
                    />
                    <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{project.status}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>
                  {project.description}
                </p>

                {/* Features */}
                <div style={{ marginBottom: '1.25rem' }}>
                  {project.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <div
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: project.accentColor,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: '0.8rem', color: '#475569' }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.7rem',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: `${project.accentColor}12`,
                        border: `1px solid ${project.accentColor}25`,
                        color: project.accentColor,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#94a3b8',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.color = '#e2e8f0'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.color = '#94a3b8'
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: project.accentColor,
                        background: `${project.accentColor}10`,
                        border: `1px solid ${project.accentColor}30`,
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${project.accentColor}20`
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${project.accentColor}10`
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                      Ver ao vivo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href="https://github.com/pguilhermef"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Ver todos os projetos no GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
