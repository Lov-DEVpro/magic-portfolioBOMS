import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";

import { Footer, FooterForm, Header, Providers, RouteGuard } from "@/components";
import { baseURL, dataStyle, effects, fonts, home, style } from "@/resources";
import {
  Background,
  Column,
  Flex,
  Meta,
  RevealFx,
  type SpacingToken,
  type opacity,
} from "@once-ui-system/core";

export async function generateMetadata() {
  return {
    ...Meta.generate({
      title: home.title,
      description: home.description,
      baseURL: baseURL,
      path: home.path,
      image: home.image,
    }),
    icons: {
      icon: "/images/boms_logo.png",
      apple: "/images/boms_logo.png",
    },
  };
}

const extensionCleanupScript = `
  (function() {
    var attrs = ["bis_skin_checked", "bis_use", "data-bis-config", "data-dynamic-id"];
    var clean = function(root) {
      if (!root || root.nodeType !== 1) return;
      attrs.forEach(function(attr) {
        if (root.hasAttribute(attr)) root.removeAttribute(attr);
      });
      root.querySelectorAll("[bis_skin_checked], [bis_use], [data-bis-config], [data-dynamic-id]").forEach(function(node) {
        attrs.forEach(function(attr) {
          node.removeAttribute(attr);
        });
      });
      root.querySelectorAll('script[src^="chrome-extension://"]').forEach(function(node) {
        node.remove();
      });
    };

    clean(document.documentElement);

    new MutationObserver(function(list) {
      list.forEach(function(change) {
        if (change.type === "attributes") clean(change.target);
        change.addedNodes.forEach(clean);
      });
    }).observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  })();
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <meta charSet="utf-8" />
        <script
          id="extension-cleanup"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: runs before hydration to remove extension-injected DOM mutations
          dangerouslySetInnerHTML={{
            __html: extensionCleanupScript,
          }}
        />
        <script
          id="theme-init"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: initializes theme attributes before hydration
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          suppressHydrationWarning
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <Background
            position="absolute"
            fill
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: effects.mask.cursor,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{
              display: effects.grid.display,
              opacity: effects.grid.opacity as opacity,
              color: effects.grid.color,
              width: effects.grid.width,
              height: effects.grid.height,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
              thickness: effects.lines.thickness,
              angle: effects.lines.angle,
              color: effects.lines.color,
            }}
          />
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth horizontal="center" flex={1}>
            <Column horizontal="center" fillWidth minHeight="0" maxWidth="m" paddingX="l">
              <RouteGuard>{children}</RouteGuard>
              <div id="contact" style={{ width: "100%" }}>
                <FooterForm />
              </div>
            </Column>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
