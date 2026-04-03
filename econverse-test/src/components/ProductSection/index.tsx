import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

import type { Product } from '../../types/product'
import { getProducts } from '../../services/api'
import ProductCard from '../ProductCard'
import ProductTabs from '../ProductTabs'
import ProductModal from '../ProductModal'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import './styles.scss'

interface ProductSectionProps {
  showTabs?: boolean
  showViewAll?: boolean
  title?: string
}

function ProductSection({ showTabs = true, showViewAll = false, title = 'Produtos relacionados' }: ProductSectionProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start'
  })

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data)
    }

    loadProducts()
  }, [])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section className="product-section">
      <div className="section-title">
        <span>{title}</span>

         {showViewAll && <button className="view-all">Ver todos</button>}
      </div>

         {showTabs && <ProductTabs />}

      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={scrollPrev}>
          <ChevronLeft size={24} />
        </button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {products.map((product) => (
              <div className="embla__slide" key={product.productName}>
                <ProductCard
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow right" onClick={scrollNext}>
          <ChevronRight size={24} />
        </button>
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}

export default ProductSection