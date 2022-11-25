import Image from "next/image";
import Content from "@comp/content";
import FeaturedImage from "@comp/page/featured-image";

// Page detail rendering component, props passed from page.jsx
export default async function PageView({ page }) {
  let { title, content, featuredImage } = page;
  return (
    <div className="flex flex-row">
      <FeaturedImage>
        <Image
          src={featuredImage?.node.sourceUrl}
          alt={title}
          height={featuredImage?.node.mediaDetails.height}
          width={featuredImage?.node.mediaDetails.width}
          className="relative w-full h-full object-cover"
        />
      </FeaturedImage>
      <Content className="page-content">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
    </div>
  );
}
