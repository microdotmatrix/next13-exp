import { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'

import { graphql } from '@lib/wp'
import { postQuery } from '@lib/wp/queries'

import Loading from './loading'
import { ClientIcon } from '@util/clientIcon'

// Dynamic import of post rendering component with Suspense transition
const PostView = dynamic(() => import('./view'), { suspense: true })

// Fetch post data from WordPress by slug
const fetchPost = async (slug) => {
  try {
    let data = await graphql.request(postQuery, { slug });
    return data?.postBy
  } catch (error) {
    throw error.message
  }
}

export default async function Post({ params: { slug } }) {
  // let slug = params.slug.toString()
  const postData = await fetchPost(slug.toString())
  
  // Error handling: If no post exists with the given slug, redirect to 404 page
  if (!postData) {
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
    <Suspense fallback={<Loading />}>
      <PostView promise={postData} />
    </Suspense>
  )
}
