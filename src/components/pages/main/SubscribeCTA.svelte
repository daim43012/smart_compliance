<section class="section">
	<div class="container">
		<div class="box">
			<h2 class="title">Subscribe to our newsletter</h2>

			<a href="/subscribe" class="btn">
				Subscribe to our newsletter
			</a>
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

	.box {
		border: 1.5px solid rgba(10, 160, 255, 0.65);
		border-radius: 18px;
		padding: 44px 48px;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}

	.title {
		margin: 0;
		font-size: 28px;
		font-weight: 700;
		color: #012245;
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
		filter: brightness(1.08);
		transform: translateY(-1px);
	}

	@media (max-width: 900px) {
		.box {
			flex-direction: column;
			align-items: flex-start;
			padding: 32px 28px;
		}

		.btn {
			align-self: flex-start;
		}
	}

	@media (max-width: 600px) {
		.container {
			padding: 0 18px;
		}

		.title {
			font-size: 26px;
		}
	}
</style>
