import React, { useState } from 'react';

const EXPERIENCE = [
  {
    role: 'Mobile Developer (Flutter)',
    company: 'Vertere Global Solutions · Client: RCBC',
    period: 'Aug 2025 — Dec 2025',
    type: 'Contract',
    description: 'Developed the Motorcycle Loan webview sub-application within the Pulz Mobile App for RCBC. Conducted UX research for banking/loan mobile applications and collaborated with project managers and developers.',
    tags: ['Flutter', 'Banking', 'Webview', 'RCBC', 'Pulz Mobile'],
    color: '#63d3ff',
    location: 'Salcedo Village, Makati City',
  },
  {
    role: 'Mobile Developer (Flutter · E-Commerce)',
    company: 'Golden Suntec Solutions Inc',
    period: 'Jul 2023 — Jun 2025',
    type: 'Full-time',
    description: 'Built BSB App — a cross-platform e-commerce app for iOS, Android, and Web using Flutter. Also developed CARS Retail (C# WinForms desktop). Integrated REST APIs, deployed to Apple Store and Google Play, collaborated with QA and backend teams.',
    tags: ['Flutter', 'Dart', 'C# .NET', 'REST API', 'WinForms', 'iOS', 'Android'],
    color: '#9b7eff',
    location: 'Ortigas Centre, Pasig City',
  },
  {
    role: 'UI/UX Designer',
    company: 'Intellismart Technology Inc · Stork.ph',
    period: 'Oct 2022 — Mar 2023',
    type: 'Full-time',
    description: 'Designed the Stork.ph e-commerce platform UI/UX. Conducted user research, created wireframes, mockups, and high-fidelity Figma prototypes. Collaborated with developers and marketing for implementation.',
    tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'User Research'],
    color: '#ff7eb3',
    location: 'West Ave, Quezon City',
  },
  {
    role: 'Intern — Front End Developer / Database Management',
    company: 'City Planning Department · Quezon City Hall',
    period: 'Mar 2023 — Jul 2023',
    type: 'Internship',
    description: 'Front-end development and database management for the city planning department. Assisted in maintaining internal web systems and government digital service tools.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Database', 'Government'],
    color: '#63d3ff',
    location: 'Quezon City Hall',
  },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Asian College Quezon City',
    period: '2018 — 2022',
    honors: 'Best Thesis Award · June 2022',
    color: '#63d3ff',
  },
  {
    degree: 'Senior High School — Computer Programming',
    school: 'Asian College Quezon City',
    period: '2016 — 2018',
    honors: '',
    color: '#9b7eff',
  },
];

const SKILLS_LIST = {
  'Mobile Development': {
    items: ['Flutter', 'Dart', 'Bloc', 'React Native', 'REST API Integration', 'GPS / Device Features', 'Google Play Deployment', 'Apple Store Deployment'],
    color: '#63d3ff',
  },
  'UI/UX Design': {
    items: ['Figma', 'Adobe XD', 'Wireframing', 'High-Fidelity Prototyping', 'User Research', 'User Flows', 'Design Systems'],
    color: '#9b7eff',
  },
  'Web & Desktop Dev': {
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'C#', '.NET', 'WinForms', 'IIS Deployment'],
    color: '#ff7eb3',
  },
  'Creative Tools': {
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'DaVinci Resolve'],
    color: '#63d3ff',
  },
};

