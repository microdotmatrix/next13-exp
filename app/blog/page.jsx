import { Suspense } from 'react'
import { graphql, GET_POSTS } from '@lib/api'

import Loading from './loading'
import PostList from './list'

async function listPosts() {
  // Fetching posts from WordPress
  async function getPosts() {
    try {
      let data = await graphql.request(GET_POSTS, {});
      return data?.posts
    } catch (error) {
      throw error.message
    }
  }
  return await getPosts()
}

const Page = async () => {
  const posts = await listPosts();
  return (
    <>
      <h1>Hits from the Blog...</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque reprehenderit ratione commodi porro blanditiis magnam ullam voluptatibus nesciunt nulla. Tempora, deleniti consequatur excepturi error corrupti ipsum molestias ad harum?</p>
      <Suspense fallback={<Loading />}>
        <PostList posts={posts} />
      </Suspense>
    </>
  )
}

export default Page
