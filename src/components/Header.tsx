"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Column, Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { about, blog, display, gallery, person, routes, work } from "@/resources";
import styles from "./Header.module.scss";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        };
        const timeString = new Intl.DateTimeFormat(locale, options).format(now);
        setCurrentTime(timeString);
      } catch (e) {
        console.error("Invalid timezone:", timeZone);
        setCurrentTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export { TimeDisplay };

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Column
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        horizontal="center"
        s={{
          position: "fixed",
        }}
      >
        <Row fillWidth padding="8" horizontal="center" data-border="rounded">
          <Row
            paddingLeft="12"
            fillWidth
            vertical="center"
            textVariant="body-default-s"
            s={{ hide: true }}
          >
            {display.location && <Row>{person.location}</Row>}
          </Row>
          <Row fillWidth horizontal="center">
            <Row
              background="page"
              border="neutral-alpha-weak"
              radius="m-4"
              shadow="l"
              padding="4"
              horizontal="center"
              zIndex={1}
            >
              <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
                {routes["/"] && (
                  <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
                )}
                <Line background="neutral-alpha-medium" vert maxHeight="24" />
                {routes["/about"] && (
                  <>
                    <Row s={{ hide: true }}>
                      <ToggleButton
                        prefixIcon="person"
                        href="/about"
                        label={about.label}
                        selected={pathname === "/about"}
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <ToggleButton
                        prefixIcon="person"
                        href="/about"
                        selected={pathname === "/about"}
                      />
                    </Row>
                  </>
                )}
                {routes["/work"] && (
                  <>
                    <Row s={{ hide: true }}>
                      <ToggleButton
                        prefixIcon="grid"
                        href="/work"
                        label={work.label}
                        selected={pathname.startsWith("/work")}
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <ToggleButton
                        prefixIcon="grid"
                        href="/work"
                        selected={pathname.startsWith("/work")}
                      />
                    </Row>
                  </>
                )}
                {routes["/portfolio"] && (
                  <>
                    <Row s={{ hide: true }}>
                      <ToggleButton
                        prefixIcon="book"
                        href={blog.path}
                        label={blog.label}
                        selected={pathname.startsWith(blog.path)}
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <ToggleButton
                        prefixIcon="book"
                        href={blog.path}
                        selected={pathname.startsWith(blog.path)}
                      />
                    </Row>
                  </>
                )}
                {routes["/blog"] && (
                  <>
                    <Row s={{ hide: true }}>
                      <ToggleButton
                        prefixIcon="document"
                        href="/blog"
                        label="Blog"
                        selected={pathname.startsWith("/blog")}
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <ToggleButton
                        prefixIcon="document"
                        href="/blog"
                        selected={pathname.startsWith("/blog")}
                      />
                    </Row>
                  </>
                )}
                {routes["/gallery"] && (
                  <>
                    <Row s={{ hide: true }}>
                      <ToggleButton
                        prefixIcon="gallery"
                        href="/gallery"
                        label={gallery.label}
                        selected={pathname.startsWith("/gallery")}
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <ToggleButton
                        prefixIcon="gallery"
                        href="/gallery"
                        selected={pathname.startsWith("/gallery")}
                      />
                    </Row>
                  </>
                )}
                {display.themeSwitcher && (
                  <>
                    <Line background="neutral-alpha-medium" vert maxHeight="24" />
                    <ThemeToggle />
                  </>
                )}
              </Row>
            </Row>
          </Row>
          <Flex fillWidth horizontal="end" vertical="center" s={{ hide: true }}>
            <Flex
              paddingRight="12"
              horizontal="end"
              vertical="center"
              textVariant="body-default-s"
              gap="20"
            >
              <Flex>{display.time && <TimeDisplay timeZone={person.timeZone} />}</Flex>
            </Flex>
          </Flex>
        </Row>

        {/* MOBILE CENTERED INFO */}
        <Row className="mobile-center-info" textVariant="body-default-xs">
          {display.location && <Row>{person.location}</Row>}
          {display.time && <TimeDisplay timeZone={person.timeZone} />}
        </Row>
      </Column>
    </>
  );
};