const CERTS = [
  { name: 'Best Thesis Award', org: 'Asian College, Quezon City', year: 'Jun 2022' },
  { name: 'National Certificate II — Computer System Servicing', org: 'TESDA Quezon City', year: 'Dec 2019' },
  { name: 'Y4IT 18th Youth Congress on Information Technology', org: 'UP ITDC, Quezon City', year: 'Nov–Dec 2020' },
  { name: 'The Youth Forum — Transforming Education', org: 'QCX Museum Event Halls', year: 'Aug 2019' },
  { name: 'Techtutor 11 — The Millennial Entrepreneurship', org: 'SM Megamall, Mandaluyong', year: '2019' },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { key: 'experience', label: 'Experience', icon: '💼' },
    { key: 'skills', label: 'Skills', icon: '⚡' },
    { key: 'education', label: 'Education', icon: '🎓' },
  ];

  return (
    <section id="resume" style={{ padding: '100px 5%', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(155,126,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '12px' }}>
              ✦ MY BACKGROUND
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '800', letterSpacing: '-0.03em' }}>
              Resume
            </h2>
          </div>
          <a
            href="/resume.pdf"
            download="CV_Yasol_Joshua.pdf"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--gradient)', color: '#09090e',
              padding: '12px 24px', borderRadius: '100px',
              fontWeight: '700', fontSize: '14px', transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,211,255,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            <span>↓</span> Download PDF
          </a>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', gap: '6px', marginBottom: '40px',
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '16px', padding: '6px', width: 'fit-content',
        }}>
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
              background: activeTab === tab.key ? 'var(--bg)' : 'transparent',
              color: activeTab === tab.key ? 'var(--text)' : 'var(--text-3)',
              padding: '10px 22px', borderRadius: '11px', fontSize: '14px',
              fontWeight: activeTab === tab.key ? '600' : '500', transition: 'var(--transition)',
              display: 'flex', alignItems: 'center', gap: '8px',
              border: activeTab === tab.key ? '1px solid var(--border)' : '1px solid transparent',
            }}>
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'experience' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '20px', padding: '28px 32px',
                transition: 'var(--transition)', borderLeft: `3px solid ${exp.color}`,
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--surface-2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '19px', fontWeight: '700', letterSpacing: '-0.01em' }}>{exp.role}</h3>
                      <span style={{ background: `${exp.color}18`, color: exp.color, padding: '2px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: '600' }}>{exp.type}</span>
                    </div>
                    <p style={{ color: exp.color, fontSize: '14px', fontWeight: '600', marginBottom: '2px' }}>{exp.company}</p>
                    <p style={{ color: 'var(--text-3)', fontSize: '12px', marginBottom: '12px' }}>📍 {exp.location}</p>
                  </div>
                  <span style={{ color: 'var(--text-3)', fontSize: '13px', fontWeight: '500', whiteSpace: 'nowrap' }}>{exp.period}</span>
                </div>
                <p style={{ color: 'var(--text-2)', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>{exp.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{ background: 'var(--bg-3)', border: '1px solid var(--border)', color: 'var(--text-2)', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: '500' }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {Object.entries(SKILLS_LIST).map(([category, { items, color }]) => (
              <div key={category} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', marginBottom: '20px', color }}>{category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {items.map(skill => (
                    <span key={skill} style={{ background: `${color}10`, border: `1px solid ${color}25`, color: 'var(--text-2)', padding: '6px 14px', borderRadius: '8px', fontSize: '13px', fontWeight: '500', transition: 'var(--transition)', cursor: 'default' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = `${color}55`; e.currentTarget.style.color = color; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}25`; e.currentTarget.style.color = 'var(--text-2)'; }}
                    >{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {EDUCATION.map((edu, i) => (
              <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px 32px', borderLeft: `3px solid ${edu.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', marginBottom: '6px' }}>{edu.degree}</h3>
                    <p style={{ color: edu.color, fontWeight: '600', marginBottom: '8px' }}>{edu.school}</p>
                    {edu.honors && <span style={{ background: `${edu.color}18`, color: edu.color, padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: '600' }}>🏅 {edu.honors}</span>}
                  </div>
                  <span style={{ color: 'var(--text-3)', fontSize: '14px' }}>{edu.period}</span>
                </div>
              </div>
            ))}

            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '20px', padding: '28px 32px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: 'var(--accent-2)' }}>Certifications & Seminars</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
                {CERTS.map((cert, i) => (
                  <div key={i} style={{ background: 'var(--bg-3)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px', transition: 'var(--transition)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(99,211,255,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <div style={{ fontSize: '22px', marginBottom: '8px' }}>🏅</div>
                    <p style={{ fontWeight: '600', fontSize: '13px', marginBottom: '4px', lineHeight: '1.4' }}>{cert.name}</p>
                    <p style={{ color: 'var(--text-3)', fontSize: '12px' }}>{cert.org}</p>
                    <p style={{ color: 'var(--accent)', fontSize: '11px', marginTop: '4px', fontWeight: '600' }}>{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
