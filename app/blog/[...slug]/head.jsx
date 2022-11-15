import { graphql, PostMetaQuery } from '@lib/wp'

export async function getMetaData(slug) {
  let data = await graphql.request(PostMetaQuery, { slug})
  return data?.postBy
}

export default async function Head({ params }) {
  let slug = params.slug.toString()
  let post = await getMetaData(slug)
  let { title, metaDesc, opengraphDescription, opengraphImage, opengraphTitle, twitterTitle, twitterDescription, twitterImage } = post.seo;
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