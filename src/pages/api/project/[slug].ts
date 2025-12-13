import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { container } from '../../../core/di/container';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const slug = params.slug;
    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const projectService = container.getProjectService();
    const projects = await projectService.getAll();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get full content from Content Collection
    const entries = await getCollection('projects');
    const entry = entries.find((e) => e.slug === slug);

    if (!entry) {
      return new Response(JSON.stringify({ error: 'Project content not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Render the MDX content to HTML
    const { Content } = await entry.render();
    
    // We need to render the Content component to HTML string
    // For now, we'll return the project data and let the client render it
    // Or we can use a different approach
    
    return new Response(JSON.stringify({
      project,
      content: entry.body || '',
      html: '', // Will be populated if needed
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

