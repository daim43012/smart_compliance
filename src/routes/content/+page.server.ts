import type { PageServerLoad } from "./$types";
import  prisma from "$lib/prisma";

type Speaker = { name: string; photo: string };

export const load: PageServerLoad = async () => {
  const raw = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      eventImage: true,
      speakers: true,
      createdAt: true
    }
  });

  const posts = raw.map((p) => ({
    ...p,
    speakers: Array.isArray(p.speakers) ? (p.speakers as Speaker[]) : ([] as Speaker[])
  }));

  return { posts };
};
