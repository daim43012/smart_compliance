<script lang="ts">
  import Hero from "./blog/Hero.svelte";
  import Post from "./blog/Post.svelte";

  export let data;
</script>

<Hero />
<Post {data} />
