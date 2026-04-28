import { CustomMDX, ScrollToHash } from "@/components";
import { PostScroller } from "@/components/blog/PostScroller";
import { ShareSection } from "@/components/blog/ShareSection";
import { about, baseURL, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import {
  Avatar,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
  Grid,
  Button,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "portfolio", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "portfolio", "posts"]);
  const post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function PortfolioPost({ params }: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const allPosts = getPosts(["src", "app", "portfolio", "posts"]);
  const post = allPosts.find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  return (
    <Row fillWidth>
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="l" horizontal="center" gap="l" style={{ paddingTop: "30px" }}>
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ||
              `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
            }
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Column maxWidth="m" gap="16" horizontal="center" align="center">
            <SmartLink href="/portfolio">
              <Text variant="label-strong-m">Portfolio</Text>
            </SmartLink>
            <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
            <Heading variant="display-strong-m" align="center">{post.metadata.title}</Heading>
            {post.metadata.summary && (
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                align="center"
              >
                {post.metadata.summary}
              </Text>
            )}
            <Row gap="12" marginTop="16">
              <Button
                href={`/api/portfolio-pdf/${post.slug}`}
                variant="secondary"
                size="m"
              >
                Preuzmi PDF
              </Button>
            </Row>
          </Column>
          <Row marginBottom="32" horizontal="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-m" onBackground="brand-weak">
                {person.name}
              </Text>
            </Row>
          </Row>
          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={post.metadata.title}
              aspectRatio="16/9"
              priority
              sizes="(min-width: 768px) 100vw, 100vw"
              border="neutral-alpha-weak"
              radius="l"
              marginTop="12"
              marginBottom="8"
              enlarge
            />
          )}
          
          <Column as="article" maxWidth="m" fillWidth gap="l">
            <CustomMDX source={post.content} />
            
            {post.metadata.images && post.metadata.images.length > 0 && (
              <Column gap="m" marginTop="l">
                <Text variant="heading-strong-m">Galerija projekta</Text>
                <Grid columns="2" s={{ columns: '1' }} gap="m">
                  {post.metadata.images.map((img: string, index: number) => (
                    <Media
                      key={index}
                      src={img}
                      alt={`${post.metadata.title} - slika ${index + 1}`}
                      aspectRatio="16/9"
                      radius="m"
                      border="neutral-alpha-weak"
                      enlarge
                    />
                  ))}
                </Grid>
              </Column>
            )}
          </Column>

          <ShareSection title={post.metadata.title} url={`${baseURL}${blog.path}/${post.slug}`} />

          <Column fillWidth gap="24" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <Text as="h2" id="recent-posts" variant="heading-strong-xl" marginBottom="12">
              Ostale reference
            </Text>
            <PostScroller 
                exclude={[post.slug]} 
                range={[1, 6]} 
                thumbnail 
                hrefPrefix="/portfolio"
                postsPath={["src", "app", "portfolio", "posts"]}
            />
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
    </Row>
  );
}