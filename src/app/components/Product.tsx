// components/Product.tsx
'use client'

import React from 'react'

interface ProductProps {
  product: {
    id: string
    title: string
    description?: string
    price: number
    deliveryAvailability?: boolean | null
    image?: {
      url: string
      alt?: string
    }
  }
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description || 'No description available'}</p>
      <p>Price: {product.price}</p>
      {product.deliveryAvailability !== null && (
        <p>Delivery: {product.deliveryAvailability ? 'Available' : 'Not Available'}</p>
      )}
      {product.image && <img src={product.image.url} alt={product.image.alt || 'Product image'} />}
    </div>
  )
}

export default Product
