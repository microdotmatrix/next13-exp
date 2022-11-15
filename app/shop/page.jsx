import { Suspense, use } from 'react'
import dynamic from 'next/dynamic'
import { graphql, productsQuery } from '@lib/wp'

import Loading from '../loading'
import ClientIcon from '@util/clientIcon'

const ProductList = dynamic(() => import('./list'), { suspense: true })

const fetchProducts = async () => {
  try {
    let data = await graphql.request(productsQuery, {})
    return data?.products
  } catch (error) {
    throw error.message
  }
}

export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.nodes?.map((product) => ({
    slug: product.slug.toString(),
  }));
}


export default async function ShopProducts() {
  const products = await fetchProducts()
  
  if (!products) {
    return (
      <div className="load-error">
        <ClientIcon icon="line-md:cancel-twotone" size="250px" className="text-red-700 justify-self-center" />
        <h3>Could not find products!</h3>
        
        <Link href="/">Go Back</Link>
      </div>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProductList products={products} />
    </Suspense>
  )
}
