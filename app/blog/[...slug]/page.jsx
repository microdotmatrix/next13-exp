import { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link'

import { graphql, postQuery, sleep } from '@lib/wp'

import Loading from './loading'
import { ClientIcon } from '@util/clientIcon'

const PostView = dynamic(() => import('./view'), { suspense: true })

const fetchPost = async (slug) => {
  await sleep(1000)
  try {
    let data = await graphql.request(postQuery, { slug });
    return data?.postBy
  } catch (error) {
    throw error.message
  }
}

export default async function Post({ params }) {
  let slug = params.slug.toString()
  const post = await fetchPost(slug)

  if (!post) {
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
      <PostView post={post} />
    </Suspense>
  )
}
