import Image from "next/image";
import Content from "@comp/content";
import FeaturedImage from "@comp/page/featured-image";

const blurImgUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAoAAAAA/8AAEQgACgAKAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A+3/HPx10jQPE0+k6ZrPh6TTtKsbi41R7nVUiu7WeMkQxi2H3lk2su4sCrjBHFd54c+InhvxJ4e0vxFa3aRw6pawXSKxG5VnQOAfcA81474z8G+ENU1OeXU9Dsbt/N8zdNbRSHfn72WU/N79a9U03TtPj061jjtYkRIkAARQAAowAMV2Sa7GsIH//2Q=='

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
          placeholder="blur"
          blurDataURL={blurImgUrl}
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
