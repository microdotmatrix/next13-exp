import Link from 'next/link'
import Image from 'next/image'
import AddToCart from '@comp/shop/add-button'

export default async function ProductList({ products }) {

  return (
    <div>
      {products.nodes?.map((product, index) => (
        <article className="product-item flex flex-row gap-4 items-center" key={index}>
          <div className="flex-1 w-1/3">
            <Image src={product.image.sourceUrl} alt={product.image.altText} width={product.image.mediaDetails.width} height={product.image.mediaDetails.height} className="w-full h-full object-cover" />
          </div>
          <div className='flex-2 w-2/3'>
            <Link href={`/shop/product/${product.slug}`}><h2>{product.name}</h2></Link>
            <div dangerouslySetInnerHTML={{ __html: product.shortDescription }} />
            <h3>{product.price}</h3>
            <AddToCart product={product} />
          </div>
        </article>
      ))}
    </div>
  )
}