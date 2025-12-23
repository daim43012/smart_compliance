<section class="hero" aria-label="Hero">
	<video
		class="video"
		autoplay
		muted
		loop
		playsinline
		preload="auto"
	>
		<source src="/assets/video/butterfly.mp4" type="video/mp4" />
	</video>

	<div class="overlay" />

	<div class="container">
		<div class="content">
			<h1 class="title">
				Empowering Growth Through<br />
				Compliance &amp; Efficiency
			</h1>

			<div class="line" />

			<p class="text">
				We provide support to start-ups, small and middle-size businesses in complying
				with regulatory standards and building an efficient business structure
			</p>
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

	.line {
		margin: 22px 0 18px;
		height: 1px;
		width: 100%;
		max-width: 520px;
		background: rgba(255, 255, 255, 0.35);
	}

	.text {
		margin: 0;
		font-size: 16px;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.85);
		max-width: 520px;
	}

	@media (prefers-reduced-motion: reduce) {
		.video {
			display: none;
		}

		.hero {
			background: #00162e;
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
	}
</style>
