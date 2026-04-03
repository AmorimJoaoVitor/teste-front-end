import { useState } from 'react'
import type { Product } from '../../types/product'
import { X, Minus, Plus } from 'lucide-react'

import './styles.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-image">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="modal-info">
          <h3>{product.productName}</h3>

          <strong>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </strong>

          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>

          <a href="/">Veja mais detalhes do produto &gt;</a>

          <div className="purchase-area">
            <div className="quantity-control">
              <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                <Minus size={16} />
              </button>

              <span>{String(quantity).padStart(2, '0')}</span>

              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <Plus size={16} />
              </button>
            </div>

            <button className="buy-button">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal