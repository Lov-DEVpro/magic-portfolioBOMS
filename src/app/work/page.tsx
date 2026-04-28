import { Column, Heading, Meta, Schema, Grid, Button, RevealFx, Media, Card, Icon, Row, SmartLink, Background, Text } from "@once-ui-system/core";
import { baseURL, about, person, work, effects } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

const services = [
  {
    title: "Sajamska industrija",
    text: "Nudimo kompletna 'ključ u ruke' rješenja za vaš sajamski nastup. Kroz decenije iskustva, razumijemo dinamiku sajmova i preuzimamo kompletnu brigu o vašem predstavljanju.",
    image: "/images/projects/project-01/cover-01.jpg"
  },
  {
    title: "Projektovanje sajamskih štandova",
    text: "Naš dizajnerski tim pažljivo sluša vaše zahtjeve i viziju pretvara u funkcionalan 3D koncept, komunicirajući identitet vašeg brenda.",
    image: "/images/projects/project-01/cover-02.jpg"
  },
  {
    title: "Izrada sajamskih štandova",
    text: "Posjedujemo vlastiti magacin i radionicu. Stručno radimo sa OCTANORM sistemom, izrađujući štandove i kombinirajući drvo, metal i plastiku.",
    image: "/images/projects/project-01/cover-03.jpg"
  },
  {
    title: "Opremanje sajmova",
    text: "Nudimo sveobuhvatno opremanje prostora, uključujući pagode, podove, rasvjetu i namještaj. Vodimo računa o svakom detalju.",
    image: "/images/projects/project-01/cover-04.jpg"
  },
  {
    title: "Transport i skladištenje",
    text: "Osiguravamo siguran transport svih elemenata do lokacije i nudimo mogućnost sigurnog skladištenja opreme u našem magacinu.",
    image: "/images/projects/project-01/cover-01.jpg"
  },
  {
    title: "Montaža i demontaža",
    text: "Naši iskusni monteri garantuju brzu, sigurnu i preciznu postavku, kao i efikasno raspremanje štanda po završetku događaja.",
    image: "/images/projects/project-01/cover-02.jpg"
  }
];

export default function Work() {
  return (
    <Column maxWidth="l" fillWidth style={{ paddingTop: "30px", paddingBottom: "32px" }} position="relative">
      <Background
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
      />
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* CORE SERVICES */}
      <Column fillWidth gap="xl" marginBottom="80">
        <Column maxWidth="m" gap="16">
          <RevealFx translateY="4">
            <Text variant="label-default-s" onBackground="brand-medium" style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
              Šta radimo
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.1}>
            <Heading variant="display-strong-m">Naše usluge</Heading>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2}>
            <Text variant="heading-default-m" onBackground="neutral-weak">
              Vaš smo pouzdan partner kada treba pravovremeno i profesionalno odraditi sve pripreme. Svakom projektu pristupamo individualno, nudeći vam potpuno transparentan proces saradnje.
            </Text>
          </RevealFx>
        </Column>

        <Grid columns="2" s={{ columns: '1fr' }} gap="l" fillWidth>
          {services.map((service, index) => (
            <RevealFx key={index} translateY="12" delay={index * 0.1}>
              <Card
                className="service-card-hover"
                fillWidth
                background="surface"
                radius="l-4"
                border="neutral-alpha-weak"
                padding="0"
                position="relative"
                style={{ 
                  overflow: 'hidden',
                  cursor: 'default'
                }}
              >
                <Background
                  position="absolute"
                  mask={{
                    cursor: true,
                    radius: 80,
                  }}
                  gradient={{
                    display: true,
                    opacity: 20,
                    width: 100,
                    height: 100,
                    colorStart: "#20356a",
                    colorEnd: "static-transparent",
                  }}
                  dots={{
                    display: true,
                    opacity: 10,
                    color: "brand-on-background-weak",
                  }}
                />
                <Column fillWidth zIndex={1} position="relative">
                  <Media
                    src={service.image}
                    alt={service.title}
                    aspectRatio="16 / 10"
                    radius="none"
                    style={{ objectFit: 'cover' }}
                  />
                  <Column padding="24" gap="12">
                    <Heading variant="heading-strong-l">{service.title}</Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {service.text}
                    </Text>
                  </Column>
                </Column>
              </Card>
            </RevealFx>
          ))}
        </Grid>
      </Column>

      {/* SECONDARY SERVICES */}
      <RevealFx translateY="16" fillWidth>
        <Column fillWidth background="neutral-alpha-weak" radius="l-4" padding="xl" gap="32" horizontal="center" position="relative" marginBottom="80">
          <Heading variant="display-strong-xs">Više od sajmova</Heading>
          <Grid columns="2" s={{ columns: '1fr' }} gap="40" fillWidth>
            <Row gap="24" vertical="start">
              <Icon name="grid" size="l" onBackground="brand-medium" />
              <Column gap="8">
                <Text variant="heading-strong-l">Bazeni</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Kompletna usluga projektovanja, prodaje i izgradnje bazena i opreme.
                </Text>
              </Column>
            </Row>
            <Row gap="24" vertical="start">
              <Icon name="openLink" size="l" onBackground="brand-medium" />
              <Column gap="8">
                <Text variant="heading-strong-l">Webshop</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Naš web-shop <SmartLink href="https://www.zhara.ba">www.zhara.ba</SmartLink> nudi kvalitetne proizvode po pristupačnim cijenama.
                </Text>
              </Column>
            </Row>
          </Grid>
        </Column>
      </RevealFx>

      {/* CTA SECTION */}
      <RevealFx translateY="16" delay={0.2} fillWidth>
        <Column 
          fillWidth 
          marginTop="80"
          marginBottom="80"
          paddingY="80" 
          paddingX="l"
          horizontal="center" 
          background="surface" 
          radius="l-4" 
          border="neutral-alpha-weak"
          gap="24"
          position="relative"
        >
          <Heading variant="display-strong-s" align="center">Spremni za saradnju?</Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '40rem' }}>
            Naša posvećenost kvaliteti ogleda se u preko 100 završenih projekata i stopi od 97% zadovoljnih kupaca. Dozvolite nam da i vaš projekat učinimo uspješnim.
          </Text>
          <Button
            href="/about"
            variant="primary"
            size="l"
            weight="default"
            suffixIcon="arrowRight"
          >
            Zatražite ponudu
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
