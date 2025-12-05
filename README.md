# UM-Flint IDEAS Hub Website

<div align="center">

**Institute of Data Engineering, Analytics, and Science**

A modern, responsive website showcasing research initiatives, collaborative projects, and community partnerships at the University of Michigan-Flint.

[Live Website](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Design Philosophy](#design-philosophy)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

The **IDEAS Hub** (Institute of Data Engineering, Analytics, and Science) website serves as the digital gateway for UM-Flint's data science initiatives. This platform connects faculty, students, industry partners, and community organizations to collaborate on data-driven solutions that create meaningful impact.

The website features a modern, playful design inspired by contemporary web aesthetics, utilizing bold typography, tilted image frames, and vibrant yellow accent colors to create an engaging user experience.

---

## ✨ Features

### 🏠 **Homepage**
- Dynamic hero section with tilted image frame
- Mission statement and value propositions
- Service cards highlighting research coordination, community partnerships, and student development
- Comprehensive goals section

### 📊 **Projects**
- Showcase of 4+ active research projects
- Alternating image/content layout for visual interest
- Real project data including:
  - My Number DNA (K-12 educational analytics)
  - UM-Flint Herbarium Digitization
  - Matlacha Pass Water Quality Analysis
  - Flint River Watershed Monitoring
- External links to partner organizations

### 👥 **Advisory Board**
- Director profile with photo and biography
- 8 Advisory Board member profiles with circular photos
- Placeholder initials for members without uploaded photos
- Board responsibilities section

### 📜 **IDEAS Policy**
- Comprehensive research conduct guidelines
- 7 core guidelines with icons and descriptions
- FAIR principles (Findable, Accessible, Interoperable, Reusable)
- Compliance and security requirements
- Required training information

### 📢 **Call for Projects**
- Detailed submission guidelines
- 6 focus areas (ML, Data Visualization, BI, Healthcare, Policy Analysis, Cloud/AI)
- Eligibility criteria for partners
- Project requirements and timeline
- 5-step submission process
- Benefits of partnering section

### 📞 **Contact**
- Email, phone, and location information
- Quick links to all major sections
- Call-to-action buttons

---

## 🛠 Tech Stack

### **Frontend Framework**
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### **Styling**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable component library
- Custom CSS variables for theming

### **Development Tools**
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- [Biome](https://biomejs.dev/) - Fast linter and formatter
- [ESLint](https://eslint.org/) - Code quality

### **Deployment**
- [Netlify](https://www.netlify.com/) - Hosting and CI/CD

### **Fonts**
- [Barlow](https://fonts.google.com/specimen/Barlow) - Google Fonts

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Bun](https://bun.sh/) >= 1.0.0
- [Node.js](https://nodejs.org/) >= 18.0.0 (optional, if not using Bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/umflint-ideas.git
   cd umflint-ideas
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run the development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

The development server uses Turbopack for fast refresh and hot module replacement.

---

## 📁 Project Structure

```
umflint-ideas/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Homepage
│   │   ├── projects/
│   │   │   └── page.tsx            # Projects page
│   │   ├── advisory-board/
│   │   │   └── page.tsx            # Advisory Board page
│   │   ├── ideas-policy/
│   │   │   └── page.tsx            # IDEAS Policy page
│   │   ├── call-for-projects/
│   │   │   └── page.tsx            # Call for Projects page
│   │   ├── contact-us/
│   │   │   └── page.tsx            # Contact page
│   │   ├── layout.tsx               # Root layout
│   │   ├── globals.css              # Global styles
│   │   └── ClientBody.tsx           # Client-side body wrapper
│   ├── components/
│   │   ├── Header.tsx               # Navigation header
│   │   ├── Footer.tsx               # Footer component
│   │   └── ui/                      # shadcn/ui components
│   └── lib/
│       └── utils.ts                 # Utility functions
├── public/
│   ├── mohamed-mkaouer.jpg          # Director photo
│   ├── Heather_Dawson.jpeg          # Board member photos
│   ├── Marcus_Paroske.jpg
│   ├── Chris_Doglas.jpeg
│   ├── Greg_Rybarczyk.jpeg
│   └── Halil_Bisgin.jpeg
├── .same/
│   └── todos.md                     # Development todos
├── next.config.js                   # Next.js configuration
├── tailwind.config.ts               # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This file
```

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with Turbopack |
| `bun run build` | Build production bundle |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint for code quality |

### Adding New Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. To add a new component:

```bash
bunx shadcn@latest add -y -o [component-name]
```

### Environment Variables

No environment variables are required for basic functionality. Add a `.env.local` file for custom configurations:

```env
# Example
NEXT_PUBLIC_SITE_URL=https://ideas.umflint.edu
```

---

## 🌐 Deployment

### Netlify Deployment

This site is configured for deployment on Netlify:

1. **Connect Repository**
   - Link your GitHub repository to Netlify

2. **Build Settings**
   - Build command: `bun run build` or `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Push to main branch triggers automatic deployment

### Manual Deployment

```bash
# Build the project
bun run build

# The output will be in the .next directory
```

---

## 🎨 Design Philosophy

### Color Palette

- **Primary Navy**: `#0d2747` - Headers, text, and dark sections
- **Maize Yellow**: `#FFCB05` - Accent color, highlights, CTAs
- **Pink/Beige**: `#FDF6F0` - Section backgrounds
- **White**: `#FFFFFF` - Main background

### Typography

- **Font Family**: Barlow (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Style**: Bold, modern, highly legible

### Design Elements

- ✨ **Tilted Image Frames** - Playful, dynamic visual interest
- 🟡 **Yellow Highlights** - Draw attention to key phrases
- 📦 **Bold Bordered Cards** - Clear content separation
- 🎯 **Large Typography** - Emphasis on readability
- 🔄 **Hover Effects** - Interactive user experience

### Inspiration

The design draws inspiration from modern web trends, particularly the playful aesthetic of [michaleisik.com](https://www.michaleisik.com/), while maintaining professional credibility for an academic institution.

---

## 🤝 Contributing

We welcome contributions to improve the IDEAS Hub website!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is part of the University of Michigan-Flint and is proprietary. All rights reserved.

© 2025 The Regents of the University of Michigan

---

## 📧 Contact

**Institute of Data Engineering, Analytics, and Science**

- **Email**: [flint.ideas@umich.edu](mailto:flint.ideas@umich.edu)
- **Phone**: 810-762-3300
- **Address**: 303 E. Kearsley Street, Flint, MI 48502
- **Website**: [umflint.edu/ideas](https://www.umflint.edu/ideas/)

---

## 🙏 Acknowledgments

- **Design & Development**: Originally created in [SAME.dev](https://same.dev)
- **University of Michigan-Flint**: For supporting data science initiatives
- **Advisory Board**: For guidance and leadership
- **Community Partners**: For collaboration on research projects

---

<div align="center">

**Built with ❤️ for the UM-Flint community**

[Back to Top ↑](#um-flint-ideas-hub-website)

</div>
