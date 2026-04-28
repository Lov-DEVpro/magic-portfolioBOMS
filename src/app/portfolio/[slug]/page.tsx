import { CustomMDX, ScrollToHash } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { ShareSection } from "@/components/blog/ShareSection";
import { about, baseURL, blog, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import {
  Avatar,
  Button,
  Column,
  Heading,
  HeadingNav,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const fallbackImage = "/images/portfolio teasers 1200x675/Untitled-1.jpg";

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
    image: post.metadata.image || fallbackImage,
    path: `${blog.path}/${post.slug}`,
  });
}

export default async function PortfolioPost({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getPosts(["src", "app", "portfolio", "posts"]).find(
    (post) => post.slug === slugPath,
  );

  if (!post) {
    notFound();
  }

  const image = post.metadata.image || fallbackImage;
  const pdfUrl = `/api/portfolio-pdf/${post.slug}`;
  const hasContent = post.content.trim().length > 0;

  return (
    <Row fillWidth>
      <Row maxWidth={12} m={{ hide: true }} />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="m" horizontal="center" gap="l" paddingTop="24">
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={`${blog.path}/${post.slug}`}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={image}
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Column maxWidth="s" gap="16" horizontal="center" align="center">
            <SmartLink href={blog.path}>
              <Text variant="label-strong-m">{blog.label}</Text>
            </SmartLink>
            <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
            <Heading variant="display-strong-m">{post.metadata.title}</Heading>
            {post.metadata.summary && (
              <Text variant="body-default-l" onBackground="neutral-weak" align="center">
                {post.metadata.summary}
              </Text>
            )}
            {post.metadata.subtitle && (
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                align="center"
                style={{ fontStyle: "italic" }}
              >
                {post.metadata.subtitle}
              </Text>
            )}
            <Button href={pdfUrl} variant="primary" size="m" suffixIcon="document">
              Preuzmi PDF projekta
            </Button>
          </Column>
          <Row marginBottom="32" horizontal="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-m" onBackground="brand-weak">
                {person.name}
              </Text>
            </Row>
          </Row>
          <Media
            src={image}
            alt={post.metadata.title}
            aspectRatio="16/9"
            priority
            sizes="(min-width: 768px) 100vw, 768px"
            border="neutral-alpha-weak"
            radius="l"
            marginTop="12"
            marginBottom="8"
          />
          <Column as="article" maxWidth="s">
            {hasContent ? (
              <CustomMDX source={post.content} />
            ) : (
              <Text variant="body-default-l">{post.metadata.summary}</Text>
            )}
          </Column>

          <ShareSection title={post.metadata.title} url={`${baseURL}${blog.path}/${post.slug}`} />

          <Column fillWidth gap="40" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <Text as="h2" id="recent-posts" variant="heading-strong-xl" marginBottom="24">
              Ostale reference
            </Text>
            <Posts
              exclude={[post.slug]}
              range={[1, 2]}
              columns="2"
              thumbnail
              direction="column"
              hrefPrefix={blog.path}
              postsPath={["src", "app", "portfolio", "posts"]}
            />
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column
        maxWidth={12}
        paddingLeft="40"
        fitHeight
        position="sticky"
        top="80"
        gap="16"
        m={{ hide: true }}
      >
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
