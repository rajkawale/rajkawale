import { g as getCollection } from '../../../chunks/_astro_content_DFbWQ2k5.mjs';
import { c as container } from '../../../chunks/container_D5zjtpvj.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ params }) => {
  try {
    const slug = params.slug;
    if (!slug) {
      return new Response(JSON.stringify({ error: "Slug is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const projectService = container.getProjectService();
    const projects = await projectService.getAll();
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return new Response(JSON.stringify({ error: "Project not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const entries = await getCollection("projects");
    const entry = entries.find((e) => e.slug === slug);
    if (!entry) {
      return new Response(JSON.stringify({ error: "Project content not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { Content } = await entry.render();
    return new Response(JSON.stringify({
      project,
      content: entry.body || "",
      html: ""
      // Will be populated if needed
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
