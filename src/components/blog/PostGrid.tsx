"use client";

import { Grid } from "@once-ui-system/core";
import Post from "./Post";

interface PostGridProps {
  posts: any[];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  hrefPrefix?: string;
}

export function PostGrid({
  posts,
  columns = "1",
  thumbnail = false,
  direction,
  hrefPrefix,
}: PostGridProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
      {posts.map((post) => (
        <Post
          key={post.slug}
          post={post}
          thumbnail={thumbnail}
          direction={direction}
          hrefPrefix={hrefPrefix}
        />
      ))}
    </Grid>
  );
}
