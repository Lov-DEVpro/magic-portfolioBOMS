import {
  Heading,
  SmartLink,
  Carousel,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Card,
  Media,
  Flex,
  Background,
} from "@once-ui-system/core";
import { home, about, blog, person, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { ServicesList } from "@/components/home/ServicesList";
import { LogoTicker } from "@/components/home/LogoTicker";
import { ContactForm } from "@/components/home/ContactForm";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={[
            { slide: "/images/hero carousel 1920x1080/Untitled-1.jpg", alt: "BOMS-expo hero image 1" },
            { slide: "/images/hero carousel 1920x1080/Untitled-2.jpg", alt: "BOMS-expo hero image 2" },
            { slide: "/images/hero carousel 1920x1080/Untitled-3.jpg", alt: "BOMS-expo hero image 3" },
          ]}
        />
      </RevealFx>

      {/* SECTION 1: O NAMA */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth style={{ paddingTop: '34px', paddingBottom: '34px' }}>
          <Row fillWidth gap="32" vertical="start">
            <Column flex={1} gap="16">
              <Column gap="4">
                <Row fillWidth horizontal="between" vertical="start">
                  <Text variant="label-default-s" onBackground="brand-medium" style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Preko 2 decenije iskustva
                  </Text>
                  <div style={{ width: '180px', marginTop: '-12px' }}>
                    <img src="/images/logo.png" alt="BOMS-expo logo" style={{ width: '100%', height: 'auto' }} />
                  </div>
                </Row>
                <Heading variant="display-strong-xs">Prvo je bila ideja</Heading>
              </Column>
              <Text variant="heading-default-l" onBackground="neutral-weak">
                Pomažemo Vam da svoju ideju pretvorite u stvarnost
              </Text>
              <Column gap="12">
                <Text variant="body-default-m" onBackground="neutral-alpha-medium" style={{ lineHeight: '1.6' }}>
                  Ideja je samo misao sve dok se ne sprovede u djelo. Uz desetljeća iskustva i naš kompetentan tim, osiguravamo da svaka vaša zamisao dobije željeni oblik, nudeći vam potpuno transparentan proces saradnje.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-alpha-medium" style={{ lineHeight: '1.6' }}>
                  Posjedujemo vlastiti magacin i radionicu, te stručno radimo sa OCTANORM sistemom, što nam omogućava izradu svih vrsta štandova kombinirajući drvo, metal i plastiku. Naša posvećenost kvaliteti ogleda se u preko 100 završenih projekata i stopi od 97% zadovoljnih kupaca.
                </Text>
              </Column>
              <SmartLink
                href="/about"
                suffixIcon="arrowRight"
                style={{ width: 'fit-content', marginTop: '16px' }}
              >
                <Text style={{ fontSize: '14px' }}>Pročitaj više</Text>
              </SmartLink>
            </Column>
          </Row>
        </Column>
      </RevealFx>

      <Line fillWidth style={{ height: '1px', opacity: 0.25 }} />

      {/* PORTFOLIO TEASER SECTION */}
      <RevealFx translateY="16" delay={0.9}>
        <Column fillWidth style={{ paddingTop: '34px', paddingBottom: '34px' }}>
          <Heading variant="heading-strong-xl" marginBottom="24">
            Istražite naše radove...
          </Heading>
          <Card
            fillWidth
            href="/work"
            transition="micro-medium"
            border="transparent"
            background="transparent"
            padding="4"
            radius="l-4"
            gap="24"
            s={{ direction: "column" }}
          >
            <Media
              priority
              sizes="(max-width: 768px) 100vw, 640px"
              border="neutral-alpha-weak"
              cursor="interactive"
              radius="l"
              src="/images/projects/project-01/cover-01.jpg"
              alt="Zavirite u naš portfolio"
              aspectRatio="16 / 9"
            />
            <Row fillWidth>
              <Column maxWidth={32} paddingY="24" paddingX="l" gap="20" vertical="center">
                <Row gap="24" vertical="center">
                  <Row vertical="center" gap="16">
                    <Avatar src="/images/avatar.jpg" size="s" />
                    <Text variant="label-default-s">BOMS-expo</Text>
                  </Row>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    100+ završenih projekata
                  </Text>
                </Row>
                <Text variant="heading-strong-xl" wrap="balance">
                  Zavirite u naš portfolio
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Od idejnih rješenja do finalne realizacije sajamskih štandova i bazena.
                </Text>
              </Column>
            </Row>
          </Card>
        </Column>
      </RevealFx>

      <Line fillWidth style={{ height: '1px', opacity: 0.25 }} />

      {/* SECTION 2: USLUGE */}
      <RevealFx translateY="16" delay={1.0}>
        <Column 
          fillWidth 
          position="relative" 
          overflow="hidden" 
          radius="l-4"
          border="neutral-alpha-weak"
          background="surface"
          style={{ paddingTop: '34px', paddingBottom: '34px' }}
        >
          <Background
            position="absolute"
            mask={{
              cursor: true,
              radius: 100,
            }}
            gradient={{
              display: true,
              opacity: 30,
              width: 100,
              height: 100,
              colorStart: "#20356a",
              colorEnd: "static-transparent",
            }}
            dots={{
              display: true,
              opacity: 20,
              color: "brand-on-background-weak",
            }}
          />
          <Row fillWidth gap="32" s={{ direction: 'column-reverse' }} vertical="start" zIndex={1} paddingX="l">
            <Column flex={3} gap="16">
              <Text variant="label-default-s" onBackground="brand-medium" style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
                Šta radimo
              </Text>
              <Heading variant="display-strong-xs">Naše usluge</Heading>
              <Text variant="heading-default-l" onBackground="neutral-weak">
                Svakom projektu pristupamo individualno i profesionalno
              </Text>
              <Text variant="body-default-l" onBackground="neutral-alpha-medium">
                Vaš smo pouzdan partner kada treba pravovremeno i profesionalno odraditi sve pripreme. Naše usluge obuhvataju:
              </Text>
              <ServicesList />
            </Column>
            <Column flex={2}>
              <Media
                src="/images/projects/project-01/cover-02.jpg"
                alt="BOMS-expo usluge"
                aspectRatio="16 / 10"
                radius="l"
                border="neutral-alpha-weak"
              />
            </Column>
          </Row>
        </Column>
      </RevealFx>
      <Line fillWidth style={{ height: '1px', opacity: 0.25 }} />
      {/* PARTNER LOGOS SECTION */}
      <RevealFx translateY="16" delay={1.1}>
        <Column fillWidth style={{ paddingTop: '8px', paddingBottom: '8px' }}>
          <LogoTicker />
        </Column>
      </RevealFx>
      <Line fillWidth style={{ height: '1px', opacity: 0.25 }} />
      <Projects range={[2]} />
    </Column>
  );
}
