import { Container, Text, Heading } from "@chakra-ui/react";
import styles from "./Footer.styles";
import globals from "../../theme/globalStyles";

const Footer = () => {
  return (
    <Container {...styles.container}>
      <Text {...styles.text}>Designed and developed by Sean Caleb</Text>
      <Heading {...globals.site__logo} order={{ base: -1, lg: 0 }}>
        SNCLB
      </Heading>
      <Text {...styles.text} textAlign="right">
        Created year — 2022
      </Text>
    </Container>
  );
};

export default Footer;
