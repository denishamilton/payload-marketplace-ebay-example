'use client'

import React from 'react'
import { useProducts } from '../hooks/useProducts'
import ProductsList from '../components/ProductsList'

const ProductsPage = () => {
  const { data: products, isLoading, error } = useProducts()

  if (isLoading) return <div>Loading...</div>
  if (error instanceof Error) return <div>Error fetching products: {error.message}</div>

  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  )
}

export default ProductsPage
