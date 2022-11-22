import Image from 'next/image'

// Load content and featured image components
import Content from '@comp/content'
import FeaturedImage from '@comp/page/featured-image'

// Page detail rendering component, props passed from page.jsx
export default async function PageView({ page }) {
  return (
    <div className="flex flex-row">
      <FeaturedImage>
        <Image src={page.featuredImage.node.sourceUrl} alt={page.title} fill="cover" className="relative w-full object-cover" />
      </FeaturedImage>
      <Content className="page-content">
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Content>
    </div>
  )
}
