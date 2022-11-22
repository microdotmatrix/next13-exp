import Link from 'next/link'

// Post list rendering component, props passed from page.jsx
export default async function PostList({ posts }) {
  return (
    <div>
      {posts.nodes?.map((post, index) => (
        <article className="post-item" key={index}>
          <Link href={`/blog/${post.slug}`}><h2>{post.title}</h2></Link>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </article>
      ))}
    </div>
  )
}