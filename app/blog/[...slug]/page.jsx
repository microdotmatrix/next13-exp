import { Suspense } from 'react'
import { graphql, allPostsQuery, postQuery, sleep } from '@lib/wpQueries'

import Loading from './loading'
import PostView from './view'


async function fetchPost(slug) {
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

  return (
    <Suspense fallback={<Loading />}>
      <PostView post={post} />
    </Suspense>
  )
}
