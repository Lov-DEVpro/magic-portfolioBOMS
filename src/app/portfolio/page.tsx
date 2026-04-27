import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { PortfolioPostsClient } from "@/components/blog/PortfolioPostsClient";
import { baseURL, blog, person } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: "Portfolio",
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Portfolio")}`,
    path: "/portfolio",
  });
}

export default function Portfolio() {
  const posts = getPosts(["src", "app", "portfolio", "posts"]).sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title="Portfolio"
        description={blog.description}
        path="/portfolio"
        image={`/api/og/generate?title=${encodeURIComponent("Portfolio")}`}
        author={{
          name: person.name,
          url: `${baseURL}/portfolio`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading
        marginBottom="l"
        variant="heading-strong-xl"
        marginLeft="24"
        style={{ marginTop: "25px" }}
      >
        Portfolio
      </Heading>
      <PortfolioPostsClient posts={posts} />
    </Column>
  );
}
