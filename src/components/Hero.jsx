import React, { useEffect, useRef } from 'react';

const SKILLS = [
  { label: 'Flutter', color: '#63d3ff', icon: '📱' },
  { label: 'React Native', color: '#9b7eff', icon: '⚛️' },
  { label: 'Figma', color: '#ff7eb3', icon: '🎨' },
  { label: 'Adobe XD', color: '#63d3ff', icon: '✦' },
  { label: 'UI/UX Design', color: '#9b7eff', icon: '🧩' },
  { label: 'Prototyping', color: '#ff7eb3', icon: '🔗' },
];

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: ['#63d3ff', '#9b7eff', '#ff7eb3'][Math.floor(Math.random() * 3)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,211,255,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(99,211,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(155,126,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 5%',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }} className="hero-grid">
        {/* Left Content */}
        <div style={{ animation: 'fadeInUp 0.8s ease both' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(99,211,255,0.08)',
            border: '1px solid rgba(99,211,255,0.2)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '28px',
            fontSize: '13px',
            color: 'var(--accent)',
            fontWeight: '500',
            letterSpacing: '0.05em',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            AVAILABLE FOR WORK
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: '800',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            marginBottom: '10px',
          }}>
            Mobile Dev
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: '800',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '24px',
          }}>
            & UI/UX Designer
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 1.5vw, 18px)',
            color: 'var(--text-2)',
            lineHeight: '1.7',
            maxWidth: '480px',
            marginBottom: '40px',
          }}>
            Hi, I'm <strong style={{ color: 'var(--text)' }}>Josh</strong> — a Mobile Developer & UI/UX Designer based in Manila, PH. I build cross-platform apps with <strong style={{ color: 'var(--text)' }}>Flutter</strong> and craft intuitive interfaces using <strong style={{ color: 'var(--text)' }}>Figma</strong>, from fintech to e-commerce.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'var(--gradient)',
                color: '#09090e',
                padding: '14px 32px',
                borderRadius: '100px',
                fontWeight: '700',
                fontSize: '15px',
                transition: 'var(--transition)',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 12px 40px rgba(99,211,255,0.3)'; }}
              onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = ''; }}
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                color: 'var(--text)',
                padding: '14px 32px',
                borderRadius: '100px',
                fontWeight: '600',
                fontSize: '15px',
                border: '1px solid var(--border)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'transparent'; }}
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '32px' }}>
            {[
              { num: '3+', label: 'Years Experience' },
              { num: '10+', label: 'Projects Done' },
              { num: '4', label: 'Companies' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '800', background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-3)', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile card */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          animation: 'fadeInUp 0.8s 0.2s ease both',
        }}>
          {/* Avatar */}
          <div style={{
            position: 'relative',
            width: '220px',
            height: '220px',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              background: 'var(--gradient)',
              animation: 'spin 8s linear infinite',
              opacity: 0.7,
            }} />
            <div style={{
              position: 'absolute',
              inset: '3px',
              borderRadius: '50%',
              background: 'var(--bg-3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '80px',
            }}>
              👨‍💻
            </div>
          </div>

          {/* Skills grid */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '24px',
            width: '100%',
            maxWidth: '400px',
          }}>
            <p style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--text-3)', marginBottom: '16px', textTransform: 'uppercase', fontWeight: '600' }}>Core Stack</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {SKILLS.map(skill => (
                <div key={skill.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'var(--bg-3)',
                  border: `1px solid ${skill.color}22`,
                  borderRadius: '10px',
                  padding: '10px 14px',
                  transition: 'var(--transition)',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${skill.color}55`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = `${skill.color}22`}
                >
                  <span style={{ fontSize: '16px' }}>{skill.icon}</span>
                  <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-2)' }}>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
