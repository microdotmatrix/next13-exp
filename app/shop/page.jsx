import { Suspense, use } from 'react'
import dynamic from 'next/dynamic'
import { gql } from 'graphql-request'
import { graphql } from '@lib/shopify'

import Loading from '../loading'
import ClientIcon from '@util/clientIcon'

const productsQuery = gql`
  query getProducts {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`

const fetchProducts = async () => {
  try {
    let data = await graphql.request(productsQuery, {})
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
        {products?.edges.map((node, index) => (
          <div key={index}>
            <h2>{node.title}</h2>
          </div>
        ))}
      </div>
    </Suspense>
  )
}
