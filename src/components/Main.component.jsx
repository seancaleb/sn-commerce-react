import { Container } from "@chakra-ui/react";

const Main = ({ children }) => {
  return <Container {...styles.main}>{children}</Container>;
};

export default Main;

const styles = {
  main: {
    as: "main",
    maxW: "1440px",
    minH: "100vh",
  },
};
