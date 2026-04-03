import './styles.scss'
import logo from '../../assets/images/Logo.png'

import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'
import linkedin from '../../assets/icons/linkedin.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Logo" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="footer-social">
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={linkedin} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-links">
          <div className="footer-column">
            <h4>Institucional</h4>
            <a href="/">Sobre Nós</a>
            <a href="/">Movimento</a>
            <a href="/">Trabalhe conosco</a>
          </div>

          <div className="footer-column">
            <h4>Ajuda</h4>
            <a href="/">Suporte</a>
            <a href="/">Fale conosco</a>
            <a href="/">Perguntas Frequentes</a>
          </div>

          <div className="footer-column">
            <h4>Termos</h4>
            <a href="/">Termos e Condições</a>
            <a href="/">Política de Privacidade</a>
            <a href="/">Troca e Devolução</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </footer>
  )
}

export default Footer