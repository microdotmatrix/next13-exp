import { Suspense, use } from 'react'
import { useQuery } from 'urql';

import Loading from './loading'
import PostView from './view'

export const dynamicParams = true

const POST_QUERY = `
  query fetchBySlug($slug: STRING!) {
    postBy(slug: $slug) {
      id
      slug
      ...PostFragment
    }
  }
  fragment PostFragment on Post {
    date
    title
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        title
        sizes
        description
        caption
        altText
      }
    }
    tags(first: 10) {
      nodes {
        name
      }
    }
    categories(first: 5) {
      nodes {
        name
      }
    }
    author {
      node {
        name
        firstName
        lastName
        email
        nickname
        slug
        avatar {
          url
        }
      }
    }
  }
`

const Page = async ({ slug }) => {
  const [result, reexecuteQuery] = useQuery({
    query: POST_QUERY,
    variables: { slug }
  });

  const { post, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Suspense fallback={<Loading />}>
      <PostView post={post} />
    </Suspense>
  )
}

export default Page;