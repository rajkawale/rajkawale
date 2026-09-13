# Project Structure

This document outlines the custom microservices-inspired architecture for the Astro 5.0 project.

## Directory Structure

```
rajkawale/
├── src/
│   ├── domains/                    # Domain-Driven Design structure
│   │   ├── portfolio/
│   │   │   ├── entities.ts        # Project interface with metrics array
│   │   │   ├── repository.ts      # IProjectRepository interface
│   │   │   └── service.ts         # PortfolioService business logic
│   │   ├── blog/
│   │   │   ├── entities.ts
│   │   │   ├── repository.ts
│   │   │   └── service.ts
│   │   └── linkedin/
│   │       ├── entities.ts
│   │       ├── repository.ts
│   │       └── service.ts
│   ├── infrastructure/
│   │   └── content-layer/
│   │       └── ProjectContentRepository.ts  # Astro Content Collections implementation
│   ├── core/
│   │   └── di/
│   │       └── container.ts       # Dependency injection container
│   ├── components/
│   │   ├── ProjectCard.astro      # Brutalist design card component
│   │   ├── Clarity.astro          # Microsoft Clarity with Partytown
│   │   ├── SEO.astro              # SEO meta tags component
│   │   └── BaseLayout.astro       # Base layout with Clarity & SEO
│   ├── pages/
│   │   └── index.astro            # Portfolio listing page
│   └── content/
│       └── projects/
│           └── madhav-farm.mdx    # Sample project MDX file
├── content.config.ts               # Astro Content Collections config with Zod
├── astro.config.mjs                # Astro config with Tailwind & Partytown
├── tsconfig.json                   # Strict TypeScript config
└── package.json                    # Dependencies
```

## Architecture Principles

### Domain-Driven Design (DDD)
- **Entities**: Domain models/interfaces (`entities.ts`)
- **Repositories**: Data access interfaces (`repository.ts`)
- **Services**: Business logic layer (`service.ts`)

### Dependency Injection
- Centralized DI container in `src/core/di/container.ts`
- Lazy initialization of repositories and services
- Easy to swap implementations (e.g., switch from Content Collections to API)

### Infrastructure Layer
- Content Collections implementation in `src/infrastructure/content-layer/`
- Separates domain logic from framework-specific code
- Easy to add other data sources (APIs, databases, etc.)

## Key Files

### Portfolio Domain Entity
**File**: `src/domains/portfolio/entities.ts`
- Defines `Project` interface with `metrics` array
- `Metric` interface with `label` and `value` properties

### Content Repository
**File**: `src/infrastructure/content-layer/ProjectContentRepository.ts`
- Implements `IProjectRepository` interface
- Uses `getCollection('projects')` from Astro
- Maps Content Collection entries to domain entities

### Content Configuration
**File**: `content.config.ts`
- Defines `projects` collection schema using Zod
- Validates frontmatter structure
- Supports optional fields (coverImage, description)

## Shell Commands Reference

If you need to recreate the folder structure manually:

```bash
# Create domain folders
mkdir -p src/domains/portfolio
mkdir -p src/domains/blog
mkdir -p src/domains/linkedin

# Create infrastructure folder
mkdir -p src/infrastructure/content-layer

# Create core utilities
mkdir -p src/core/di

# Create component folders (if needed)
mkdir -p src/components

# Create content folders
mkdir -p src/content/projects
```

Note: All files have already been created with the proper structure and code.

