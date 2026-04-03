import './styles.scss'
import brandLogo from '../../assets/images/logo-marcas.png'

function BrandsSection() {
  return (
    <section className="brands-section">
      <h2>Navegue por marcas</h2>

      <div className="brands-grid">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="brand-circle">
            <img src={brandLogo} alt="Marca" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandsSection