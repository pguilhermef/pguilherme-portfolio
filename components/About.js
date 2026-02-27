import { useEffect, useRef } from 'react'

const values = [
    {
        icon: '🏗️',
        title: 'Clean Architecture',
        desc: 'Código organizado, desacoplado e fácil de manter. SOLID, DRY, KISS são princípios que aplico no dia a dia.',
    },
    {
        icon: '⚡',
        title: 'Performance First',
        desc: 'APIs otimizadas com tempo de resposta baixo, consultas SQL eficientes e uso inteligente de cache.',
    },
    {
        icon: '🔒',
        title: 'Segurança',
        desc: 'Autenticação segura, autorização granular, proteção contra vulnerabilidades comuns (OWASP Top 10).',
    },
    {
        icon: '📚',
        title: 'Aprendizado contínuo',
        desc: 'Sempre atualizando o conhecimento com as novidades do ecossistema .NET e boas práticas da indústria.',
    },
]

export default function About() {
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
            id="about"
            ref={sectionRef}
            className="section-reveal"
            style={{
                padding: '6rem 0',
                background: '#0d0d16',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background */}
            <div
                className="dot-grid"
                style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '5rem',
                        alignItems: 'center',
                    }}
                    className="about-grid"
                >
                    {/* Left: About text */}
                    <div>
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
              // sobre mim
                        </span>
                        <h2
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                                fontWeight: 800,
                                color: '#f1f5f9',
                                letterSpacing: '-0.03em',
                                marginBottom: '1.5rem',
                                lineHeight: 1.2,
                            }}
                        >
                            Desenvolvedor apaixonado por{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                backend
                            </span>
                        </h2>

                        <p style={{ fontSize: '0.975rem', color: '#64748b', lineHeight: 1.8, marginBottom: '1rem' }}>
                            Sou o <strong style={{ color: '#a5b4fc' }}>Paulo Guilherme</strong>, Desenvolvedor de Software Jr. na
                            {' '}<strong style={{ color: '#a5b4fc' }}>Sys Manager</strong>, especializado em
                            {' '}<strong style={{ color: '#a5b4fc' }}>C#, .NET e Power Platform</strong>. Apaixonado pela parte
                            invisível das aplicações — onde a lógica de negócio vive, a performance importa e a arquitetura faz a diferença.
                        </p>

                        <p style={{ fontSize: '0.975rem', color: '#64748b', lineHeight: 1.8, marginBottom: '2rem' }}>
                            Tenho experiência no desenvolvimento de soluções corporativas — <strong style={{ color: '#a5b4fc' }}>APIs RESTful</strong>,
                            automações com <strong style={{ color: '#a5b4fc' }}>Power Apps e Power Automate</strong>, governança no Azure
                            e liderança técnica de times. Reduzi processos de 2h para 5min com entregas reais em produção.
                        </p>

                        {/* Quick facts */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '1rem',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                background: 'rgba(99,102,241,0.05)',
                                border: '1px solid rgba(99,102,241,0.15)',
                            }}
                        >
                            {[
                                { label: 'Empresa atual', value: 'Sys Manager' },
                                { label: 'Especialidade', value: 'C#, .NET, Power Platform' },
                                { label: 'Idiomas', value: 'PT-BR, EN (técnico)' },
                                { label: 'Modalidade', value: 'Híbrido · Rio de Janeiro' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div style={{ fontSize: '0.72rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: 600 }}>{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Values cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {values.map((v, i) => (
                            <div
                                key={v.title}
                                className="glass"
                                style={{
                                    borderRadius: '1rem',
                                    padding: '1.5rem',
                                    transition: 'all 0.3s ease',
                                    animationDelay: `${i * 0.1}s`,
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)'
                                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.25)'
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                                    e.currentTarget.style.boxShadow = 'none'
                                }}
                            >
                                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                                    {v.title}
                                </h3>
                                <p style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.6 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
        </section>
    )
}
