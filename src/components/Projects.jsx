import React, { useState } from 'react';

const PROJECTS = [
  // Mobile Projects (Flutter)
  {
    id: 1,
    type: 'mobile',
    title: 'Stork.ph',
    subtitle: 'E-Commerce Mobile App',
    description: 'Cross-platform e-commerce app for iOS, Android, and Web built with Flutter. Integrated REST APIs (C# .NET), GPS device features, and deployed to both Apple Store and Google Play.',
    tags: ['Flutter', 'C# .NET', 'REST API', 'GPS', 'Google Play'],
    color: '#63d3ff',
    emoji: '🛍️',
    gradient: 'linear-gradient(135deg, #0a2a3a 0%, #0d1a2d 100%)',
    links: { live: 'https://play.google.com/store/apps/details?id=ph.stork&hl=en_US&gl=US' },
    featured: true,
  },
  {
    id: 2,
    type: 'mobile',
    title: 'Pulz Mobile',
    subtitle: 'Banking & Loan App (RCBC)',
    description: 'Mobile banking and loan application for RCBC via Vertere Global Solutions. Built a Motorcycle Loan webview sub-app within the Pulz ecosystem, deployed on Android.',
    tags: ['Flutter', 'Banking', 'Webview', 'RCBC', 'Google Play'],
    color: '#9b7eff',
    emoji: '🏦',
    gradient: 'linear-gradient(135deg, #1a1035 0%, #0d0a2d 100%)',
    links: { live: 'https://play.google.com/store/apps/details?id=com.rcbc.pulz&pcampaignid=web_share' },
  },
  {
    id: 3,
    type: 'mobile',
    title: 'BSB App',
    subtitle: 'E-Commerce Mobile (Company)',
    description: 'Cross-platform e-commerce Flutter application developed at Golden Suntec Solutions Inc. Responsible for frontend Flutter development and UI component implementation.',
    tags: ['Flutter', 'Dart', 'E-Commerce', 'Mobile'],
    color: '#ff7eb3',
    emoji: '📦',
    gradient: 'linear-gradient(135deg, #2a0a1a 0%, #1a0d1a 100%)',
    links: {},
  },
  {
    id: 4,
    type: 'mobile',
    title: 'CARS Retail',
    subtitle: 'Windows Desktop App (Company)',
    description: 'Full-stack Windows application developed using C# WinForms at Golden Suntec Solutions. Handled both frontend and backend integration for retail operations management.',
    tags: ['C#', '.NET', 'WinForms', 'Full Stack'],
    color: '#63d3ff',
    emoji: '🖥️',
    gradient: 'linear-gradient(135deg, #0a2a1a 0%, #0a1a0d 100%)',
    links: {},
  },
  // UI/UX Projects (Figma)
  {
    id: 5,
    type: 'uiux',
    title: 'Stork.ph UI/UX',
    subtitle: 'E-Commerce Design · Intellismart',
    description: 'UI/UX design for the Stork.ph e-commerce platform. Conducted user research, created wireframes and high-fidelity prototypes in Figma, and collaborated closely with developers for implementation.',
    tags: ['Figma', 'User Research', 'Prototyping', 'E-Commerce'],
    color: '#9b7eff',
    emoji: '🎨',
    gradient: 'linear-gradient(135deg, #1a1035 0%, #0d1828 100%)',
    links: { figma: 'https://www.figma.com/file/eEUfojMK2AOho3WR6NU2Fx/Storks-Project-Draft' },
  },
  {
    id: 6,
    type: 'uiux',
    title: 'E-Barangay PH',
    subtitle: 'Government Project UI/UX',
    description: 'UI/UX design and frontend development for a government digital service platform. Designed user flows, wireframes, and interactive prototypes to streamline barangay services.',
    tags: ['Figma', 'UI/UX', 'Government', 'Frontend'],
    color: '#63d3ff',
    emoji: '🏛️',
    gradient: 'linear-gradient(135deg, #0a1a2a 0%, #0a2030 100%)',
    links: { figma: 'https://www.figma.com/file/udk15rszlSIqxhOZblyFf4/E-Barangay-PH' },
  },
  {
    id: 7,
    type: 'uiux',
    title: 'CodeHub PH',
    subtitle: 'Landing Page UI Design',
    description: 'Organization project UI design for CodeHub PH landing page. Created a clean, developer-focused design with a modern aesthetic and clear information hierarchy.',
    tags: ['Figma', 'Landing Page', 'UI Design', 'Branding'],
    color: '#ff7eb3',
    emoji: '💻',
    gradient: 'linear-gradient(135deg, #2a0a1a 0%, #1a0d1a 100%)',
    links: { figma: 'https://www.figma.com/file/8i2t81R8ZVfWQK6LryjowY/CodeHub-Page' },
  },
  {
    id: 8,
    type: 'uiux',
    title: 'El De Pizza',
    subtitle: 'Restaurant Case Study',
    description: 'Personal case study UI/UX design for a pizza restaurant app. Focused on visual appeal, intuitive ordering flow, and brand identity through a warm and appetizing design language.',
    tags: ['Figma', 'Case Study', 'Food & Beverage', 'Mobile UI'],
    color: '#9b7eff',
    emoji: '🍕',
    gradient: 'linear-gradient(135deg, #1a0a35 0%, #2a0a3a 100%)',
    links: { figma: '#', case: '#' },
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: project.gradient,
        border: `1px solid ${project.color}22`,
        borderRadius: '20px',
        padding: '28px',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? `0 24px 60px ${project.color}18, 0 0 0 1px ${project.color}33` : 'none',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        animation: `fadeInUp 0.6s ${index * 0.07}s ease both`,
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '52px', height: '52px',
          background: `${project.color}18`,
          border: `1px solid ${project.color}33`,
          borderRadius: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '24px',
        }}>
          {project.emoji}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {project.links.github && (
            <a href={project.links.github} style={{
              width: '32px', height: '32px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', transition: 'var(--transition)',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >⌥</a>
          )}
          {project.links.figma && (
            <a href={project.links.figma} style={{
              width: '32px', height: '32px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', transition: 'var(--transition)',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >✦</a>
          )}
          <a href={project.links.live || project.links.case || '#'} style={{
            width: '32px', height: '32px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', transition: 'var(--transition)',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >↗</a>
        </div>
      </div>

      <div>
        <p style={{ fontSize: '11px', color: project.color, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '4px' }}>
          {project.subtitle}
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
          {project.title}
        </h3>
      </div>

      <p style={{ fontSize: '14px', color: 'var(--text-2)', lineHeight: '1.65', flexGrow: 1 }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            background: `${project.color}12`,
            border: `1px solid ${project.color}25`,
            color: project.color,
            padding: '4px 10px',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.03em',
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.type === activeTab);

  return (
    <section id="projects" style={{ padding: '100px 5%', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '12px' }}>
          ✦ MY WORK
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: '800',
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
          marginBottom: '16px',
        }}>
          Featured Projects
        </h2>
        <p style={{ color: 'var(--text-2)', fontSize: '17px', maxWidth: '500px', margin: '0 auto' }}>
          A mix of mobile apps and UI/UX case studies — from concept to delivery.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '6px',
        marginBottom: '48px',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '100px',
        padding: '5px',
        width: 'fit-content',
        margin: '0 auto 48px',
      }}>
        {[
          { key: 'all', label: 'All Projects', count: 8 },
          { key: 'mobile', label: '📱 Mobile Apps', count: 4 },
          { key: 'uiux', label: '🎨 UI/UX Design', count: 4 },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              background: activeTab === tab.key ? 'var(--bg-3)' : 'transparent',
              color: activeTab === tab.key ? 'var(--text)' : 'var(--text-3)',
              padding: '9px 20px',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: activeTab === tab.key ? '600' : '500',
              transition: 'var(--transition)',
              border: activeTab === tab.key ? '1px solid var(--border)' : '1px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            {tab.label}
            <span style={{
              background: activeTab === tab.key ? 'var(--accent)' : 'var(--surface-2)',
              color: activeTab === tab.key ? '#09090e' : 'var(--text-3)',
              width: '20px', height: '20px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: '11px',
              fontWeight: '700',
            }}>{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
