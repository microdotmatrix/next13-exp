import Link from 'next/link'

export default async function PostList({ posts }) {
  return (
    <div>
      {posts?.map((post, index) => (
        <article className="post-item" key={index}>
          <Link href={`/blog/${post.id}`}><h2>{post.title.rendered}</h2></Link>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </article>
      ))}
    </div>
  )
}