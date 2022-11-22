import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Import GraphQL client and query
import { graphql } from '@lib/wp'
import { allPostsQuery } from '@lib/wp/queries'

// Load component
import Loading from './loading'
// Lazy load async component
const PostList = dynamic(() => import('./list'), { suspense: true })

const listPosts = async () => {
  // Fetching posts from WordPress
  try {
    let data = await graphql.request(allPostsQuery, {});
    return data?.posts
  } catch (error) {
    throw error.message
  }
}

export async function generateStaticParams() {
  const posts = await listPosts();

  return posts.nodes?.map((post) => ({
    slug: post.slug.toString(),
  }));
}


export default async function Blog() {
  // Load post data
  const posts = await listPosts();

  // Error handling if no posts are loaded
  if (!posts) {
    return (
      <div className="load-error">
        <ClientIcon icon="line-md:cancel-twotone" size="250px" className="text-red-700 justify-self-center" />
        <h3>Sorry, no one has shared a single thought.</h3>
        <Link href="/blog">Go Back</Link>
      </div>
    )
  }

  // Render page, passing post data into formatted child component behind Suspense boundary
  return (
    <>
      <h1>Latest Updates</h1>
      <h3 className='sub-title'>Articles fetched from WordPress</h3>
      
      <Suspense fallback={<Loading />}>
        <PostList posts={posts} />
      </Suspense>
    </>
  )
}