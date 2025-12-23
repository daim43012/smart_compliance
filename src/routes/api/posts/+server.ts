import type { RequestHandler } from "@sveltejs/kit";
import { json, error } from "@sveltejs/kit";
import prisma from "$lib/prisma";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();

  const title = String(body.title ?? "").trim();
  if (!title) throw error(400, "title is required");

  const content = body.content;
  if (!content || typeof content !== "object") {
    throw error(400, "content (TipTap JSON) is required");
  }

  const slug = String(body.slug ?? slugify(title)).trim();
  if (!slug) throw error(400, "slug is required");

  const exists = await prisma.post.findUnique({ where: { slug } });
  if (exists) throw error(409, "slug already exists");

  const post = await prisma.post.create({
    data: {
      slug,
      title,
      excerpt: body.excerpt ?? null,
      content,
      eventImage: body.eventImage ?? null,
      speakers: body.speakers ?? null,
      ...(body.createdAt ? { createdAt: new Date(body.createdAt) } : {}),
    },
  });

  return json(post, { status: 201 });
};
