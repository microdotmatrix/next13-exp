import { Suspense } from 'react'

import Loading from './loading'
import PostList from './list'

async function getPosts() {
  const response = await fetch(`https://wp.slayley.com/wp-json/wp/v2/posts`)
  const posts = await response.json();
  return posts
}

const Page = async () => {
  const posts = await getPosts();
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
