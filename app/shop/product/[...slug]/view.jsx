import Image from 'next/image'
import Content from '@comp/content';
import FeaturedImage from '@comp/page/featured-image'

export default async function ProductView({ product }) {
  return (
    <div className="flex flex-col md:flex-row">
      <FeaturedImage>
        <Image src={product.image?.sourceUrl} alt={product.name} fill="cover" className="relative w-full h-full object-cover" />
      </FeaturedImage>
      
      <Content className='product-content w-full md:w-2/3 mx-auto md:mr-0 md:ml-auto'>
        <h1>{product.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </Content>
    </div>
  )
}