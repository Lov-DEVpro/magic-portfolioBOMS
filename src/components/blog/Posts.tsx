import { getPosts } from "@/utils/utils";
import { PostGrid } from "./PostGrid";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
  hrefPrefix?: string;
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
  hrefPrefix,
}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "portfolio", "posts"]);

  // Exclude by slug (exact match)
  if (exclude.length) {
    allBlogs = allBlogs.filter((post) => !exclude.includes(post.slug));
  }

  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;

  return (
    <PostGrid
      posts={displayedBlogs}
      columns={columns}
      thumbnail={thumbnail}
      direction={direction}
      hrefPrefix={hrefPrefix}
    />
  );
}
