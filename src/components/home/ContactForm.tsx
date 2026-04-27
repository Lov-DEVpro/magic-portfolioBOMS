"use client";

import { useState } from "react";
import { 
  Button, 
  Heading, 
  Input, 
  Text, 
  Background, 
  Column, 
  Row, 
  Flex,
  Textarea,
  Select,
  opacity,
  SpacingToken
} from "@once-ui-system/core";
import { mailchimp } from "@/resources";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const services = [
    { label: "Organizacija sajmova", value: "organizacija-sajmova" },
    { label: "Opremanje sajmova", value: "opremanje-sajmova" },
    { label: "Projektovanje sajamskih štandova", value: "projektovanje-sajamskih-standova" },
    { label: "Izrada sajamskih štandova", value: "izrada-sajamskih-standova" },
    { label: "Transport i skladištenje", value: "transport-i-skladistenje" },
    { label: "Montaža i demontaža", value: "montaza-i-demontaza" }
  ];

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l-4"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      position="relative"
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: true,
          opacity: 30,
          x: 50,
          y: 0,
          width: 100,
          height: 100,
          tilt: 0,
          colorStart: "#20356a",
          colorEnd: "static-transparent",
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
      />
      
      <Column maxWidth="s" horizontal="center" zIndex={1} gap="32">
        <Column horizontal="center" gap="12">
          <Heading variant="display-strong-xs" align="center">
            Zatražite ponudu ili nas kontaktirajte
          </Heading>
          <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak" align="center">
            Imate ideju za projekat ili pitanje o našim uslugama? Popunite formu ispod i naš tim će Vam se javiti u najkraćem roku.
          </Text>
        </Column>

        <Column fillWidth gap="16">
          <Row gap="16" s={{ direction: 'column' }}>
            <Input
              id="name"
              label="Ime i prezime"
              placeholder="Vaše puno ime"
              required
            />
            <Input
              id="email"
              label="Email adresa"
              placeholder="example@email.com"
              type="email"
              required
            />
          </Row>
          <Row gap="16" s={{ direction: 'column' }}>
            <Input
              id="phone"
              label="Broj telefona"
              placeholder="+387 61 000 000"
            />
            <Select
              id="service"
              label="Usluga koja Vas zanima"
              options={services}
              onSelect={(value) => setFormData({ ...formData, service: value })}
            />
          </Row>
          <Textarea
            id="message"
            label="Vaša poruka"
            placeholder="Opišite Vaš upit ili projekat..."
            required
          />
          <Button variant="primary" size="l" fillWidth style={{ marginTop: '16px' }}>
            Pošalji upit
          </Button>
        </Column>
      </Column>
    </Column>
  );
};
