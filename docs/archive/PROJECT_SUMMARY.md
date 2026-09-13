# Project Summary - Raj Kawale Portfolio Website

## Overview
Built a complete Astro 5.0 portfolio website with a custom microservices-inspired architecture, featuring a brutalist design, contact form integration, and analytics.

---

## ✅ Step 1: Project Initialization & Architecture

### Directory Structure Created
```
src/
├── domains/                    # Domain-Driven Design structure
│   ├── portfolio/
│   │   ├── entities.ts        # Project interface with metrics array
│   │   ├── repository.ts      # IProjectRepository interface
│   │   └── service.ts         # PortfolioService business logic
│   ├── blog/
│   │   ├── entities.ts
│   │   ├── repository.ts
│   │   └── service.ts
│   └── linkedin/
│       ├── entities.ts
│       ├── repository.ts
│       └── service.ts
├── infrastructure/
│   └── content-layer/
│       └── ProjectContentRepository.ts  # Astro Content Collections implementation
├── core/
│   └── di/
│       └── container.ts       # Dependency injection container
├── components/
│   ├── ProjectCard.astro      # Brutalist design card component
│   ├── Clarity.astro          # Microsoft Clarity with Partytown
│   ├── SEO.astro              # SEO meta tags component
│   ├── BaseLayout.astro       # Base layout with Clarity & SEO
│   └── ContactForm.astro      # Formspree contact form
├── pages/
│   ├── index.astro            # Portfolio listing page
│   └── contact.astro          # Contact page
└── content/
    └── projects/
        └── madhav-farm.mdx    # Sample project MDX file
```

### Key Files Created

#### Domain Entities (`src/domains/portfolio/entities.ts`)
- `Project` interface with:
  - `id: string`
  - `title: string`
  - `role: string`
  - `metrics: Metric[]` (array with label and value)
  - `coverImage?: string`
  - `description?: string`
- `Metric` interface with `label` and `value` properties

#### Dependency Injection (`src/core/di/container.ts`)
- Simple DI container for managing dependencies
- Lazy initialization of repositories and services
- Easy to swap implementations

---

## ✅ Step 2: Portfolio Domain & Repository Pattern

### Content Configuration (`content.config.ts`)
- Defined `projects` collection using Astro Content Collections
- Zod schema validation for:
  - `title` (required string)
  - `role` (required string)
  - `metrics` (array of objects with label and value)
  - `coverImage` (optional string)
  - `description` (optional string)

### Sample Project (`src/content/projects/madhav-farm.mdx`)
- MDX file with frontmatter:
  - Title: "Madhav Farm"
  - Role: "Founder & CEO"
  - Metrics:
    - Team Size: 8 people
    - Revenue: 8 Lakh
    - Impact: Agri-tech Startup
  - Description about founding the startup

### Repository Implementation (`src/infrastructure/content-layer/ProjectContentRepository.ts`)
- Implements `IProjectRepository` interface
- Uses `getCollection('projects')` from Astro Content Collections
- Maps Content Collection entries to domain entities
- Methods:
  - `getAll()`: Returns all projects
  - `getById(id)`: Returns a specific project by ID

---

## ✅ Step 3: UI Implementation with Tailwind

### ProjectCard Component (`src/components/ProjectCard.astro`)
- **Brutalist Design Features:**
  - Black and white color scheme
  - Heavy 4px black borders
  - Uppercase, bold typography
  - Minimalist layout
  - Hover effects (scale transform)
- **Displays:**
  - Project title (large, bold, uppercase)
  - Role (semibold)
  - Description (if available)
  - Cover image (if available) with border
  - Metrics strip at bottom showing key results

### Index Page (`src/pages/index.astro`)
- Uses `BaseLayout` component
- Fetches projects via DI container
- Responsive grid layout:
  - 1 column on mobile
  - 3 columns on desktop
- Displays all projects as cards

---

## ✅ Step 4: Analytics & SEO

### Microsoft Clarity Integration (`src/components/Clarity.astro`)
- **Measurement ID:** `ugkqsj83mt`
- Uses Partytown integration to load script off main thread
- Preserves performance by running in a web worker
- Integrated into `BaseLayout` for site-wide tracking

### SEO Component (`src/components/SEO.astro`)
- **Features:**
  - Primary meta tags (title, description)
  - OpenGraph tags (Facebook/LinkedIn)
  - Twitter Card tags
  - Canonical URL
  - Supports custom images for social sharing
