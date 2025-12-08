# Setup Instructions

## Step 1: Initialize Astro Project

Run the following command to initialize Astro 5.0 with minimal template:

```bash
npm create astro@latest -- --template minimal
```

Or if you prefer to use the existing structure, just install dependencies:

```bash
npm install
```

## Step 2: Install Dependencies

All dependencies are already defined in `package.json`. Install them with:

```bash
npm install
```

## Step 3: Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_CLARITY_ID=your-clarity-measurement-id
```

## Step 4: Run Development Server

```bash
npm run dev
```

## Project Structure

```
src/
├── domains/              # Domain-driven design structure
│   ├── portfolio/        # Portfolio domain
│   │   ├── entities.ts   # Domain entities/interfaces
│   │   ├── repository.ts # Repository interfaces
│   │   └── service.ts    # Business logic
│   ├── blog/            # Blog domain
│   └── linkedin/        # LinkedIn domain
├── infrastructure/       # Infrastructure implementations
│   └── content-layer/   # Content Collections implementations
├── core/                # Core utilities
│   └── di/              # Dependency injection
├── components/          # Astro components
├── pages/               # Astro pages
└── content/             # Content files (MDX)
    └── projects/        # Project MDX files
```

## Adding New Projects

Create new MDX files in `src/content/projects/` with the following frontmatter structure:

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

Your project content here...
```

