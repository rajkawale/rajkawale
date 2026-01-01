import { g as getCollection } from './_astro_content_BGGyxQAG.mjs';
import { readFileSync } from 'fs';
import { join } from 'path';

class ProjectRepository {
  async getAll() {
    try {
      const entries = await getCollection("projects");
      console.log("📦 ProjectRepository: Found", entries.length, "entries from getCollection");
      console.log("📦 Entry slugs:", entries.map((e) => e.slug));
      if (entries.length === 0) {
        console.warn("⚠️ No projects found in collection. Check:");
        console.warn("  1. Files are in src/content/projects/");
        console.warn("  2. Files have .mdx or .md extension");
        console.warn("  3. Frontmatter matches the schema in content.config.ts");
        console.warn("  4. Restart the dev server after making changes");
      }
      const projects = entries.map((entry) => this.mapToDomain(entry));
      console.log("📦 Mapped projects:", projects.map((p) => ({ slug: p.slug, title: p.title, priority: p.priority })));
      return projects;
    } catch (error) {
      console.error("❌ ProjectRepository.getAll() error:", error);
      if (error instanceof Error) {
        console.error("❌ Error message:", error.message);
        console.error("❌ Error stack:", error.stack);
      }
      return [];
    }
  }
  async getBySlug(slug) {
    const entries = await getCollection("projects");
    const entry = entries.find((e) => e.slug === slug);
    return entry ? this.mapToDomain(entry) : null;
  }
  async getByStatus(status) {
    const entries = await getCollection("projects");
    return entries.filter((entry) => entry.data.status === status).map((entry) => this.mapToDomain(entry));
  }
  mapToDomain(entry) {
    try {
      const publishDate = typeof entry.data.publishDate === "string" ? new Date(entry.data.publishDate) : entry.data.publishDate;
      const project = {
        id: entry.id,
        slug: entry.slug,
        title: entry.data.title,
        description: entry.data.description,
        publishDate,
        status: entry.data.status,
        techStack: entry.data.techStack || [],
        repoUrl: entry.data.repoUrl,
        demoUrl: entry.data.demoUrl,
        thumbnail: entry.data.thumbnail,
        priority: entry.data.priority ?? 0,
        driveFileId: entry.data.driveFileId,
        content: entry.body || ""
      };
      console.log("✅ Mapped project:", entry.slug, "Priority:", project.priority);
      return project;
    } catch (error) {
      console.error("❌ Error mapping project:", entry.slug, error);
      throw error;
    }
  }
}

class BlogRepository {
  posts = [];
  async loadPosts() {
    try {
      const filePath = join(process.cwd(), "src", "data", "external", "blogger.json");
      const fileContent = readFileSync(filePath, "utf-8");
      const rawPosts = JSON.parse(fileContent);
      if (!Array.isArray(rawPosts)) {
        console.warn("Blogger.json does not contain an array");
        this.posts = [];
        return;
      }
      this.posts = rawPosts.map((post) => {
        const publishedDate = new Date(post.published);
        if (isNaN(publishedDate.getTime())) {
          console.warn(`Invalid date for post ${post.slug}: ${post.published}`);
          return null;
        }
        return {
          id: post.id || post.slug,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          publishedAt: publishedDate,
          coverImage: post.coverImage,
          tags: post.tags || [],
          canonicalUrl: post.canonicalUrl,
          category: post.category
        };
      }).filter((post) => post !== null);
      console.log(`Loaded ${this.posts.length} blog posts`);
    } catch (error) {
      console.error("Error loading Blogger.json:", error);
      this.posts = [];
    }
  }
  async getAll() {
    if (this.posts.length === 0) {
      await this.loadPosts();
    }
    return this.posts.sort(
      (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
    );
  }
  async getBySlug(slug) {
    if (this.posts.length === 0) {
      await this.loadPosts();
    }
    return this.posts.find((post) => post.slug === slug) || null;
  }
}

class LinkedInRepository {
  async getAll() {
    const entries = await getCollection("linkedin");
    return entries.map((entry) => this.mapToDomain(entry));
  }
  async getById(id) {
    const entries = await getCollection("linkedin");
    const entry = entries.find((e) => e.id === id);
    return entry ? this.mapToDomain(entry) : null;
  }
  mapToDomain(entry) {
    const date = typeof entry.data.date === "string" ? new Date(entry.data.date) : entry.data.date;
    return {
      id: entry.id,
      slug: entry.slug,
      title: entry.data.title,
      content: entry.body || "",
      publishedAt: date,
      tags: entry.data.tags || [],
      canonicalUrl: entry.data.canonicalUrl
    };
  }
}

class BlogService {
  constructor(repository) {
    this.repository = repository;
  }
  async getAllPosts() {
    return this.repository.getAll();
  }
  async getPostBySlug(slug) {
    return this.repository.getBySlug(slug);
  }
}

class ProjectService {
  constructor(repository) {
    this.repository = repository;
  }
  async getAll() {
    const projects = await this.repository.getAll();
    return projects.sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      return b.publishDate.getTime() - a.publishDate.getTime();
    });
  }
  async getFeatured() {
    const projects = await this.getAll();
    return projects.filter((p) => p.priority > 0).slice(0, 6);
  }
  async getBySlug(slug) {
    return this.repository.getBySlug(slug);
  }
  async getByStatus(status) {
    return this.repository.getByStatus(status);
  }
  async getLiveProjects() {
    return this.getByStatus("Live");
  }
  async getPrototypes() {
    return this.getByStatus("Prototype");
  }
  async getCaseStudies() {
    return this.getByStatus("Case Study");
  }
}

class LinkedInService {
  constructor(repository) {
    this.repository = repository;
  }
  async getAllPosts() {
    return this.repository.getAll();
  }
  async getPostById(id) {
    return this.repository.getById(id);
  }
}

class DIContainer {
  projectRepository = null;
  blogRepository = null;
  linkedInRepository = null;
  projectService = null;
  blogService = null;
  linkedInService = null;
  getProjectRepository() {
    if (!this.projectRepository) {
      this.projectRepository = new ProjectRepository();
    }
    return this.projectRepository;
  }
  getBlogRepository() {
    if (!this.blogRepository) {
      this.blogRepository = new BlogRepository();
    }
    return this.blogRepository;
  }
  getProjectService() {
    if (!this.projectService) {
      this.projectService = new ProjectService(this.getProjectRepository());
    }
    return this.projectService;
  }
  getBlogService() {
    if (!this.blogService) {
      this.blogService = new BlogService(this.getBlogRepository());
    }
    return this.blogService;
  }
  getLinkedInRepository() {
    if (!this.linkedInRepository) {
      this.linkedInRepository = new LinkedInRepository();
    }
    return this.linkedInRepository;
  }
  getLinkedInService() {
    if (!this.linkedInService) {
      this.linkedInService = new LinkedInService(this.getLinkedInRepository());
    }
    return this.linkedInService;
  }
}
const container = new DIContainer();

export { container as c };
