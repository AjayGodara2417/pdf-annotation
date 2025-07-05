# 📄 PDF Annotation Web App

A browser-based PDF annotation tool that enables real-time collaboration, text highlighting, commenting, and easy sharing — built with **Next.js**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Features

- ✨ Highlight text in various colors
- 💬 Add comments and annotations
- 👥 Collaborate in real-time
- 🔗 Share annotated PDFs with a link
- 📤 Upload and view PDFs directly in-browser

---

## 🧱 Folder Structure

📁 public/ # Static assets (images, icons)
├── file.svg <br>
├── globe.svg
├── HeroImg.png
├── next.svg
├── vercel.svg
├── window.svg

📁 src/
└── 📁 app/
├── layout.js # Root layout
├── page.js # Homepage
└── 📁 editor/
├── page.js # Editor page
├── favicon.ico
├── globals.css # Global styles (Only tailwind imported)

└── 📁 components/   # Reusable UI sections
    ├── CallToActionSection.js
    ├── FeaturesSection.js
    ├── Footer.js
    └── HeroSection.js

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: Vercel (https://vercel.com/)

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AjayGodara2417/pdf-annotation
cd pdf-annotation
```

Installation:
```bash
npm install
```

Run the server:
```bash
npm run dev
```
Then open http://localhost:3000 to see the app in action.