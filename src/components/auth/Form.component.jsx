import { Flex } from "@chakra-ui/react";

const Form = ({ children, onSubmit }) => {
  return (
    <Flex {...styles} onSubmit={onSubmit}>
      {children}
    </Flex>
  );
};

export default Form;

const styles = {
  as: "form",
  gap: "24px",
  flexDir: "column",
};
