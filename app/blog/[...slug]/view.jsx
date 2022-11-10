import { formatDate } from "@util/date"

export default async function PostView({ post }) {
  return (
    <article className="post-content prose">
      <h1>{post.title}</h1>
      <p>{post.date && <span> on {formatDate(post.date)}</span>}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}