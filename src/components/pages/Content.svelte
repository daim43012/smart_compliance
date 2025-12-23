<script lang="ts">
  import type { PageData } from "../../routes/content/$types";
  import Hero from "./blog/Hero.svelte";
  import BlogContent from "./blog/Content.svelte";

  export let data: PageData;
</script>

<Hero />
<BlogContent {data} />
