import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCart } from "../../features/cartSlice";
import { useQueryRemoveItem } from "../../hooks/useQueryRemoveItem";
import styles from "./AlertMessage.styles";
import globals from "../../theme/globalStyles";

const AlertMessage = ({ isOpen, onClose, title, message, prodId, setProdId }) => {
  const { data, error, isLoading, mutate } = useQueryRemoveItem();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    if (data && data.success) {
      dispatch(initializeCart(data.cart));
      onClose();
      setProdId(null);
    }
  }, [data, error, isLoading]);

  const handleRemoveItem = () => {
    if (cart && prodId) {
      mutate({ cartId: cart.id, productId: prodId });
    }
  };

  return (
    <AlertDialog
      blockScrollOnMount={false}
      onClose={onClose}
      isOpen={isOpen}
      {...styles.dialog}
      closeOnOverlayClick={!isLoading}
      closeOnEsc={!isLoading}
    >
      <AlertDialogOverlay {...styles.dialog__overlay} />

      <AlertDialogContent {...styles.dialog__content}>
        <AlertDialogHeader {...styles.dialog__header}>{title}</AlertDialogHeader>
        <AlertDialogCloseButton {...styles.dialog__close_btn} disabled={isLoading} />

        <AlertDialogBody {...styles.dialog__message}>{message}</AlertDialogBody>

        <AlertDialogFooter>
          <Button onClick={onClose} {...globals.btn__neutral} disabled={isLoading}>
            No
          </Button>
          <Button
            loadingText="Removing"
            isLoading={isLoading}
            spinnerPlacement="end"
            disabled={isLoading}
            ml={3}
            {...globals.btn__filled}
            onClick={handleRemoveItem}
          >
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertMessage;