- **Props:**
  - `title` (required)
  - `description` (optional)
  - `image` (optional)
  - `url` (optional)

### BaseLayout Component (`src/components/BaseLayout.astro`)
- Wraps all pages with consistent structure
- Includes SEO meta tags
- Includes Clarity analytics
- Provides `<slot />` for page content

---

## ✅ Additional Features Implemented

### Contact Form (`src/components/ContactForm.astro`)
- **Formspree Endpoint:** `https://formspree.io/f/mldykebp`
- **Fields:**
  - Name (required)
  - Email (required)
  - Message (required)
- **Design:**
  - Matches brutalist theme
  - Black borders and white background
  - Hover effects on submit button
  - Focus states with ring effects
- **Features:**
  - Hidden spam protection field
  - Custom subject line
  - Accessible labels

### Contact Page (`src/pages/contact.astro`)
- Dedicated page at `/contact`
- Uses `BaseLayout`
- Includes the contact form
- Descriptive header text

---

## 📦 Configuration Files

### `package.json`
- **Dependencies:**
  - `astro@^5.0.0`
  - `@astrojs/tailwind@^5.0.0`
  - `@astrojs/partytown@^2.1.4`
  - `zod@^3.22.4`
- **Dev Dependencies:**
  - `typescript@^5.3.3`
  - `@types/node@^20.10.0`
- **Scripts:**
  - `npm run dev` - Starts dev server with `--host` flag
  - `npm run build` - Production build
  - `npm run preview` - Preview production build

### `astro.config.mjs`
- Tailwind CSS integration
- Partytown integration (for Clarity analytics)
- Configured for optimal performance

### `tsconfig.json`
- Strict TypeScript configuration
- Path aliases configured (`@/*`)
- Extends Astro's strict config

### `content.config.ts`
- Content Collections configuration
- Zod schema validation for projects

---

## 🎨 Design System

### Brutalist Design Principles
- **Colors:** Black (#000) and White (#FFF) only
- **Borders:** 4px solid black borders
- **Typography:**
  - Uppercase headings
  - Bold, heavy fonts
  - Tight letter spacing
- **Layout:**
  - Minimal spacing
  - Grid-based layouts
  - Clear hierarchy

### Responsive Breakpoints
- Mobile: 1 column layout
- Desktop (md+): 3 column grid layout
- Uses Tailwind's responsive utilities

---

## 🚀 How to Use

### Development
```bash
npm install
npm run dev
```
Server runs on `http://localhost:4321`

### Adding New Projects
1. Create a new MDX file in `src/content/projects/`
2. Add frontmatter matching the schema:
```mdx
---
title: "Project Name"
role: "Your Role"
metrics:
  - label: "Metric Label"
    value: "Metric Value"
description: "Project description"
coverImage: "/images/project.jpg"
---

# Project Name
Your content here...
```

### Building for Production
```bash
npm run build
npm run preview
```

---

## 📊 Features Summary

✅ Custom domain-driven architecture  
✅ Repository pattern implementation  
✅ Dependency injection container  
✅ Astro Content Collections with Zod validation  
✅ Brutalist UI design  
✅ Responsive grid layout  
✅ Microsoft Clarity analytics (ID: ugkqsj83mt)  
✅ SEO optimization (OpenGraph, Twitter Cards)  
✅ Contact form with Formspree integration  
✅ TypeScript strict mode  
✅ Tailwind CSS styling  
✅ Partytown for performance  

---

## 🔧 Issues Fixed

1. **Invalid Experimental Feature:** Removed `serverIslands` from config (not available in Astro 5.0)
2. **Network Binding:** Added `--host` flag to dev script for IPv4/IPv6 compatibility
3. **Partytown Version:** Updated to correct version (2.1.4) that exists on npm

---

## 📝 Next Steps (Optional Enhancements)

- Add more project examples
- Implement blog domain functionality
- Add LinkedIn posts integration
- Create project detail pages
- Add image optimization
- Implement dark mode toggle
- Add animations/transitions
- Set up CI/CD pipeline

---

**Project Status:** ✅ Fully Functional
**Server:** Running on http://localhost:4321
**Analytics:** Active (Microsoft Clarity)
**Contact Form:** Connected to Formspree

