import { PortfolioPostsClient } from "@/components/blog/PortfolioPostsClient";
import { baseURL, blog, person } from "@/resources";
import { getPosts } from "@/utils/utils";
import { Column, Heading, Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Portfolio() {
  const posts = getPosts(["src", "app", "portfolio", "posts"]).sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <Column maxWidth="m" style={{ paddingTop: "30px" }}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${blog.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading
        marginBottom="l"
        variant="heading-strong-xl"
        marginLeft="24"
        
      >
        {blog.title}
      </Heading>
      <PortfolioPostsClient posts={posts} />
    </Column>
  );
}