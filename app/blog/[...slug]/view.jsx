import Image from 'next/image'
import { formatDate } from "@util/date"
import FeaturedImage from '@comp/page/featured-image'
import Content from '@comp/content'

import placeholderImage from '@pub/images/bluesmoke.jpg'

export default async function PostView({ post }) {
  return (
    <div className="flex flex-col md:flex-row">
      {post.featuredImage ? (
        <FeaturedImage>
          <Image src={post.featuredImage?.node?.sourceUrl} alt={post.title} fill="cover" className="relative w-full h-full object-cover" />
        </FeaturedImage>
      ) : (
        <FeaturedImage>
          <Image src={placeholderImage} alt={post.title} fill="cover" className="relative w-full h-full object-cover" />
        </FeaturedImage>
      )}
      
      <Content className="post-content">
        <h1>{post.title}</h1>
        <p>{post.date && <span> on {formatDate(post.date)}</span>}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Content>
    </div>
  )
}