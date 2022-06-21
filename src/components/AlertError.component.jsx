import { Alert, AlertDescription, AlertIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AlertError = ({ message }) => {
  return (
    <MotionAlert
      status="error"
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 15, opacity: 0 }}
      transition={{ duration: 0.2, ease }}
    >
      <AlertIcon boxSize="18px" />
      <AlertDescription fontSize="15px" lineHeight="1.4em" color="#111">
        {message}
      </AlertDescription>
    </MotionAlert>
  );
};

export default AlertError;

const MotionAlert = motion(Alert);
const ease = [0.6, -0.05, 0.01, 0.99];
