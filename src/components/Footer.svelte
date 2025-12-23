<footer class="footer">
	<div class="overlay">
		<div class="content">
			<div class="footer-grid">
				<!-- LEFT -->
				<div class="block">
					<img
						src="/assets/images/katerina-logo.svg"
						alt="SMART-compliance"
						class="logo"
					/>

					<p class="text">
						<strong>SMART-compliance GmbH</strong><br />
						Handelsregister des Kantons Zug<br />
						Number: CHE-250.927.503
					</p>
				</div>

				<!-- CENTER -->
				<div class="block">
					<p class="text">
						<strong>Registered office:</strong><br />
						Landis &amp; Gyr-Strasse 1<br />
						6300 Zug, Switzerland
					</p>

					<p class="text">
						<strong>Send an email</strong><br />
						+41 765 82 0974
					</p>

					<a
						class="linkedin"
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						in
					</a>
				</div>

				<nav class="block nav">
					<a href="/">Home</a>
					<a href="/about">About</a>
					<a href="/content">Content Corner</a>
					<a href="/events">Events</a>
					<a href="/contact">Contact</a>
					<a href="/data-privacy">Data Privacy Policy</a>
				</nav>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		background: url('/assets/images/katerina_footer.png') center / cover no-repeat;
		color: #fff;
	}

	.overlay {
		background: rgba(0, 0, 0, 0.5);
	}

	.content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 56px 32px;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 48px;
	}

	.block {
		font-size: 14px;
		line-height: 1.6;
	}

	.logo {
		height: 36px;
		margin-bottom: 20px;
	}

	.text {
		opacity: 0.9;
		margin-bottom: 16px;
	}

	.linkedin {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 4px;
		background: #0a66c2;
		color: #fff;
		text-decoration: none;
		font-weight: 700;
	}

	.nav {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.nav a {
		color: #fff;
		text-decoration: none;
		opacity: 0.85;
	}

	.nav a:hover {
		opacity: 1;
		text-decoration: underline;
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}
	}
</style>
