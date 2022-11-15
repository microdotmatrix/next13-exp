import Content from '@comp/content';

export default async function ProductView({ product }) {
  return (
    <Content className="product-content">
      <h1>{product.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </Content>
  )
}