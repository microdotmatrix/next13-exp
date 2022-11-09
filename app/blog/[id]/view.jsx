export default async function PostView({ post }) {
  return (
    <article className="post-content prose">
      <h1>{post.title.rendered}</h1>
      <p>{new Date(post.date).toDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  )
}