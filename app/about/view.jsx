import Content from '@comp/content';

export default async function PageView({ page }) {
  return (
    <Content className="page-content">
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </Content>
  )
}