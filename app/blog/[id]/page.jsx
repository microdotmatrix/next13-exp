import { Suspense } from 'react'

import Loading from './loading'
import PostView from './view'


async function getPost(id) {
  
  const response = await fetch(`https://wp.slayley.com/wp-json/wp/v2/posts/${id}`)
  const post = await response.json();
  return post
}

const Page = async ({ params }) => {
  const post = await getPost(params.id);

  return (
    <Suspense fallback={<Loading />}>
      <PostView post={post} />
    </Suspense>
  )
}



export default Page;