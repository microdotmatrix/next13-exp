import { Suspense } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';
import ClientIcon from '@util/clientIcon'

import { graphql } from '@lib/wp'
import { pageQuery } from '@lib/wp/queries'

import Loading from '@app/loading'

const PageView = dynamic(() => import('./view'), { suspense: true })

async function fetchPage(slug) {
  try {
    let data = await graphql.request(pageQuery, { slug })
    return data?.pageBy
  } catch (error) {
    throw error.message
  }
}

const Contact = async ({ params }) => {
  let slug = 'contact'
  const page = await fetchPage(slug.toString())

  // Error handling: if page does not exist, redirect to 404 page
  if (!page) {
    return (
      <div className="load-error">
        <ClientIcon icon="line-md:cancel-twotone" size="250px" className="text-red-700 justify-self-center" />
        <h3>Could not find page!</h3>
        <p className="text-gray-900"><span className="font-bold">Invalid url:</span> "{params.slug}"</p>
        <Link href="/blog">Go Back</Link>
      </div>
    )
  }
  return (
    <Suspense fallback={<Loading />}>
      <PageView page={page} />
    </Suspense>
  )
}

export default Contact
