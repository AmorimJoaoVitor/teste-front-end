import './styles.scss'

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse
          </p>
        </div>

        <div className="newsletter-form-wrapper">
          <form className="newsletter-form">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">INSCREVER</button>
          </form>
        <div className="newsletter-check">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
            Aceito os termos e condições
            </label>
        </div>
        </div>
      </div>

    </section>
  )
}

export default Newsletter