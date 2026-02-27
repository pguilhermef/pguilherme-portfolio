import { useEffect, useRef } from 'react'

// Níveis: 'Principal' | 'Avançado' | 'Intermediário'
const techGroups = [
  {
    category: 'Linguagem & Runtime',
    icon: '⚡',
    accentColor: '#6366f1',
    techs: [
      { name: 'C#', level: 'Principal', note: '.NET 6 / 8' },
      { name: 'ASP.NET Core', level: 'Principal', note: 'Web API & MVC' },
      { name: 'LINQ', level: 'Avançado', note: 'Queries & Lambdas' },
      { name: 'Entity Framework Core', level: 'Avançado', note: 'ORM & Migrations' },
    ],
  },
  {
    category: 'Banco de Dados',
    icon: '🗄️',
    accentColor: '#a78bfa',
    techs: [
      { name: 'SQL Server', level: 'Avançado', note: 'T-SQL, Stored Procs' },
      { name: 'Dataverse', level: 'Avançado', note: 'Power Platform DB' },
      { name: 'SharePoint', level: 'Avançado', note: 'Listas e integração' },
      { name: 'PostgreSQL', level: 'Intermediário', note: 'Queries & Relations' },
    ],
  },
  {
    category: 'Power Platform',
    icon: '⚙️',
    accentColor: '#818cf8',
    techs: [
      { name: 'Power Apps', level: 'Avançado', note: 'Canvas & Model-driven' },
      { name: 'Power Automate', level: 'Avançado', note: 'Fluxos e automações' },
      { name: 'Power BI', level: 'Intermediário', note: 'Dashboards e relatórios' },
      { name: 'Copilot Studio', level: 'Intermediário', note: 'Chatbots corporativos' },
    ],
  },
  {
    category: 'Arquitetura & Padrões',
    icon: '🏗️',
    accentColor: '#60a5fa',
    techs: [
      { name: 'Clean Architecture', level: 'Avançado', note: 'SOLID, DDD' },
      { name: 'REST APIs', level: 'Principal', note: 'Design e documentação' },
      { name: 'Design Patterns', level: 'Avançado', note: 'Repository, CQRS' },
      { name: 'Microservices', level: 'Intermediário', note: 'Decomposição e contratos' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    accentColor: '#34d399',
    techs: [
      { name: 'Azure', level: 'Avançado', note: 'Entra ID, App Service, Storage' },
      { name: 'Docker', level: 'Intermediário', note: 'Containers & Compose' },
      { name: 'Git / GitHub', level: 'Avançado', note: 'Versionamento e PRs' },
      { name: 'Swagger / OpenAPI', level: 'Avançado', note: 'Documentação de APIs' },
    ],
  },
  {
    category: 'Ferramentas & Outros',
    icon: '🔧',
    accentColor: '#f472b6',
    techs: [
      { name: 'Visual Studio', level: 'Avançado', note: 'IDE principal' },
      { name: 'Postman', level: 'Avançado', note: 'Testes de API' },
      { name: 'xUnit / NUnit', level: 'Intermediário', note: 'Testes automatizados' },
      { name: 'Figma', level: 'Intermediário', note: 'Leitura de protótipos' },
    ],
  },
]

const levelConfig = {
  Principal: { label: 'Principal', bg: 'rgba(99,102,241,0.18)', border: 'rgba(99,102,241,0.45)', text: '#a5b4fc', dot: '#6366f1' },
  Avançado: { label: 'Avançado', bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.35)', text: '#6ee7b7', dot: '#34d399' },
  Intermediário: { label: 'Intermediário', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.3)', text: '#fcd34d', dot: '#f59e0b' },
}

function TechCard({ name, level, note, accentColor }) {
  const cfg = levelConfig[level]
  return (
    <div
      style={{
        padding: '0.75rem 1rem',
        borderRadius: '0.75rem',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        transition: 'all 0.25s ease',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '0.5rem',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${accentColor}10`
        e.currentTarget.style.borderColor = `${accentColor}35`
        e.currentTarget.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.transform = 'translateX(0)'
      }}
    >
      <div>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '2px' }}>
          {name}
        </div>
        <div style={{ fontSize: '0.72rem', color: '#475569' }}>{note}</div>
      </div>

      {/* Level badge */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '2px 8px',
          borderRadius: '999px',
          fontSize: '0.68rem',
          fontWeight: 700,
          background: cfg.bg,
          border: `1px solid ${cfg.border}`,
          color: cfg.text,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: cfg.dot,
            display: 'block',
          }}
        />
        {cfg.label}
      </span>
    </div>
  )
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="section-reveal"
      style={{
        padding: '6rem 0',
        position: 'relative',
        background: '#0d0d16',
      }}
    >
      {/* Background grid */}
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
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
            // skills & expertise
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#f1f5f9',
              letterSpacing: '-0.03em',
              marginBottom: '0.75rem',
            }}
          >
            Stack Técnica
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto' }}>
            Especializado no ecossistema Microsoft — de APIs C#/.NET a automações no Power Platform.
          </p>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(levelConfig).map(([key, cfg]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  background: cfg.bg,
                  border: `1px solid ${cfg.border}`,
                  color: cfg.text,
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: cfg.dot, display: 'block' }} />
                {cfg.label}
              </span>
              <span style={{ fontSize: '0.72rem', color: '#475569' }}>
                {key === 'Principal' && '— uso diário e aprofundado'}
                {key === 'Avançado' && '— projetos reais entregues'}
                {key === 'Intermediário' && '— conhecimento sólido'}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Groups Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {techGroups.map((group) => (
            <div
              key={group.category}
              className="glass"
              style={{
                borderRadius: '1rem',
                padding: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px ${group.accentColor}22`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: `${group.accentColor}18`,
                    border: `1px solid ${group.accentColor}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#e2e8f0',
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Techs list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {group.techs.map((tech) => (
                  <TechCard key={tech.name} {...tech} accentColor={group.accentColor} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick all-tags row */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.78rem', color: '#334155', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Outras tecnologias e ferramentas
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {[
              'AutoMapper', 'Dapper', 'SignalR', 'JWT', 'OAuth 2.0', 'MediatR',
              'Redis', 'MongoDB', 'Power Pages', 'Azure Functions', 'Azure Logic Apps', 'Scrum / Agile',
            ].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
