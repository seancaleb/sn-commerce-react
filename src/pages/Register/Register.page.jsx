import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import globals from "../../theme/globalStyles";
import styles from "./Register.styles";
import RegisterForm from "../../components/auth/Register/RegisterForm.component";

const RegisterPage = () => {
  return (
    <Flex {...styles.main}>
      <Box {...styles.col__one} />

      <Flex {...styles.col__two}>
        <Box mb="40px">
          <Text {...styles.subheading}>Create a new account</Text>
          <Heading {...globals.site__logo} cursor="default" textAlign="left">
            SNCLB
          </Heading>
        </Box>

        {/* Register form  */}
        <RegisterForm />
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
