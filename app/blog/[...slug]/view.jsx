import { formatDate } from "@util/date"
import Content from '@comp/content';

export default async function PostView({ post }) {
  return (
    <Content className="post-content prose">
      <h1>{post.title}</h1>
      <p>{post.date && <span> on {formatDate(post.date)}</span>}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Content>
  )
}