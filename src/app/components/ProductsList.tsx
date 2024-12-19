// components/ProductsList.tsx
'use client'

import React from 'react'
import Product from './Product'

interface ProductsListProps {
  products: {
    id: string
    title: string
    description?: string
    price: number
    deliveryAvailability?: boolean | null
    image?: {
      url: string
      alt?: string
    }
  }[]
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsList
