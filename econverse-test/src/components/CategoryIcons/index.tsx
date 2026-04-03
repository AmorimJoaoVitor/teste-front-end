import './styles.scss'
import { useState } from 'react'

import tecnologia from '../../assets/icons/tecnologia.png'
import supermercado from '../../assets/icons/supermercados.png'
import bebidas from '../../assets/icons/bebidas.png'
import ferramentas from '../../assets/icons/ferramentas.png'
import saude from '../../assets/icons/saude.png'
import esportes from '../../assets/icons/corrida.png'
import moda from '../../assets/icons/moda.png'

const categories = [
  { name: 'Tecnologia', icon: tecnologia },
  { name: 'Supermercado', icon: supermercado },
  { name: 'Bebidas', icon: bebidas },
  { name: 'Ferramentas', icon: ferramentas },
  { name: 'Saúde', icon: saude },
  { name: 'Corrida', icon: esportes },
  { name: 'Moda', icon: moda }
]

function CategoryIcons() {
  const [activeCategory, setActiveCategory] = useState('Tecnologia')

  return (
    <section className="categories">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`categories__item ${
            activeCategory === category.name ? 'active' : ''
          }`}
          onClick={() => setActiveCategory(category.name)}
        >
          <div className="categories__box">
            <img src={category.icon} alt={category.name} />
          </div>

          <span>{category.name}</span>
        </button>
      ))}
    </section>
  )
}

export default CategoryIcons