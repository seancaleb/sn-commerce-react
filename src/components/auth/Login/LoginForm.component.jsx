import { FormControl, FormLabel, Input, Link, FormErrorMessage, Text } from "@chakra-ui/react";
import globals from "../../../theme/globalStyles";
import styles from "./Login.styles";
import Form from "../Form.component";
import { Link as ReachLink } from "react-router-dom";
import AlertError from "../../AlertError.component";
import { useEffect, useState } from "react";

// React hook forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import loginUser from "../../../firebase/auth/loginUser";

const LoginForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async ({ email, password }) => {
    try {
      const userDetails = { email, password };

      // Login user via auth
      await loginUser({ ...userDetails, setIsLoading });

      if (error) setError(null);

      setIsLoading(false);
      onClose();
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit((data) => handleLogin(data))}>
      {/* Email  */}
      <FormControl isInvalid={errors.email} isRequired>
        <FormLabel {...globals.input__label}>Email</FormLabel>
        <Input type="email" {...register("email")} {...globals.input} />

        {/* is error?  */}
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      {/* Password  */}
      <FormControl isInvalid={errors.password} isRequired>
        <FormLabel {...globals.input__label}>Password</FormLabel>
        <Input type="password" {...register("password")} {...globals.input} />

        {/* is error?  */}
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      {/* Forgot password?  */}
      {/* <Text {...styles.text}>Forgot password?</Text> */}

      {/* Error in logging in as a user?  */}
      {error && <AlertError message={error} />}

      {/* Submit  */}
      <Input
        type="submit"
        {...globals.btn__filled}
        value="Login"
        cursor="pointer"
        disabled={isLoading}
      />

      {/* Register  */}
      <Link as={ReachLink} {...styles.text} color="#999" to={"/register"}>
        Don't have an account? Register here!
      </Link>
    </Form>
  );
};

export default LoginForm;
