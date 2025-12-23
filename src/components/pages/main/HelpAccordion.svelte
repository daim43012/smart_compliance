<script lang="ts">
	let open = 0;

	function toggle(i: number) {
		open = open === i ? -1 : i;
	}
</script>

<section class="section">
	<div class="container">
		<div class="grid">
			<div class="left">
				<h2 class="title">How can we help You?</h2>
				<p class="subtitle">
					Check the list of our key services or contact us for more information
				</p>

				<div class="accordion">
					<!-- 1 -->
					<div class="item" class:open={open === 0}>
						<button class="head" on:click={() => toggle(0)} aria-expanded={open === 0}>
							<span class="headText">Outsourcing AML function</span>
							<span class="chev" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none">
									<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</span>
						</button>

						<div class="panel">
							<div class="body">
								<p>
									For small and middle size financial intermediaries such as asset managers,
									trustee, money exchange platforms or any regulated entities that are subject
									to AML/CTF regulation we provide AML officers landing or outsourcing of the
									compliance function.
								</p>

								<p>
									Beginning January 1, 2020, oversight requirements for Swiss entities under
									the supervision of the regulator are significantly increased or subject to
									new rules. With the enactment of the Financial Institutions Act (FinIA) and
									the Financial Services Act (FinSA), previously independent individual client
									financial asset managers and trust managers are now the subject to
									supervision and licensing.
								</p>

								<p>
									Such managers must have a full risk management and internal control system.
									The Anti-Money Laundering Act (AMLA) clarifies that financial intermediaries
									must ensure that their employees are sufficiently trained and supervised.
									This also applies to crypto asset managers, which also fall under the
									category of financial intermediaries and therefore must have an
									organization that ensures compliance with AMLA obligations.
								</p>

								<p>
									A company that falls under one of the categories of FINMA supervision must
									build the right compliance and internal controls. Compliance functions can
									be managed in-house or outsourced to specialists. The Swiss law allows the
									outsourcing of compliance functions.
								</p>
							</div>
						</div>
					</div>

					<!-- 2 -->
					<div class="item" class:open={open === 1}>
						<button class="head" on:click={() => toggle(1)} aria-expanded={open === 1}>
							<span class="headText">Digital Assets / DLT compliance</span>
							<span class="chev" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none">
									<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</span>
						</button>

						<div class="panel">
							<div class="body">
								<p>
									The development of the decentralized financial industry brings new
									challenges to the traditional sector. For example, Banks are increasingly
									faced with the need to interact with financial assets linked
									directly/indirectly to assets resulting from crypto related platforms.
								</p>

								<p>
									Many traditional businesses have already started to implement in-house
									solutions and provide a fully digital setup for onboarding digital assets,
									safe keeping, or are using white labeling solutions of existing providers.
									Over time, we will see more and more financial institutions dealing with
									crypto assets and it will become more the norm than the exception.
								</p>

								<p>
									Our team can help you to understand the risks associated with onboarding
									crypto-related clients and their assets and support you in developing the
									necessary infrastructure and due diligence in place to prevent onboarding
									of illegal assets and to monitor and document high-risk transactions.
								</p>
							</div>
						</div>
					</div>

					<!-- 3 -->
					<div class="item" class:open={open === 2}>
						<button class="head" on:click={() => toggle(2)} aria-expanded={open === 2}>
							<span class="headText">Regulatory consulting</span>
							<span class="chev" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none">
									<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</span>
						</button>

						<div class="panel">
							<div class="body">
								<p>
									Switzerland is a progressive country in the field of traditional finance and
									crypto regulation. Basically, you can start any business with crypto assets
									in a transparent regulatory environment. SMART-compliance assess your
									business model and provide support in obtaining the right license type. For
									example, our service could include:
								</p>

								<ul>
									<li>Organization structure and corporate governance</li>
									<li>Company foundation</li>
									<li>Non-executive Bord Member function</li>
									<li>Prepare license applications (SRO, FinTech and others)</li>
									<li>Assistance in communications with regulator</li>
									<li>Corporate strategy and business plan review</li>
									<li>Risk assessment and internal policies</li>
									<li>Three lines of defense and internal control system implementation</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- 4 -->
					<div class="item" class:open={open === 3}>
						<button class="head" on:click={() => toggle(3)} aria-expanded={open === 3}>
							<span class="headText">Administrative support and relocation</span>
							<span class="chev" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none">
									<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</span>
						</button>

						<div class="panel">
							<div class="body">
								<p>
									We will support you in obtaining a work permit and help you relocate your
									family to Switzerland. At the same time, to manage your business in a right
									format, you can outsource your business administration to the professionals.
									We will be happy to find a best provider for you. We have a good network in
									Switzerland and abroad. We provide:
								</p>

								<ul>
									<li>Three lines of defense and internal control system implementation</li>
									<li>Accounting support</li>
									<li>Office and secretary</li>
									<li>IT solutions, cloud services</li>
									<li>Clients onboarding and transaction monitoring tools</li>
									<li>Banks with Crypto Offering and our accounts opening support</li>
									<li>Notary services</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- 5 -->
					<div class="item" class:open={open === 4}>
						<button class="head" on:click={() => toggle(4)} aria-expanded={open === 4}>
							<span class="headText">For Asset Managers</span>
							<span class="chev" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none">
									<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</span>
						</button>

						<div class="panel">
							<div class="body">
								<p>
									For small and middle size financial intermediaries such as asset managers,
									trustee, money exchange platforms or any regulated entities that are subject
									to AMLO FINMA we provide AML officers landing or outsourcing of the
									compliance function.
								</p>

								<p>
									Beginning January 1, 2020, oversight requirements for entities under the
									supervision of the regulator are significantly increased or subject to new
									rules. With the enactment of the Financial Institutions Act (FinIA) and the
									Financial Services Act (FinSA), previously independent individual client
									financial asset managers and trust managers are now the subject to
									supervision and licensing.
								</p>

								<p>
									Such managers must have a full risk management and internal control system.
									The Anti-Money Laundering Act (AMLA) clarifies that financial intermediaries
									must ensure that their employees are sufficiently trained and supervised.
									This also applies to crypto asset managers, which also fall under the
									category of financial intermediaries and therefore must have an
									organization that ensures compliance with AMLA obligations.
								</p>

								<p>
									A company that falls under one of the categories of FINMA supervision must
									build the right compliance and internal controls. Compliance functions can
									be managed in-house or outsourced to specialists. The Swiss law allows the
									outsourcing of compliance functions.
								</p>
							</div>
						</div>
					</div>

					<!-- 6 -->
					<div class="item" class:open={open === 5}>
						<button class="head" on:click={() => toggle(5)} aria-expanded={open === 5}>
							<span class="headText">For FinTech Start-ups</span>
							<span class="chev" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none">
									<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</span>
						</button>

						<div class="panel">
							<div class="body">
								<p>
									The Swiss fintech industry continues to grow successfully. At the same time,
									the journey from a fintech startup to a sustainable organization requires
									diligence and a good regulatory framework.
								</p>

								<p>
									Swiss regulation reflects the necessary aspects for FinTech businesses.
									Municipalities are also trying to create an environment for growing new
									businesses. Some cantons are even more innovative in supporting new fintech
									businesses.
								</p>

								<p>
									Over the past few years, Zug has become home to many companies in the digital
									finance sector. The Swiss Crypto Valley was also founded in Zug.
								</p>

								<p>
									The openness of the municipality as well as the regulator in general allows
									projects of any complexity to develop in a regulatory environment and with
									the support of local experts and infrastructure. We would be happy to assist
									you in evaluating your decision to register and develop fintech in
									Switzerland.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="right">
				<img src="/assets/images/accordion-img.png" alt="Illustration" />
			</div>
		</div>
	</div>
