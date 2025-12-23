<script lang="ts">
  import type { PageData } from "./$types";
  import Post from "../../../components/pages/Post.svelte";

  export let data: PageData;
</script>

<Post {data} />
