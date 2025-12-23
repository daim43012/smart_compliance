<section class="section">
	<div class="container">
		<h2 class="title">Our Partners</h2>

		<div class="grid">
			<a
				href="https://cryptovalley.swiss/"
				target="_blank"
				rel="noopener noreferrer"
				class="item"
			>
				<img src="/assets/images/partners/partner1.png" alt="Crypto Valley" />
			</a>

			<a
				href="https://www.21analytics.ch/"
				target="_blank"
				rel="noopener noreferrer"
				class="item"
			>
				<img src="/assets/images/partners/partner2.png" alt="21 Analytics" />
			</a>

			<a
				href="https://www.21analytics.ch/"
				target="_blank"
				rel="noopener noreferrer"
				class="item"
			>
				<img src="/assets/images/partners/partner3.png" alt="21 Analytics" />
			</a>

			<a
				href="https://zazoon.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="item"
			>
				<img src="/assets/images/partners/partner4.svg" alt="Zazoon" />
			</a>

			<a
				href="https://sumsub.com/"
				target="_blank"
				rel="noopener noreferrer"
				class="item"
			>
				<img src="/assets/images/partners/partner5.png" alt="Sumsub" />
			</a>

			<a
				href="https://nodegate.io/"
				target="_blank"
				rel="noopener noreferrer"
				class="item"
			>
				<img src="/assets/images/partners/partner6.jpeg" alt="NodeGate" />
			</a>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 72px 0 64px;
		background: #fff;
		font-family: var(--cc-font-family);
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 32px;
	}

	.title {
		font-size: 28px;
		font-weight: 700;
		color: #012245;
		margin: 0 0 36px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 48px 56px;
		align-items: center;
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px;
		transition: transform 160ms ease, opacity 160ms ease;
	}

	.item:hover {
		transform: translateY(-2px);
		opacity: 0.9;
	}

	.item img {
		max-width: 220px;
		max-height: 80px;
		object-fit: contain;
		filter: grayscale(100%);
		opacity: 0.85;
		transition: filter 160ms ease, opacity 160ms ease;
	}

	.item:hover img {
		filter: grayscale(0%);
		opacity: 1;
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 36px;
		}
	}

	@media (max-width: 600px) {
		.container {
			padding: 0 18px;
		}

		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
