import Image from 'next/image'
import Content from '@comp/content'
import FeaturedImage from '@comp/page/featured-image'

export default async function PageView({ page }) {
  return (
    <div className="flex flex-row">
      <FeaturedImage>
        <Image src={page.featuredImage.node.sourceUrl} alt={page.title} fill="cover" className="relative w-full h-full" />
      </FeaturedImage>
      <div className='w-2/3 mr-0 ml-auto'>
        <Content className="page-content">
          <h1>{page.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Content>
      </div>
    </div>
  )
}
