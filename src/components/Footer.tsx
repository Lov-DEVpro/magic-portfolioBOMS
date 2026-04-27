import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© 2026 /</Text>
          <Text paddingX="4">BOMS-expo d.o.o.</Text>
          <Text onBackground="neutral-weak">
            / Created by <SmartLink href="https://ed-vision.com">Edvision</SmartLink>
          </Text>
        </Text>
        <Row gap="16">
          <IconButton
            href="https://www.facebook.com/BomsExpo/"
            icon="facebook"
            tooltip="Facebook"
            size="s"
            variant="ghost"
          />
          <IconButton
            href="mailto:info@bomsexpo.com"
            icon="email"
            tooltip="Email"
            size="s"
            variant="ghost"
          />
          <IconButton
            href="tel:+38735783040"
            icon="phone"
            tooltip="Telefon"
            size="s"
            variant="ghost"
          />
          <IconButton
            href="https://www.google.com/maps/search/?api=1&query=Stjepan+Polje+bb,+75320+Gračanica"
            icon="location"
            tooltip="Adresa"
            size="s"
            variant="ghost"
          />
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
