import Image from 'next/image'
import { formatDate } from "@util/date"
import FeaturedImage from '@comp/page/featured-image'
import Content from '@comp/content'

export default async function PostView({ post }) {
  return (
    <div className="flex flex-col md:flex-row">
      <FeaturedImage>
        <Image src={post.featuredImage.node.sourceUrl} alt={post.title} fill="cover" className="relative w-full h-full object-cover" />
      </FeaturedImage>
      <div className='w-full md:w-2/3 mx-auto md:mr-0 md:ml-auto'>
        <Content className="post-content">
          <h1>{post.title}</h1>
          <p>{post.date && <span> on {formatDate(post.date)}</span>}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Content>
      </div>
    </div>
  )
}