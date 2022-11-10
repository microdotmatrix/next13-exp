import { Suspense } from 'react'
import { graphql, allPostsQuery } from '@lib/wpQueries'

import Loading from './loading'
import PostList from './list'

async function listPosts() {
  // Fetching posts from WordPress
  try {
    let data = await graphql.request(allPostsQuery, {});
    return data?.posts
  } catch (error) {
    throw error.message
  }
}

const Blog = async () => {
  const posts = await listPosts();
  return (
    <>
      <h1>Latest Updates</h1>
      <h3 className='sub-title'>Articles fetched from WordPress</h3>
      <p className='prose'>After a frustrating journey of integrating Next.js v13's new data fetching protocols, I've finally got this thing running WP Headless.</p>
      <Suspense fallback={<Loading />}>
        <PostList posts={posts} />
      </Suspense>
    </>
  )
}

export default Blog
