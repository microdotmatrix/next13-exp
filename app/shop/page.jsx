import { Suspense, use } from 'react'
import dynamic from 'next/dynamic'
import { graphql, GET_PRODUCTS } from '@lib/wp'

import Loading from '../loading'
import ClientIcon from '@util/clientIcon'


const fetchProducts = async () => {
  try {
    let data = await graphql.request(GET_PRODUCTS, {})
    return data?.products
  } catch (error) {
    throw error.message
  }
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
      <div>
        {products?.nodes.map((node, index) => (
          <div key={index}>
            <h2>{node.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.description }} />
          </div>
        ))}
      </div>
    </Suspense>
  )
}
