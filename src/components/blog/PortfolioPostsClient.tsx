"use client";

import { Button, Column } from "@once-ui-system/core";
import { useState } from "react";
import { PostGrid } from "./PostGrid";

type PortfolioPost = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    image?: string;
    tag?: string;
  };
};

interface PortfolioPostsClientProps {
  posts: PortfolioPost[];
}

export function PortfolioPostsClient({ posts }: PortfolioPostsClientProps) {
  const [visibleCount, setVisibleCount] = useState(3);

  const firstPost = posts.slice(0, 1);
  const featuredPosts = posts.slice(1, 3);
  const additionalPosts = posts.slice(3, visibleCount);

  return (
    <Column fillWidth flex={1} gap="40">
      <PostGrid posts={firstPost} thumbnail hrefPrefix="/portfolio" />
      <PostGrid
        posts={featuredPosts}
        columns="2"
        thumbnail
        direction="column"
        hrefPrefix="/portfolio"
      />

      {visibleCount > 3 && <PostGrid posts={additionalPosts} columns="2" hrefPrefix="/portfolio" />}

      {visibleCount < posts.length && (
        <Column fillWidth horizontal="center" marginBottom="l">
          <Button
            variant="secondary"
            onClick={() => setVisibleCount((prev) => prev + 4)}
            style={{ width: "fit-content" }}
          >
            Učitaj više
          </Button>
        </Column>
      )}
    </Column>
  );
}
