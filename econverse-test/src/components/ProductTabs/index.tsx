import { useState } from 'react'
import './styles.scss'

const categories = [
  'Celular',
  'Acessórios',
  'Tablets',
  'Notebooks',
  'TVs',
  'Ver todos'
]

function ProductTabs() {
  const [active, setActive] = useState('Celular')

  return (
    <div className="product-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={active === category ? 'active' : ''}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ProductTabs