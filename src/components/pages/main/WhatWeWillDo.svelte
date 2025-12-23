<section class="section">
	<div class="container">
		<h2 class="title">What we will do?</h2>

		<div class="cards">
			<article class="card c1">
				<div class="icon" aria-hidden="true">
					<!-- simple inline icon -->
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M4 4h10l6 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
							stroke="currentColor"
							stroke-width="1.6"
						/>
						<path
							d="M14 4v6h6"
							stroke="currentColor"
							stroke-width="1.6"
						/>
						<path
							d="M6.5 14.5h7M6.5 17.5h5"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				<h3 class="cardTitle">Define Needs</h3>

				<p class="text">
					We will conduct a comprehensive assessment of the client’s business needs and
					regulatory requirements. This involves close collaboration with the client to understand
					their specific industry, business model, and objectives.
				</p>
			</article>

			<article class="card c2">
				<div class="icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M8 4h8v2h3a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h3V4Z"
							stroke="currentColor"
							stroke-width="1.6"
						/>
						<path
							d="M9 4a3 3 0 0 1 6 0"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
						/>
						<path
							d="M8 12h8M8 15h8M8 18h6"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				<h3 class="cardTitle">Plan Steps of Work</h3>

				<p class="text">
					After defining the client’s needs, the next step is to develop a detailed plan outlining the
					specific steps required to achieve regulatory compliance and enhance the business structure.
				</p>
			</article>

			<article class="card c3">
				<div class="icon" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none">
						<path
							d="M12 3a9 9 0 1 0 9 9"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
						/>
						<path
							d="M12 7v6l4 2"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20.5 4.5 22 6"
							stroke="currentColor"
							stroke-width="1.6"
							stroke-linecap="round"
						/>
					</svg>
				</div>

				<h3 class="cardTitle">Implement the Steps</h3>

				<p class="text">
					With a well-defined plan in place, we will start the implementation phase, where the actual work
					is carried out to achieve regulatory compliance and optimize the business structure.
				</p>
			</article>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 56px 0 64px;
		font-family: var(--cc-font-family);
		background: #fff;
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

	.cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 22px;
	}

	.card {
		border-radius: 14px;
		padding: 26px 26px 28px;
		color: rgba(255, 255, 255, 0.92);
		min-height: 210px;
		display: flex;
		flex-direction: column;
		gap: 14px;
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
	}

	/* цвета как на скрине */
	.c1 {
		background: #012245;
	}
	.c2 {
		background: #0a5c77;
	}
	.c3 {
		background: #09a9e8;
	}

	.icon {
		width: 44px;
		height: 44px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.9);
	}

	.icon svg {
		width: 44px;
		height: 44px;
	}

	.cardTitle {
		margin: 0;
		font-size: 16px;
		font-weight: 800;
		color: #fff;
	}

	.text {
		margin: 0;
		font-size: 13.5px;
		line-height: 1.55;
		max-width: 520px;
	}

	@media (max-width: 1000px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 600px) {
		.container {
			padding: 0 18px;
		}
	}
</style>
