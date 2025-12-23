import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import prisma from "$lib/prisma";
import type { JSONContent } from "@tiptap/core";

type Speaker = { name: string; photo?: string };

function parseSpeakers(input: unknown): Speaker[] {
  if (!Array.isArray(input)) return [];

  const out: Speaker[] = [];

  for (const x of input) {
    if (!x || typeof x !== "object") continue;

    const obj = x as Record<string, unknown>;
    const name = typeof obj.name === "string" ? obj.name.trim() : "";
    if (!name) continue;

    const photoRaw = typeof obj.photo === "string" ? obj.photo.trim() : "";
    const photo = photoRaw ? photoRaw : undefined;

    out.push({ name, photo });
  }

  return out;
}

export const load: PageServerLoad = async ({ params }) => {
  const slug = params.name;

  // 1️⃣ Текущий пост
  const post = await prisma.post.findUnique({
    where: { slug }
  });

  if (!post) throw error(404, "Post not found");

  // 2️⃣ Read more — все остальные посты
  const readMore = await prisma.post.findMany({
    where: {
      slug: { not: slug }
    },
    orderBy: {
      createdAt: "desc"
    },
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      eventImage: true,
      createdAt: true,
      speakers: true
    }
  });

  return {
    post: {
      ...post,
      speakers: parseSpeakers(post.speakers),
      content: post.content as JSONContent
    },

    readMore: readMore.map((p) => ({
      ...p,
      speakers: parseSpeakers(p.speakers)
    }))
  };
};
