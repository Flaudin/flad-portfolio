import React from 'react';

const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border)',
    padding: '32px 5%',
    background: 'var(--bg)',
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '28px', height: '28px',
          background: 'var(--gradient)',
          borderRadius: '7px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '12px', fontWeight: '800', color: '#09090e',
          fontFamily: 'var(--font-display)',
        }}>J</div>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '15px' }}>josh.dev</span>
      </div>

      <p style={{ color: 'var(--text-3)', fontSize: '13px' }}>
        © {new Date().getFullYear()} · Built with React & ❤️ · Deployed on Vercel
      </p>

      <div style={{ display: 'flex', gap: '16px' }}>
        {['Home', 'Projects', 'Resume', 'Contact'].map(link => (
          <button
            key={link}
            onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'none',
              color: 'var(--text-3)',
              fontSize: '13px',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
          >{link}</button>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
