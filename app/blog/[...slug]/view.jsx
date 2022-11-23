import Image from "next/image";
import { formatDate } from "@util/date";
import FeaturedImage from "@comp/page/featured-image";
import Content from "@comp/content";

import placeholderImage from "@pub/images/bluesmoke.jpg";

// Post view rendering component, props passed from page.jsx
export default async function PostView({ post }) {
  let { title, date, content, featuredImage } = post;
  return (
    <div className="flex flex-col md:flex-row">
      {featuredImage ? (
        <FeaturedImage>
          <Image
            src={featuredImage?.node?.sourceUrl}
            alt={title}
            height={featuredImage?.node.mediaDetails.height}
            width={featuredImage?.node.mediaDetails.width}
            className="relative w-full h-full object-cover"
          />
        </FeaturedImage>
      ) : (
        <FeaturedImage>
          <Image
            src={placeholderImage}
            alt={title}
            height={featuredImage?.node.mediaDetails.height}
            width={featuredImage?.node.mediaDetails.width}
            className="relative w-full h-full object-cover"
          />
        </FeaturedImage>
      )}

      <Content className="post-content">
        <h1>{title}</h1>
        <p>{date && <span> on {formatDate(date)}</span>}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
    </div>
  );
}
