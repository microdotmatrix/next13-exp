import { Suspense } from 'react'
import { gql } from 'graphql-request';
import { graphql } from '@lib/wp'

import Loading from '@app/loading'

const pageQuery = gql`
  query getPage {
    pageBy(uri: "about") {
      id
      date
      title
      slug
      pageId
      content
      featuredImage {
        node {
          sourceUrl
          altText
          caption
          description
        }
      }
    }
  }
`

async function fetchPage() {
  try {
    let data = await graphql.request(pageQuery, {})
    return data?.pageBy
  } catch (error) {
    throw error.message
  }
}

const About = async () => {
  const page = await fetchPage()
  if (!page) {
    return (
      <div className="load-error">
        <ClientIcon icon="line-md:cancel-twotone" size="250px" className="text-red-700 justify-self-center" />
        <h3>Could not find page!</h3>
        <p className="text-gray-900"><span className="font-bold">Invalid url:</span> "{slug}"</p>
        <Link href="/blog">Go Back</Link>
      </div>
    )
  }
  return (
    <Suspense fallback={<Loading />}>
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Suspense>
  )
}

export default About
