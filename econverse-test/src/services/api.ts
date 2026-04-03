import type { Product } from '../types/product'

interface ProductsResponse {
  success: boolean
  products: Product[]
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
  )

  const data: ProductsResponse = await response.json()

  return data.products
}