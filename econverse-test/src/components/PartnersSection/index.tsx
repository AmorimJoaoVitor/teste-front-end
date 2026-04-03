import './styles.scss'
import partnerBanner from '../../assets/images/partner-banner.png'

function PartnersSection() {
  return (
    <section className="partners-section">
      {[1, 2].map((item) => (
        <div
          key={item}
          className="partner-card"
          style={{ backgroundImage: `url(${partnerBanner})` }}
        >
          <div className="overlay">
            <h3>Parceiros</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur
            </p>

            <button>CONFIRA</button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default PartnersSection