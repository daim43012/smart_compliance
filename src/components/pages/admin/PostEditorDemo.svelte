<script lang="ts">
  import RichEditor from "./RichEditor.svelte";


  type Speaker = { name: string; photo: string };

  let title = "";
  let excerpt = "";
  let slug = "";
  let createdAt = ""; // optional: "2025-12-23"
  let eventImage = "";

  let speakers: Speaker[] = [];
  let speakerName = "";
  let speakerPhoto = "";

  let contentJson: any = null;

  let uploadingEvent = false;
  let uploadingSpeaker = false;
  let saving = false;

  function makeSlug(s: string) {
    return s
      .toLowerCase()
      .trim()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  $: if (!slug && title) slug = makeSlug(title);

  async function uploadFile(file: File): Promise<string> {
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload", { method: "POST", body: fd });
    if (!res.ok) throw new Error(await res.text());

    const data = await res.json();
    return data.url as string; // "/media/..."
  }

  async function onEventFileChange(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    uploadingEvent = true;
    try {
      eventImage = await uploadFile(file);
    } catch (err: any) {
      alert(err?.message ?? "Upload error");
    } finally {
      uploadingEvent = false;
      input.value = "";
    }
  }

  async function onSpeakerFileChange(e: Event) {
    const input = e.currentTarget as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    uploadingSpeaker = true;
    try {
      speakerPhoto = await uploadFile(file);
    } catch (err: any) {
      alert(err?.message ?? "Upload error");
    } finally {
      uploadingSpeaker = false;
      input.value = "";
    }
  }

  function addSpeaker() {
    const name = speakerName.trim();
    const photo = speakerPhoto.trim();
    if (!name) return alert("Speaker name is required");
    if (!photo) return alert("Speaker photo URL is required (upload or paste)");

    speakers = [...speakers, { name, photo }];
    speakerName = "";
    speakerPhoto = "";
  }

  function removeSpeaker(idx: number) {
    speakers = speakers.filter((_, i) => i !== idx);
  }

  async function savePost() {
    if (!title.trim()) return alert("Title is required");
    if (!contentJson) return alert("Content is required");

    saving = true;
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim(),
          excerpt: excerpt.trim() || null,
          createdAt: createdAt ? new Date(createdAt).toISOString() : null,
          eventImage: eventImage || null,
          speakers,
          content: contentJson
        })
      });

      if (!res.ok) throw new Error(await res.text());
      const saved = await res.json();

      alert(`Saved! slug: ${saved.slug}`);
      // хочешь — редирект:
      // location.href = `/blog/${saved.slug}`;
    } catch (err: any) {
      alert(err?.message ?? "Save error");
    } finally {
      saving = false;
    }
  }
</script>

