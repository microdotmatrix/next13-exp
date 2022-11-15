import { gql } from 'graphql-request'
import { graphql } from '@lib/wp'

const metaQuery = gql`
  query PageMeta {
    pageBy(uri: "about") {
      id
      seo {
        metaDesc
        opengraphDescription
        opengraphImage {
          sourceUrl
        }
        opengraphTitle
        twitterTitle
        twitterDescription
        twitterImage {
          sourceUrl
        }
        title
      }
      slug
    }
  }
`

export async function getMetaData() {
  let data = await graphql.request(metaQuery, {})

  return data?.pageBy
}

export default async function Head() {
  let page = await getMetaData()
  let { title, metaDesc, opengraphDescription, opengraphImage, opengraphTitle, twitterTitle, twitterDescription, twitterImage } = page.seo;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDesc} />
      <meta name="og:title" content={opengraphTitle} />
      <meta name="og:description" content={opengraphDescription} />
      <meta name="og:image" content={opengraphImage.sourceUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage.sourceUrl} />
    </>
  )
}