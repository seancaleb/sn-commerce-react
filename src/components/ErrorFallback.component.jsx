import { Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import { WarningFilled } from "@ant-design/icons";

const ErrorFallback = ({ error }) => {
  return (
    <GridItem colSpan={12}>
      <Flex {...styles.container}>
        <WarningFilled style={{ ...styles.icon }} />
        <Heading {...styles.title}>Something went wrong</Heading>
        {error && <Text {...styles.text}>{error.message}</Text>}
      </Flex>
    </GridItem>
  );
};

export default ErrorFallback;

const styles = {
  container: {
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    h: "100%",
    p: "40px",
  },
  icon: {
    color: "#111",
    fontSize: "24px",
  },
  title: {
    as: "h3",
    fontSize: "24px",
    textAlign: "center",
  },
  text: {
    color: "#999",
  },
};
