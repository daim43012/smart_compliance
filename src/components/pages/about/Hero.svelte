<section class="hero" aria-label="Hero">
  <video class="video" autoplay muted loop playsinline preload="auto">
    <source src="/assets/video/butterfly.mp4" type="video/mp4" />
  </video>

  <div class="overlay" />

  <div class="container">
    <div class="content">
      <h1 class="title">About</h1>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    width: 100%;
    min-height: 560px;
    display: flex;
    align-items: center;
    overflow: hidden;
    font-family: var(--cc-font-family);
  }

  .video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }

  .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.55) 35%,
      rgba(0, 0, 0, 0.2) 65%,
      rgba(0, 0, 0, 0.05) 100%
    );
  }

  .container {
    position: relative;
    z-index: 2;
    max-width: 1400px;
    margin: 0 auto;
    padding: 90px 32px;
    width: 100%;
  }

  .content {
    max-width: 560px;
    color: #fff;
  }

  .title {
    margin: 0;
    font-size: 52px;
    line-height: 1.15;
    font-weight: 800;
    letter-spacing: 0.2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .video {
      display: none;
    }

    .hero {
      background: #00162e;
    }
	  .video {
      object-position: 81% center;
    }
  }
  @media (max-width: 900px) {
    .hero {
      min-height: 460px;
    }

    .container {
      padding: 70px 18px;
    }

    .title {
      font-size: 36px;
    }
    .video {
      object-position: 81% center;
    }
  }
</style>
