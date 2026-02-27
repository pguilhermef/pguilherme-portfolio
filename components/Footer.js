export default function Footer() {
  const year = 2026
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '2rem',
        background: '#0a0a0f',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.9rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {'<PG.dev />'}
        </span>

        <p style={{ fontSize: '0.8rem', color: '#334155', textAlign: 'center' }}>
          © {year} Paulo Guilherme Fideli — Desenvolvedor Backend C# & .NET
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#4ade80',
              display: 'block',
              boxShadow: '0 0 8px rgba(74,222,128,0.8)',
            }}
          />
          <span style={{ fontSize: '0.78rem', color: '#475569' }}>Online & disponível</span>
        </div>
      </div>
    </footer>
  )
}
