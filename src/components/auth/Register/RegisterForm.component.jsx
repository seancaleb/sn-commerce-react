import { FormControl, FormLabel, Input, FormErrorMessage, Text, Flex } from "@chakra-ui/react";
import globals from "../../../theme/globalStyles";
import styles from "./Register.styles";
import Form from "../Form.component";
import { AlertError } from "../../";
import { useState } from "react";

// React hook forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schema";

// Register user callback
import registerUser from "../../../firebase/auth/registerUser";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  // Handle register of user in firebase/authentication
  const handleRegister = async ({ firstName, lastName, email, password }) => {
    try {
      const userDetails = { firstName, lastName, email, password, cartId: cart.cart?.id };
      // Register user via auth
      await registerUser({ ...userDetails, setIsLoading });

      if (error) {
        setError(null);
      }

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit((data) => handleRegister(data))}>
      <Flex {...styles.two__col__input}>
        {/* First name  */}
        <FormControl isInvalid={errors.firstName} isRequired>
          <FormLabel {...globals.input__label}>First name</FormLabel>
          <Input type="text" {...register("firstName")} {...globals.input} />

          {/* is error?  */}
          <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
        </FormControl>

        {/* Last name  */}
        <FormControl isInvalid={errors.lastName} isRequired>
          <FormLabel {...globals.input__label}>Last name</FormLabel>
          <Input type="text" {...register("lastName")} {...globals.input} />

          {/* is error? */}
          <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      {/* Email  */}
      <FormControl isInvalid={errors.email} isRequired>
        <FormLabel {...globals.input__label}>Email</FormLabel>
        <Input type="email" {...register("email")} {...globals.input} />

        {/* is error  */}
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      {/* Password  */}
      <FormControl isInvalid={errors.password} isRequired>
        <FormLabel {...globals.input__label}>Password</FormLabel>
        <Input type="password" {...register("password")} {...globals.input} />

        {/* is error  */}
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      {/* Error in registering as a user?  */}
      {error && <AlertError message={error} />}

      {/* Submit  */}
      <Input
        type="submit"
        {...globals.btn__filled}
        value={isLoading ? "Registering..." : "Register"}
        cursor="pointer"
        disabled={isLoading}
      />

      <hr />

      <Text {...styles.subheading} textAlign="center">
        &copy; Copyright — 2022 SNCLB
      </Text>
    </Form>
  );
};

export default RegisterForm;
