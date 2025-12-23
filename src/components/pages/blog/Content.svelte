<script lang="ts">
  import type { PageData } from "../../../routes/content/$types";

  type Speaker = { name: string; photo: string };

  export let data: PageData;

  const posts = data.posts ?? [];

  const fmt = (d: Date) => d.toLocaleDateString();

  const speakersNames = (speakers: Speaker[]) => {
    if (!speakers?.length) return "";
    const head = speakers
      .slice(0, 2)
      .map((s) => s.name)
      .join(", ");
    const more = speakers.length > 2 ? ` +${speakers.length - 2}` : "";
    return head + more;
  };
</script>

<section class="section">
  <div class="container">
    <div class="head">
      <p class="sub">
        Welcome to our <strong>Content Corner</strong>, where knowledge meets compliance! Explore
        our latest articles dedicated to guiding start-ups, small businesses,
        and mid-size enterprises on the path to regulatory excellence. Discover
        invaluable insights on navigating regulatory standards and crafting
        efficient business structures. Stay informed, empowered, and ahead of
        the curve with our expert content designed to support your journey
        towards sustainable success.
      </p>
    </div>

    {#if !posts.length}
      <p class="empty">No posts yet.</p>
    {:else}
      <div class="grid">
        {#each posts as p}
          <a class="card" href={`/content/${p.slug}`}>
            {#if p.eventImage}
              <img class="img" src={p.eventImage} alt={p.title} />
            {:else}
              <div class="imgPlaceholder"></div>
            {/if}

            <div class="body">
              <div class="meta">{fmt(p.createdAt)}</div>
              <div class="cardTitle">{p.title}</div>

              {#if p.excerpt}
                <div class="text">{p.excerpt}</div>
              {/if}

              {#if p.speakers?.length}
                <div class="speakers">
                  <div class="avatars">
                    {#each p.speakers.slice(0, 5) as sp}
                      <img src={sp.photo} alt={sp.name} title={sp.name} />
                    {/each}
                  </div>

                  <div class="names">
                    {speakersNames(p.speakers)}
                  </div>
                </div>
              {/if}
            </div>
          </a>
        {/each}
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
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .head {
    margin: 0 0 22px;
  }

  .title {
    font-size: 30px;
    font-weight: 800;
    color: #012245;
    margin: 0 0 6px;
  }

  .sub {
    margin: 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
    line-height: 1.6;
  }

  .empty {
    color: rgba(0, 0, 0, 0.65);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .card {
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    text-decoration: none;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 55px rgba(0, 0, 0, 0.12);
  }

  .img {
    width: 100%;
    height: 210px;
    object-fit: cover;
    display: block;
  }

  .imgPlaceholder {
    height: 210px;
    background: linear-gradient(
      135deg,
      rgba(1, 34, 69, 0.08),
      rgba(0, 0, 0, 0.02)
    );
  }

  .body {
    padding: 14px 14px 16px;
  }

  .meta {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    margin: 0 0 6px;
  }

  .cardTitle {
    font-size: 18px;
    font-weight: 800;
    color: #012245;
    margin: 0 0 10px;
    line-height: 1.25;
  }

  .text {
    font-size: 14px;
    color: #111;
    line-height: 1.55;
    margin: 0 0 12px;
  }

  .speakers {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .avatars {
    display: flex;
    gap: 6px;
  }

  .avatars img {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .names {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.72);
    line-height: 1.2;
  }

  @media (max-width: 1100px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .container {
      padding: 0 18px;
    }
  }
</style>
