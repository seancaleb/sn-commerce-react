import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import styles from "./Login.styles";
import LoginForm from "./LoginForm.component";

const Login = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...styles.modal}>
      <ModalOverlay {...styles.modal__overlay} />
      <ModalContent {...styles.modal__content}>
        <ModalCloseButton {...styles.modal__close_btn} />

        <ModalBody pb={6} {...styles.modal__body}>
          <Text {...styles.title}>Login</Text>

          {/* Form  */}
          <LoginForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Login;
