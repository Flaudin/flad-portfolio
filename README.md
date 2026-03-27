# 🚀 Portfolio — Mobile Dev & UI/UX Designer

A modern, single-page portfolio built with React. Sections: Home, Projects, Resume, Contact.

## ⚡ Quick Start

```bash
npm install
npm start
```

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Repository
3. Framework: **Create React App** (auto-detected)
4. Click **Deploy** ✅

## 📧 Setting Up Contact Form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject line
   - `{{message}}` — message body
4. Open `src/components/Contact.jsx` and replace:
   ```js
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```

## 🎨 Customization

### Personal Info
- **Hero:** `src/components/Hero.jsx` — name, title, bio, stats
- **Projects:** `src/components/Projects.jsx` — `PROJECTS` array
- **Resume:** `src/components/Resume.jsx` — `EXPERIENCE`, `EDUCATION`, `SKILLS_LIST`
- **Contact:** `src/components/Contact.jsx` — email, location, social links

### Resume PDF
- Place your resume PDF at `public/resume.pdf`
- The Download button will link to it automatically

### Colors / Theme
- Edit CSS variables in `src/index.css`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Resume.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.js
├── index.js
└── index.css
public/
├── index.html
└── resume.pdf  ← add your PDF here
vercel.json
package.json
```

## 🛠 Tech Stack
- **React 18** — UI framework
- **EmailJS** — Contact form submissions
- **Framer Motion** — (optional, ready to integrate)
- **Lucide React** — Icons
- **Google Fonts** — Syne + DM Sans
- **Vercel** — Hosting
