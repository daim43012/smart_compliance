<script lang="ts">
	let slides = [
		{
			tag: 'BLOG',
			title: 'Tokenization in El Salvador: Unlocking Global Asset Opportunities',
			link: '/'
		},
		{
			tag: 'EVENT',
			title: 'Regulatory Updates for Fintech Companies in 2025',
			link: '/'
		},
		{
			tag: 'NEWS',
			title: 'Compliance Trends Shaping the European Market',
			link: '/'
		}
	];

	let index = 0;

	function prev() {
		index = (index - 1 + slides.length) % slides.length;
	}

	function next() {
		index = (index + 1) % slides.length;
	}
</script>

<section class="section">
	<div class="container">
		<h2 class="title">Explore our current news and events</h2>

		<div class="slider">
			<button class="arrow left" on:click={prev} aria-label="Previous slide">
				‹
			</button>

			<div class="slide">
				<div class="overlay">
					<span class="tag">{slides[index].tag}</span>
					<h3 class="slideTitle">{slides[index].title}</h3>
					<a class="readMore" href={slides[index].link}>READ MORE</a>
				</div>
			</div>

			<button class="arrow right" on:click={next} aria-label="Next slide">
				›
			</button>
		</div>

		<div class="dots">
			{#each slides as _, i}
				<span class:active={i === index} />
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding: 56px 0 64px;
		font-family: var(--cc-font-family);
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 32px;
	}

	.title {
		margin: 0 0 28px;
		font-size: 28px;
		font-weight: 700;
		color: #012245;
	}

	.slider {
		position: relative;
		display: flex;
		align-items: center;
	}

	.slide {
		flex: 1;
		height: 360px;
		border-radius: 14px;
		overflow: hidden;
		background: linear-gradient(
			135deg,
			#0a2540,
			#0e3a5f
		); 
		position: relative;
	}

	.overlay {
		position: absolute;
		inset: 0;
		padding: 32px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.55) 0%,
			rgba(0, 0, 0, 0.25) 40%,
			rgba(0, 0, 0, 0) 70%
		);
		color: #fff;
	}

	.tag {
		font-size: 12px;
		font-weight: 700;
		color: #00b2ff;
		margin-bottom: 10px;
	}

	.slideTitle {
		margin: 0 0 14px;
		font-size: 22px;
		line-height: 1.25;
		max-width: 680px;
	}

	.readMore {
		font-size: 13px;
		font-weight: 700;
		color: #fff;
		text-decoration: none;
	}

	.readMore:hover {
		text-decoration: underline;
	}

	.arrow {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		border: 1px solid rgba(255, 255, 255, 0.6);
		background: rgba(1, 34, 69, 0.9);
		color: #fff;
		font-size: 22px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 2;
	}

	.arrow.left {
		left: -20px;
	}

	.arrow.right {
		right: -20px;
	}

	.arrow:hover {
		background: #012245;
	}

	.dots {
		margin-top: 14px;
		display: flex;
		justify-content: center;
		gap: 8px;
	}

	.dots span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #cfd8e3;
		opacity: 0.6;
	}

	.dots span.active {
		background: #012245;
		opacity: 1;
	}

	@media (max-width: 900px) {
		.slide {
			height: 280px;
		}

		.arrow.left {
			left: 6px;
		}

		.arrow.right {
			right: 6px;
		}
	}

	@media (max-width: 600px) {
		.container {
			padding: 0 18px;
		}

		.slideTitle {
			font-size: 18px;
		}
	}
</style>
