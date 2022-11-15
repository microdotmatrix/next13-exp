import { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'

import { graphql, productQuery } from '@lib/wp'

import Loading from './loading'
import { ClientIcon } from '@util/clientIcon'

const ProductView = dynamic(() => import('./view'), { suspense: true })

const fetchProduct = async (slug) => {
  try {
    let data = await graphql.request(productQuery, { slug });
    return data?.product
  } catch (error) {
    throw error.message
  }
}

export default async function Product({ params }) {
  let slug = params.slug.toString()
  const product = await fetchProduct(slug)

  if (!product) {
    return (
      <div className="load-error">
        <ClientIcon icon="line-md:cancel-twotone" size="250px" className="text-red-700 justify-self-center" />
        <h3>Could not find product!</h3>
        <p className="text-gray-900"><span className="font-bold">Invalid url:</span> "{slug}"</p>
        <Link href="/blog">Go Back</Link>
      </div>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <ProductView product={product} />
    </Suspense>
  )
}
