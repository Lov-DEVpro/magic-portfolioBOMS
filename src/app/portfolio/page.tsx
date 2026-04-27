"use client";

import { useState } from "react";
import { Column, Heading, Meta, Schema, Button } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person } from "@/resources";

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

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
        style={{ marginTop: '25px' }}
      >
        Portfolio
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        
        {visibleCount > 3 && (
            <Posts range={[4, visibleCount]} columns="2" />
        )}

        {visibleCount < 16 && ( // Assuming user eventually adds 16 references
            <Column fillWidth horizontal="center" marginBottom="l">
                <Button
                    variant="secondary"
                    onClick={handleLoadMore}
                    style={{ width: 'fit-content' }}
                >
                    Učitaj više
                </Button>
            </Column>
        )}
      </Column>
    </Column>
  );
}
