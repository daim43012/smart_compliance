<script lang="ts">
  import type { PageData } from "../../../routes/content/[name]/$types";

  import { generateHTML } from "@tiptap/html";
  import StarterKit from "@tiptap/starter-kit";
  import Link from "@tiptap/extension-link";

  import { Table } from "@tiptap/extension-table";
  import { TableRow } from "@tiptap/extension-table-row";
  import { TableHeader } from "@tiptap/extension-table-header";
  import { TableCell } from "@tiptap/extension-table-cell";
  import Image from "@tiptap/extension-image";
  import Youtube from "@tiptap/extension-youtube";

  export let data: PageData;

  type Speaker = { name: string; photo?: string };

  // ✅ реактивные переменные, чтобы всё обновлялось при переходах
  let post: PageData["post"];
  let readMore: PageData["readMore"];
  let speakers: Speaker[] = [];
  let dateText = "";
  let html = "";

  $: post = data.post;
  $: readMore = data.readMore ?? [];

  $: speakers = (post?.speakers ?? []) as Speaker[];
  $: dateText = post?.createdAt
    ? new Date(post.createdAt).toLocaleDateString()
    : "";

  $: html = post?.content
    ? generateHTML(post.content, [
        StarterKit,
        Link.configure({ openOnClick: true }),
        Table.configure({ resizable: true }),
        TableRow,
        TableHeader,
        TableCell,
        Image,
        Youtube,
      ])
    : "";

  const initials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join("");
</script>

<section class="section">
  <div class="container">
    <a class="back" href="/content">← Back to Content</a>

    <h1 class="title">{post.title}</h1>

    <div class="meta">
      <span>{dateText}</span>

      {#if speakers.length}
        <span class="dot">•</span>
        <span>{speakers.map((s) => s.name).join(", ")}</span>
      {/if}
    </div>

    {#if post.eventImage}
      <img class="cover" src={post.eventImage} alt={post.title} />
    {/if}

    {#if speakers.length}
      <div class="speakerRow">
        {#each speakers as sp (sp.name)}
          <div class="sp">
            {#if sp.photo}
              <img src={sp.photo} alt={sp.name} />
            {:else}
              <div class="avatarFallback" aria-label={sp.name}>
                {initials(sp.name)}
              </div>
            {/if}
            <div class="spMeta">
              <div class="spName">by {sp.name}</div>
            </div>
          </div>
        {/each}
      </div>
    {/if}

    <div class="content">
      {@html html}
    </div>
    {#if readMore.length}
      <div class="readMore">
        <h2 class="readMoreTitle">Read more</h2>

        <ul class="readMoreList">
          {#each readMore as item (item.slug)}
            <li class="readMoreItem">
              <a href={`/content/${item.slug}`} class="readMoreLink">
                {item.title}
              </a>

              {#if item.speakers?.length}
                <div class="readMoreSpeakers">
                  {item.speakers.map((s) => s.name).join(", ")}
                </div>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</section>

<style>
  .section {
    padding: 72px 0;
    background: #fff;
    font-family: var(--cc-font-family);
  }

  .container {
    max-width: 980px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .back {
    display: inline-block;
    margin: 0 0 14px;
    color: #012245;
    text-decoration: none;
    font-weight: 700;
    opacity: 0.9;
  }

  .title {
    font-size: 32px;
    font-weight: 800;
    color: #012245;
    margin: 0 0 8px;
    line-height: 1.18;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    margin: 0 0 18px;
  }

  .dot {
    opacity: 0.5;
  }

  .cover {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
    margin: 0 0 16px;
    max-height: 420px;
  }

  .speakerRow {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    background: rgba(1, 34, 69, 0.03);
    margin: 0 0 24px;
  }

  .sp {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 14px;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .sp img {
    width: 80px;
    height: 80px;
    border-radius: 999px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .avatarFallback {
    width: 80px;
    height: 80px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    font-size: 14px;
    font-weight: 900;
    color: #012245;
    background: rgba(1, 34, 69, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.12);
    user-select: none;
  }

  .spMeta {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  .spName {
    font-size: 16px;
    font-weight: 800;
    color: #012245;
  }

  .content :global(p) {
    margin: 0 0 12px;
    font-size: 16px;
    line-height: 1.75;
    color: #111;
  }

  .content :global(h2) {
    margin: 22px 0 10px;
    font-size: 22px;
    font-weight: 800;
    color: #012245;
  }

  .content :global(h3) {
    margin: 16px 0 10px;
    font-size: 18px;
    font-weight: 800;
    color: #012245;
  }

  .content :global(a) {
    color: #012245;
    text-decoration: underline;
  }

  .content :global(ul) {
    margin: 10px 0 14px 22px;
  }

  .content :global(li) {
    margin: 0 0 6px;
  }

  .content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .content :global(th),
  .content :global(td) {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 10px;
    vertical-align: top;
    font-size: 14px;
  }

  .content :global(th) {
    background: rgba(1, 34, 69, 0.06);
    font-weight: 800;
    color: #012245;
  }

  @media (max-width: 700px) {
    .container {
      padding: 0 18px;
    }

    .title {
      font-size: 28px;
    }

    .sp {
      width: 100%;
    }
  }
  .readMore {
    margin-top: 56px;
    padding-top: 26px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .readMoreTitle {
    margin: 0 0 18px;
    font-size: 22px;
    font-weight: 800;
    color: #0a0a0a;
  }

  .readMoreList {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .readMoreItem + .readMoreItem {
    margin-top: 18px;
  }

  .readMoreLink {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    color: #0a0a0a;
    text-decoration: none;
    line-height: 1.25;
  }

  .readMoreLink:hover {
    text-decoration: underline;
  }

  .readMoreSpeakers {
    margin-top: 6px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.55);
  }
  .content :global(p:has(img)) {
    margin: 0;
  }

  .content :global(img) {
    width: 100%;
    height: auto;
    border-radius: 14px;
    display: block;
    margin: 10px 0;
  }

  .content :global(.galleryGrid) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 14px 0;
  }

  @media (max-width: 900px) {
    .content :global(.galleryGrid) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    .content :global(.galleryGrid) {
      grid-template-columns: 1fr;
    }
  }
</style>
