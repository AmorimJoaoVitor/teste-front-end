import './styles.scss'
import bannerImage from '../../assets/images/banner-principal.jpg'

function HeroBanner() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="hero-banner__overlay">
        <div className="hero-banner__content">
          <h2>
            Venha conhecer nossas <span>promoções</span>
          </h2>

          <p><span className='yellow-emphasis'>50% Off</span> nos produtos</p>

          <button>Ver produto</button>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner