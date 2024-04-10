import React from 'react'
import type { Product } from '../page'
import { getProductById } from '@/utils/getProducts'
import ProductCard from '@/app/components/ProductCard'

type Params = {
  params: {
    id: string
  }
}

export default async function productId({params}:Params) {
  const [product]:Product[] = await getProductById(params.id) as Product[]
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div>
        <ProductCard price={product.price} id={product.id} name={product.name} />
    </div>
  )
}
