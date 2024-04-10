import React from 'react'
import { getProducts } from '@/utils/getProducts'
import Link from 'next/link'


export type Product = {
    id:number,
    name?:string,
    price?:number,
    stock?:number
}   

export default async function products() {
  const products:Product[] = await getProducts() as Product[]
  return (
     <div>
    {products.map((product) => ( 
      <Link href={`/products/${product.id}`}>
        <div>
          {product.name}
        </div>          
      </Link>
    ))}
    </div>
  ) 
}