</section>

<style>
	.section {
		padding: 64px 0;
		font-family: var(--cc-font-family);
		background: #fff;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 32px;
	}

	.grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 44px;
		align-items: start;
	}

	.title {
		font-size: 28px;
		font-weight: 700;
		color: #012245;
		margin: 0 0 12px;
	}

	.subtitle {
		margin: 0 0 24px;
		font-size: 14px;
		color: #111;
	}

	.accordion {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.item {
		border-radius: 14px;
	}

	.head {
		width: 100%;
		border: 1px solid #0aa0ff;
		background: #fff;
		border-radius: 14px;
		padding: 14px 16px;
		font-size: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
		text-align: left;
		color: #111;
		transition: background 180ms ease, color 180ms ease, border-color 180ms ease;
	}

	.item.open .head {
		background: #0aa0ff;
		color: #fff;
		border-color: #0aa0ff;
	}

	.headText {
		padding-right: 10px;
        font-size: 16px;
        font-weight: 500;
	}

	.chev {
		width: 22px;
		height: 22px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: 0 0 22px;
		color: currentColor;
		transition: transform 220ms ease;
	}

	.chev svg {
		width: 22px;
		height: 22px;
		display: block;
	}

	.item.open .chev {
		transform: rotate(180deg);
	}

	.panel {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 260ms ease;
	}

	.item.open .panel {
		grid-template-rows: 1fr;
	}

	.body {
		overflow: hidden;
		padding: 0 16px;
	}

	.item.open .body {
		padding: 14px 16px 18px;
	}

	.body p {
		margin: 0 0 12px;
		font-size: 16px;
		line-height: 1.65;
		color: #111;
	}

	.body p:last-child {
		margin-bottom: 0;
	}

	.body ul {
		margin: 10px 0 0;
		padding-left: 18px;
		color: #111;
	}

	.right img {
		max-width: 100%;
		display: block;
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.container {
			padding: 0 18px;
		}
	}
</style>
