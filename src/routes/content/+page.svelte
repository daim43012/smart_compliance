<script lang="ts">
  import type { PageData } from "./$types";
  import Content from "../../components/pages/Content.svelte";
  export let data: PageData;
</script>

<Content {data} />
