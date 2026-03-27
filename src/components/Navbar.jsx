import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'Projects', 'Resume', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 5%',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(9,9,14,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {/* Logo */}
        <div onClick={() => scrollTo('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'var(--gradient)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', fontWeight: '800',
            fontFamily: 'var(--font-display)',
          }}>
            <span style={{ color: '#09090e' }}>J</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '18px', letterSpacing: '-0.02em' }}>
            josh.dev
          </span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: activeSection === link.toLowerCase() ? 'rgba(99,211,255,0.1)' : 'transparent',
                color: activeSection === link.toLowerCase() ? 'var(--accent)' : 'var(--text-2)',
                border: activeSection === link.toLowerCase() ? '1px solid rgba(99,211,255,0.2)' : '1px solid transparent',
                padding: '8px 18px',
                borderRadius: '100px',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'var(--transition)',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                if (activeSection !== link.toLowerCase()) {
                  e.target.style.color = 'var(--text)';
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={e => {
                if (activeSection !== link.toLowerCase()) {
                  e.target.style.color = 'var(--text-2)';
                  e.target.style.background = 'transparent';
                }
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              marginLeft: '8px',
              background: 'var(--gradient)',
              color: '#09090e',
              padding: '9px 22px',
              borderRadius: '100px',
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            width: '40px', height: '40px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
          className="hamburger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '18px', height: '2px',
              background: 'var(--text-2)',
              borderRadius: '1px',
              transition: 'var(--transition)',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px', left: 0, right: 0,
          background: 'rgba(9,9,14,0.97)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          padding: '20px 5% 30px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: 'transparent',
                color: activeSection === link.toLowerCase() ? 'var(--accent)' : 'var(--text-2)',
                padding: '14px 0',
                fontFamily: 'var(--font-display)',
                fontSize: '22px',
                fontWeight: '600',
                textAlign: 'left',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            style={{
              marginTop: '16px',
              background: 'var(--gradient)',
              color: '#09090e',
              padding: '14px',
              borderRadius: '12px',
              fontFamily: 'var(--font-display)',
              fontSize: '16px',
              fontWeight: '700',
            }}
          >
            Hire Me →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
