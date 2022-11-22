import Image from "next/image";
import Content from "@comp/content";
import FeaturedImage from "@comp/page/featured-image";

// Product detail rendering component, props passed from page.jsx
export default async function ProductView({ product }) {
  return (
    <div className="flex flex-col md:flex-row">
      <FeaturedImage>
        <Image
          src={product.image?.sourceUrl}
          alt={product.name}
          width={product.image?.mediaDetails?.width}
          height={product.image?.mediaDetails?.height}
          className="relative w-full h-full object-cover"
        />
      </FeaturedImage>

      <Content className="product-content">
        <h1>{product.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </Content>
    </div>
  );
}
