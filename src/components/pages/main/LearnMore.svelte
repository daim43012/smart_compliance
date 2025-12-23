<section class="section">
	<div class="container">
		<h2 class="title">Learn more</h2>

		<div class="grid">
			<article class="card">
				<div class="cardTop">
					<h3 class="cardTitle">Content corner</h3>
					<p class="cardText">
						Visit our blog for latest news<br />
						&amp; insights
					</p>
				</div>

				<a class="btn" href="/content">SEE MORE</a>
			</article>

			<article class="card">
				<div class="cardTop">
					<h3 class="cardTitle">Events</h3>
					<p class="cardText">
						Explore the latest events and<br />
						find out where we’re making<br />
						waves in the industry
					</p>
				</div>

				<a class="btn" href="/events">SEE MORE</a>
			</article>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 64px 0 72px;
		background: #fff;
		font-family: var(--cc-font-family);
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 32px;
	}

	.title {
		margin: 0 0 26px;
		font-size: 28px;
		font-weight: 700;
		color: #012245;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 28px;
		align-items: stretch;
	}

	.card {
		border: 1.5px solid rgba(10, 160, 255, 0.65);
		border-radius: 16px;
		padding: 26px 26px 22px;
		background: #fff;
		min-height: 260px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		box-shadow: 0 10px 26px rgba(0, 0, 0, 0.04);
		transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 16px 34px rgba(0, 0, 0, 0.08);
		border-color: rgba(10, 160, 255, 0.9);
	}

	.cardTitle {
		margin: 0 0 12px;
		font-size: 18px;
		font-weight: 800;
		color: #0a0a0a;
	}

	.cardText {
		margin: 0;
		font-size: 14px;
		line-height: 1.55;
		color: rgba(0, 0, 0, 0.7);
	}

	.btn {
		align-self: flex-start;
		margin-top: 18px;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		height: 44px;
		padding: 0 28px;

		border-radius: 12px;
		background: #0aa0ff;
		color: #fff;
		text-decoration: none;
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.3px;

		transition: transform 140ms ease, filter 140ms ease;
	}

	.btn:hover {
		filter: brightness(1.05);
		transform: translateY(-1px);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.container {
			padding: 0 18px;
		}

		.title {
			font-size: 28px;
		}

		.card {
			min-height: 240px;
			padding: 22px 18px 18px;
		}
	}
</style>
