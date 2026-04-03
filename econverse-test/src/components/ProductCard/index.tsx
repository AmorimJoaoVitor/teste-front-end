import type { Product } from '../../types/product'
import './styles.scss'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article className="product-card" onClick={onClick}>
      <img src={product.photo} alt={product.productName} />

      <h3>{product.productName}</h3>

      <p>{product.descriptionShort}</p>

      <strong>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </strong>

      <p>Ou 2x de {(product.price / 2).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })} sem juros</p>

      <p className='shipping-blue'>Frete Grátis</p>

      <button>Comprar</button>
    </article>
  )
}

export default ProductCard