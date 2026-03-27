import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// ⚙️ CONFIGURATION — Replace these with your EmailJS credentials
// 1. Create account at https://www.emailjs.com
// 2. Create a service (Gmail, Outlook, etc.) → get SERVICE_ID
// 3. Create an email template → get TEMPLATE_ID
// 4. Get your PUBLIC_KEY from Account > API Keys
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const SOCIALS = [
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/yourusername', color: '#63d3ff' },
  { label: 'Figma', icon: '✦', href: 'https://figma.com/@yourusername', color: '#9b7eff' },
  { label: 'LinkedIn', icon: '◈', href: 'https://linkedin.com/in/yourusername', color: '#ff7eb3' },
  { label: 'Dribbble', icon: '●', href: 'https://dribbble.com/yourusername', color: '#63d3ff' },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [focused, setFocused] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: 'var(--bg-3)',
    border: `1px solid ${errors[field] ? '#ff6b6b' : focused === field ? 'rgba(99,211,255,0.4)' : 'var(--border)'}`,
    borderRadius: '12px',
    padding: '14px 18px',
    color: 'var(--text)',
    fontSize: '15px',
    fontFamily: 'var(--font-body)',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxShadow: focused === field ? '0 0 0 3px rgba(99,211,255,0.08)' : 'none',
  });

  return (
    <section id="contact" style={{
      padding: '100px 5%',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(99,211,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '12px' }}>
          ✦ LET'S TALK
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: '800',
          letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-2)', fontSize: '17px', maxWidth: '480px', margin: '0 auto' }}>
          Have a project in mind? Let's build something amazing together.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: '32px',
        alignItems: 'start',
      }} className="contact-grid">
        {/* Left — contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Info card */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '28px',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>
              Direct Contact
            </h3>
            {[
              { icon: '📧', label: 'Email', value: 'Joshuayasol11@gmail.com', href: 'mailto:Joshuayasol11@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+63 929 111 6506', href: 'tel:+639291116506' },
              { icon: '📍', label: 'Location', value: 'Quezon City, Philippines', href: null },
              { icon: '🕐', label: 'Response Time', value: 'Within 24 hours', href: null },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{
                  width: '38px', height: '38px',
                  background: 'var(--bg-3)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0,
                }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: '11px', color: 'var(--text-3)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: '14px', color: 'var(--accent)', fontWeight: '500' }}>{item.value}</a>
                  ) : (
                    <p style={{ fontSize: '14px', color: 'var(--text-2)', fontWeight: '500' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '24px',
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-3)', marginBottom: '16px', fontWeight: '600' }}>Find me on</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {SOCIALS.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--bg-3)',
                    border: `1px solid ${social.color}22`,
                    borderRadius: '12px',
                    padding: '12px 14px',
                    transition: 'var(--transition)',
                    color: 'var(--text-2)',
                    fontSize: '13px',
                    fontWeight: '500',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${social.color}55`;
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.background = `${social.color}08`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = `${social.color}22`;
                    e.currentTarget.style.color = 'var(--text-2)';
                    e.currentTarget.style.background = 'var(--bg-3)';
                  }}
                >
                  <span style={{ fontSize: '16px', color: social.color }}>{social.icon}</span>
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability badge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(99,211,255,0.08) 0%, rgba(155,126,255,0.08) 100%)',
            border: '1px solid rgba(99,211,255,0.2)',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            <div style={{
              width: '10px', height: '10px',
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 12px #4ade80',
              animation: 'pulse 2s infinite',
              flexShrink: 0,
            }} />
            <div>
              <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '2px' }}>Available for Projects</p>
              <p style={{ color: 'var(--text-3)', fontSize: '12px' }}>Open for freelance & full-time roles</p>
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          padding: '36px',
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', marginBottom: '28px' }}>
            Send a Message
          </h3>

          {status === 'success' ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              animation: 'fadeInUp 0.5s ease',
            }}>
              <div style={{
                width: '72px', height: '72px',
                background: 'rgba(74,222,128,0.12)',
                border: '1px solid rgba(74,222,128,0.3)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '32px',
              }}>✓</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700' }}>Message Sent!</h4>
              <p style={{ color: 'var(--text-2)', fontSize: '15px' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                style={{
                  marginTop: '8px',
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--text-2)',
                  padding: '10px 24px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  transition: 'var(--transition)',
                }}
              >Send Another</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-2)', marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    placeholder="John Doe"
                    style={inputStyle('name')}
                  />
                  {errors.name && <p style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-2)', marginBottom: '8px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    placeholder="john@example.com"
                    style={inputStyle('email')}
                  />
                  {errors.email && <p style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-2)', marginBottom: '8px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                  placeholder="Project Inquiry"
                  style={inputStyle('subject')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-2)', marginBottom: '8px' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder="Tell me about your project..."
                  rows={5}
                  style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '140px' }}
                />
                {errors.message && <p style={{ color: '#ff6b6b', fontSize: '12px', marginTop: '4px' }}>{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div style={{
                  background: 'rgba(255,107,107,0.1)',
                  border: '1px solid rgba(255,107,107,0.3)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  color: '#ff6b6b',
                  fontSize: '14px',
                }}>
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  background: status === 'sending' ? 'var(--surface-2)' : 'var(--gradient)',
                  color: status === 'sending' ? 'var(--text-3)' : '#09090e',
                  padding: '16px',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '15px',
                  transition: 'var(--transition)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginTop: '4px',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,211,255,0.3)'; } }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                {status === 'sending' ? (
                  <>
                    <span style={{ display: 'inline-block', animation: 'spin 1s linear infinite' }}>◌</span>
                    Sending...
                  </>
                ) : (
                  <>Send Message →</>
                )}
              </button>

              <p style={{ fontSize: '12px', color: 'var(--text-3)', textAlign: 'center' }}>
                Powered by EmailJS · Your data is never stored or shared
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
