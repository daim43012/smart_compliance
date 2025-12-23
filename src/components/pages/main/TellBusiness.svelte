<section class="section">
  <div class="container">
    <div class="grid">
      <div class="left">
        <h2 class="title">Tell us about your business</h2>

        <div class="subtitle">Take the right steps from the start</div>

        <ul class="list">
          <li>Are you a fintech company?</li>
          <li>Do you require a license to operate your business model?</li>
          <li>How do you onboard the clients?</li>
          <li>Does your company structure respond to your business needs?</li>
          <li>Do you use an internal control system (ICS) in place?</li>
          <li>Do you understand your business risks?</li>
          <li>Do you have problems opening an operational bank account?</li>
          <li>Do you need relocation support?</li>
        </ul>
      </div>

      <div class="right">
        <div class="card">
          <div class="cardInner">
            <div class="cardText">
              <div class="cardTitle">Book your consultation now</div>
              <a class="btn" href="/">CALENDLY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    background: #ffffff;
    padding: 56px 0 40px;
    font-family: var(--cc-font-family);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    align-items: start;
    gap: 40px;
  }

  .title {
    margin: 0 0 18px;
    line-height: 1.15;
    font-size: 28px;
    font-weight: 700;
    color: #012245;
  }

  .subtitle {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    margin: 0 0 18px;
  }

  .list {
    padding-left: 18px;
    margin: 0 0 12px;
    font-size: 16px;
    line-height: 1.65;
    color: #111;
  }

  .right {
    display: flex;
    justify-content: center;
  }

  .card {
    width: 100%;
    max-width: 760px;
    min-height: 220px;
    border-radius: 14px;
    overflow: hidden;
    background: url("/assets/images/calendly-bg.png") center / cover no-repeat;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }

  .cardInner {
    min-height: 220px;
    padding: 28px 30px;
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0.18) 45%,
      rgba(0, 0, 0, 0) 75%
    );
  }

  .cardTitle {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    padding: 0 28px;
    border-radius: 12px;
    background: #0b84ff;
    color: #fff;
    font-weight: 800;
    letter-spacing: 0.3px;
    text-decoration: none;
    transition:
      transform 140ms ease,
      filter 140ms ease;
  }

  .btn:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  @media (max-width: 1100px) {
    .grid {
      grid-template-columns: 1fr;
    }

    .right {
      justify-content: flex-start;
    }

    .card {
      max-width: 720px;
    }
  }

  @media (max-width: 600px) {
    .section {
      padding: 40px 0 30px;
    }

    .container {
      padding: 0 18px;
    }

    .title {
      font-size: 28px;
    }

    .cardInner {
      padding: 18px 18px;
    }
  }
</style>
