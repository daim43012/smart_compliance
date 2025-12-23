<script lang="ts">
  import { onDestroy } from "svelte";

  let mobileOpen = false;

  function toggle() {
    mobileOpen = !mobileOpen;
  }

  function close() {
    mobileOpen = false;
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
  }

  function lockBodyScroll(lock: boolean) {
    document.documentElement.style.overflow = lock ? "hidden" : "";
    document.body.style.overflow = lock ? "hidden" : "";
  }

  $: {
    if (typeof document !== "undefined") lockBodyScroll(mobileOpen);
  }

  onDestroy(() => {
    if (typeof document !== "undefined") lockBodyScroll(false);
  });

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/content", label: "Content Corner" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];
</script>

<svelte:window on:keydown={onKeydown} />

<header class="header">
  <div class="container">
    <a class="logo" href="/" aria-label="Go to home">
      <img src="/assets/images/katerina-logo.svg" alt="SMART-compliance" />
    </a>

    <nav class="nav" aria-label="Main navigation">
      {#each links as item}
        <a class="nav-link" href={item.href}>{item.label}</a>
      {/each}
    </nav>

    <div class="right">
      <a href="/subscribe" class="cta">Subscribe to our newsletter</a>

      <button
        class="burger"
        type="button"
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        on:click={toggle}
      >
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
      </button>
    </div>
  </div>

  {#if mobileOpen}
    <!-- Backdrop -->
    <button class="backdrop" aria-label="Close menu" on:click={close} />

    <div id="mobile-menu" class="mobile" role="dialog" aria-modal="true">
      <div class="mobile-top">
        <img
          class="mobile-logo"
          src="/assets/images/katerina-logo.svg"
          alt="SMART-compliance"
        />
        <button
          class="close"
          type="button"
          aria-label="Close menu"
          on:click={close}>✕</button
        >
      </div>

      <nav class="mobile-nav" aria-label="Mobile navigation">
        {#each links as item}
          <a class="mobile-link" href={item.href} on:click={close}
            >{item.label}</a
          >
        {/each}
      </nav>

      <a class="mobile-cta" href="/subscribe" on:click={close}>
        Subscribe to our newsletter
      </a>
    </div>
  {/if}
</header>

<style>
  .header {
    background: #012245;
    color: #fff;
    width: 100%;
    font-family: var(--cc-font-family);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  /* LOGO */
  .logo {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    text-decoration: none;
  }

  .logo img {
    height: 30px;
    display: block;
  }

  /* NAV */
  .nav {
    display: flex;
    align-items: center;
    gap: 28px;
    flex: 1;
    justify-content: center;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 15px;
    opacity: 0.9;
    padding: 8px 6px;
    border-radius: 10px;
    transition:
      opacity 140ms ease,
      background 140ms ease;
  }

  /* hover эффект (как ты просил) */
  .nav-link:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.08);
  }

  .right {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  /* CTA */
  .cta {
    color: #fff;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 999px;
    font-size: 14px;
    white-space: nowrap;
    transition:
      background 140ms ease,
      border-color 140ms ease;
  }

  .cta:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }

  .burger {
    display: none;
    width: 44px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: transparent;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0;
  }

  .burger:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.6);
  }

  .bar {
    display: block;
    width: 18px;
    height: 2px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 999px;
  }

  /* MOBILE MENU */
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    border: 0;
    padding: 0;
    margin: 0;
    z-index: 60;
  }

  .mobile {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(360px, 92vw);
    background: #011a35;
    z-index: 70;
    display: flex;
    flex-direction: column;
    padding: 18px 18px 22px;
    box-shadow: -20px 0 50px rgba(0, 0, 0, 0.35);
  }

  .mobile-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 18px;
  }

  .mobile-logo {
    height: 28px;
  }

  .close {
    width: 44px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    transition:
      background 140ms ease,
      border-color 140ms ease;
  }

  .close:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.6);
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 6px 0 14px;
  }

  .mobile-link {
    color: #fff;
    text-decoration: none;
    padding: 12px 12px;
    border-radius: 12px;
    opacity: 0.92;
    transition:
      background 140ms ease,
      opacity 140ms ease;
  }

  .mobile-link:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.08);
  }

  .mobile-cta {
    margin-top: auto;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    padding: 12px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    transition:
      background 140ms ease,
      border-color 140ms ease;
  }

  .mobile-cta:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .nav {
      display: none;
    }

    .cta {
      display: none;
    }

    .burger {
      display: inline-flex;
    }

    .container {
      padding: 14px 18px;
    }
  }
</style>
