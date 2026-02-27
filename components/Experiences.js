import { useEffect, useRef } from 'react'

const experiences = [
  {
    title: 'Desenvolvedor de Software Jr',
    company: 'Sys Manager',
    period: 'Mai 2025 — Presente',
    duration: '10 meses',
    type: 'Tempo integral',
    location: 'Rio de Janeiro, RJ · Híbrida',
    current: true,
    description:
      'Atuo como referência técnica do time de desenvolvimento, conduzindo treinamentos, definindo arquitetura de soluções e entregando aplicações corporativas que transformam processos manuais em fluxos ágeis e rastreáveis.',
    achievements: [
      'Liderança técnica com +96h de treinamentos para novos membros da equipe',
      'Processos que levavam 1–2 horas reduzidos para ~5 minutos com automações',
      'Gestão de NFs de profissionais, controle de ausências PJ e desligamentos automáticos',
      'Governança e segurança: perfis, políticas de acesso, logs de auditoria no Azure',
      'Sustentabilidade técnica: documentação, critérios de aceitação e código organizado',
    ],
    tech: ['C#', '.NET', 'Power Apps', 'Power Automate', 'Azure', 'Dataverse', 'SharePoint'],
    color: '#6366f1',
  },
  {
    title: 'Estagiário de TI',
    company: 'Sys Manager',
    period: 'Ago 2024 — Abr 2025',
    duration: '9 meses',
    type: 'Estágio',
    location: 'Rio de Janeiro, RJ · Híbrida',
    current: false,
    description:
      'Participei diretamente do desenvolvimento e implantação de soluções internas que automatizaram tarefas manuais e melhoraram a eficiência operacional de diversas áreas da empresa.',
    achievements: [
      '~5 aplicações e 4 automações entregues para áreas distintas',
      'Processos com até 89% de redução no tempo de execução',
      'Foco em usabilidade, integração entre sistemas e redução de retrabalho',
      'Suporte e manutenção de aplicações e fluxos em produção',
      'Documentação e padronização de entregas para escalabilidade e manutenção',
    ],
    tech: ['Power Apps', 'Power Automate', 'SharePoint', 'Dataverse', 'SQL Server'],
    color: '#a78bfa',
  },
  {
    title: 'Desenvolvedor Junior',
    company: 'DevGraphic',
    period: 'Jun 2024 — Ago 2024',
    duration: '3 meses',
    type: 'Sob Demanda / Freelance',
    location: 'Remoto',
    current: false,
    description:
      'Desenvolvimento de páginas web e landing pages para clientes de diversos segmentos. Desde o primeiro contato com o cliente até a entrega final do produto.',
    achievements: [
      'Desenvolvimento de landing pages customizadas para clientes B2C e B2B',
      'Atendimento de cliente e briefing direto com as partes interessadas',
      'Integração de formulários e ferramentas de marketing',
      'Publicação e manutenção em produção',
    ],
    tech: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    color: '#60a5fa',
  },
]

export default function Experiences() {
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
      id="experience"
      ref={sectionRef}
      className="section-reveal"
      style={{
        padding: '6rem 0',
        background: '#0d0d16',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
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
            // historico profissional
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
            Experiência
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            Do estágio à liderança técnica, construindo soluções corporativas com C#, .NET e Power Platform.
          </p>
        </div>

        {/* Timeline vertical */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.08))',
              borderRadius: '2px',
            }}
          />

          {experiences.map((exp, idx) => (
            <ExperienceItem key={`${exp.company}-${exp.title}`} exp={exp} idx={idx} />
          ))}
        </div>

        {/* Education card */}
        <div style={{ marginTop: '3.5rem' }}>
          <div
            className="glass"
            style={{
              borderRadius: '1rem',
              padding: '1.75rem',
              border: '1px solid rgba(99,102,241,0.15)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.25rem',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(99,102,241,0.12)',
                border: '1px solid rgba(99,102,241,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}
            >
              🎓
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '3px' }}>
                Bacharelado em Sistemas de Informação
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: 500, marginBottom: '6px' }}>
                Em andamento
              </p>
              <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.6 }}>
                Fundamentos em engenharia de software, estruturas de dados, banco de dados e arquitetura de sistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, idx }) {
  const itemRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      },
      { threshold: 0.15 }
    )
    if (itemRef.current) observer.observe(itemRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      style={{
        display: 'flex',
        gap: '1.75rem',
        marginBottom: '2rem',
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.6s ease ${idx * 0.15}s, transform 0.6s ease ${idx * 0.15}s`,
      }}
    >
      {/* Timeline dot */}
      <div style={{ flexShrink: 0, paddingTop: '1.5rem', position: 'relative' }}>
        <div
          style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: exp.color,
            border: '3px solid #0d0d16',
            boxShadow: `0 0 0 3px ${exp.color}30, 0 0 15px ${exp.color}50`,
            position: 'relative',
            zIndex: 1,
            marginLeft: '13px',
          }}
        />
      </div>

      {/* Card */}
      <div
        className="glass"
        style={{
          borderRadius: '1rem',
          padding: '1.5rem',
          flex: 1,
          border: `1px solid ${exp.color}18`,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${exp.color}35`
          e.currentTarget.style.boxShadow = `0 12px 30px rgba(0,0,0,0.3), 0 0 0 1px ${exp.color}20`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${exp.color}18`
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Card header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '0.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f1f5f9' }}>{exp.title}</h3>
            {exp.current && (
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  background: 'rgba(74,222,128,0.14)',
                  color: '#4ade80',
                  fontWeight: 700,
                  border: '1px solid rgba(74,222,128,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Atual
              </span>
            )}
          </div>

          {/* Period badge */}
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem',
              color: '#475569',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '3px 10px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
            }}
          >
            {exp.period}
          </span>
        </div>

        {/* Company + meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.9rem', color: exp.color, fontWeight: 600 }}>{exp.company}</span>
          <span style={{ color: '#334155', fontSize: '0.9rem' }}>·</span>
          <span style={{ fontSize: '0.8rem', color: '#475569' }}>{exp.type}</span>
          <span style={{ color: '#334155', fontSize: '0.9rem' }}>·</span>
          <span style={{ fontSize: '0.75rem', color: '#334155' }}>
            {exp.location}
          </span>
        </div>

        <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1rem' }}>
          {exp.description}
        </p>

        {/* Achievements */}
        <ul style={{ listStyle: 'none', marginBottom: '1.25rem' }}>
          {exp.achievements.map((a) => (
            <li key={a} style={{ display: 'flex', gap: '8px', marginBottom: '5px', alignItems: 'flex-start' }}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke={exp.color}
                strokeWidth="2.5"
                style={{ marginTop: '3px', flexShrink: 0 }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>{a}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {exp.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.7rem',
                padding: '3px 9px',
                borderRadius: '999px',
                background: `${exp.color}12`,
                border: `1px solid ${exp.color}28`,
                color: exp.color,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}