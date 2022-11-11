import { Suspense } from 'react'
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
        <h3>Could not find post!</h3>
        <p className="text-gray-900"><span className="font-bold">Invalid url:</span> "{slug}"</p>
        <Link href="/blog">Go Back</Link>
      </div>
    )
  }

  return (
    <div>
      {products?.edges.map((product, index) => (
        <div key={index}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  )
}
