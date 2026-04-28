import { Scroller, Row } from "@once-ui-system/core";
import Post from "./Post";
import { getPosts } from "@/utils/utils";

interface PostScrollerProps {
  range?: [number] | [number, number];
  exclude?: string[];
  hrefPrefix?: string;
  postsPath?: string[];
  thumbnail?: boolean;
}

export function PostScroller({
  range,
  exclude = [],
  hrefPrefix,
  postsPath = ["src", "app", "portfolio", "posts"],
  thumbnail = true,
}: PostScrollerProps) {
  const allPosts = getPosts(postsPath);
  
  let filteredPosts = allPosts;
  if (exclude.length) {
    filteredPosts = allPosts.filter((post) => !exclude.includes(post.slug));
  }

  const sortedPosts = filteredPosts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedPosts = range
    ? sortedPosts.slice(range[0] - 1, range.length === 2 ? range[1] : sortedPosts.length)
    : sortedPosts;

  if (!displayedPosts.length) return null;

  return (
    <Scroller fillWidth direction="row" gap="16" paddingBottom="24">
      {displayedPosts.map((post) => (
        <Row key={post.slug} style={{ minWidth: '300px' }}>
          <Post
            post={post}
            thumbnail={thumbnail}
            direction="column"
            hrefPrefix={hrefPrefix}
          />
        </Row>
      ))}
    </Scroller>
  );
}