<section class="section">
  <div class="container">
    <div class="grid">
      <!-- LEFT: Form -->
      <div class="content">
        <h1 class="title">Create Post</h1>

        <div class="field">
          <label>Title</label>
          <input bind:value={title} placeholder="Post title" />
        </div>

        <div class="row">
          <div class="field">
            <label>Slug</label>
            <input bind:value={slug} placeholder="post-slug" />
          </div>

          <div class="field">
            <label>Date (optional)</label>
            <input bind:value={createdAt} type="date" />
          </div>
        </div>

        <div class="field">
          <label>Excerpt (optional)</label>
          <textarea bind:value={excerpt} placeholder="Short text for the card..." />
        </div>

        <div class="field">
          <label>Event image</label>

          <div class="uploadRow">
            <input type="file" accept="image/*" on:change={onEventFileChange} />
            {#if uploadingEvent}
              <span class="muted">Uploading...</span>
            {/if}
          </div>

          <input
            bind:value={eventImage}
            placeholder="or paste URL like /media/..."
          />

          {#if eventImage}
            <img class="previewImg" src={eventImage} alt="Event preview" />
          {/if}
        </div>

        <div class="field">
          <label>Speakers</label>

          <div class="row">
            <input bind:value={speakerName} placeholder="Speaker name" />
            <input bind:value={speakerPhoto} placeholder="Speaker photo URL (/media/...)" />
          </div>

          <div class="uploadRow">
            <input type="file" accept="image/*" on:change={onSpeakerFileChange} />
            <button type="button" class="btn" on:click={addSpeaker} disabled={uploadingSpeaker}>
              Add speaker
            </button>
            {#if uploadingSpeaker}
              <span class="muted">Uploading...</span>
            {/if}
          </div>

          {#if speakers.length}
            <div class="speakersList">
              {#each speakers as sp, i}
                <div class="speakerItem">
                  <img src={sp.photo} alt={sp.name} />
                  <div class="speakerMeta">
                    <div class="speakerName">{sp.name}</div>
                    <div class="speakerUrl">{sp.photo}</div>
                  </div>
                  <button type="button" class="danger" on:click={() => removeSpeaker(i)}>Remove</button>
                </div>
              {/each}
            </div>
          {/if}
        </div>

        <div class="field">
          <label>Content</label>
          <RichEditor onChange={(json) => (contentJson = json)} />
        </div>

        <div class="actions">
          <button class="primary" type="button" on:click={savePost} disabled={saving}>
            {saving ? "Saving..." : "Save Post"}
          </button>
        </div>
      </div>

      <!-- RIGHT: quick preview card -->
      <div class="side">
        <h2 class="subtitle">Card Preview</h2>

        <div class="card">
          {#if eventImage}
            <img class="cardImg" src={eventImage} alt={title || "Post"} />
          {/if}

          <div class="cardBody">
            <div class="cardTitle">{title || "Post title..."}</div>
            <div class="cardDate">
              {createdAt ? new Date(createdAt).toLocaleDateString() : "—"}
            </div>

            {#if excerpt}
              <div class="cardText">{excerpt}</div>
            {/if}

            {#if speakers.length}
              <div class="avatars">
                {#each speakers as sp}
                  <img src={sp.photo} alt={sp.name} title={sp.name} />
                {/each}
              </div>
            {/if}
          </div>
        </div>

        <p class="muted">
          Фото сохраняются как URL вида <strong>/media/...</strong> через upload.
        </p>
      </div>
    </div>
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

  .grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 32px;
    align-items: start;
  }

  .title {
    font-size: 28px;
    font-weight: 700;
    color: #012245;
    margin: 0 0 18px;
  }

  .subtitle {
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 700;
    color: #012245;
  }

  .field {
    margin: 0 0 14px;
  }

  .field label {
    display: block;
    margin: 0 0 6px;
    font-weight: 700;
    color: #012245;
    font-size: 14px;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    padding: 12px;
    font-size: 15px;
    outline: none;
    font-family: var(--cc-font-family);
  }

  textarea {
    min-height: 90px;
    resize: vertical;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .uploadRow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
    flex-wrap: wrap;
  }

  .btn,
  .primary,
  .danger {
    border: 1px solid rgba(1, 34, 69, 0.2);
    background: #fff;
    padding: 10px 12px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 700;
    color: #012245;
  }

  .primary {
    background: #012245;
    color: #fff;
    border-color: #012245;
  }

  .danger {
    color: #b00020;
    border-color: rgba(176, 0, 32, 0.35);
  }

  .actions {
    margin-top: 16px;
  }

  .muted {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
  }

  .previewImg {
    width: 100%;
    max-width: 520px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
    margin-top: 10px;
  }

  .side {
    position: sticky;
    top: 18px;
  }

  .card {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  }

  .cardImg {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .cardBody {
    padding: 14px;
  }

  .cardTitle {
    font-weight: 800;
    color: #012245;
    font-size: 18px;
    margin: 0 0 6px;
  }

  .cardDate {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 10px;
  }

  .cardText {
    font-size: 14px;
    line-height: 1.5;
    color: #111;
    margin-bottom: 12px;
  }

  .avatars {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .avatars img {
    width: 34px;
    height: 34px;
    border-radius: 999px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .speakersList {
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    padding: 10px;
  }

  .speakerItem {
    display: grid;
    grid-template-columns: 44px 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 8px 0;
  }

  .speakerItem + .speakerItem {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .speakerItem img {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  .speakerName {
    font-weight: 700;
    color: #012245;
  }

  .speakerUrl {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.55);
    word-break: break-all;
  }

  @media (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .side {
      position: static;
    }
    .row {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .container {
      padding: 0 18px;
    }
  }
</style>
