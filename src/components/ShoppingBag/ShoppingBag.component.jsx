import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  Button,
  DrawerBody,
  Flex,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import styles from "./ShoppingBag.styles";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQueryRemoveItem } from "../../hooks/useQueryRemoveItem";
import { initializeCart } from "../../features/cartSlice";
import globals from "../../theme/globalStyles";

const ShoppingBag = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const { data, error, isLoading, mutate } = useQueryRemoveItem();
  const dispatch = useDispatch();

  const handleRemoveFromBag = (productId) => {
    if (cart) {
      mutate({ cartId: cart.id, productId });
    }
  };

  useEffect(() => {
    if (data && data.success) {
      dispatch(initializeCart(data.cart));
    }
  }, [data, error, isLoading]);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} {...styles.drawer__container}>
      <DrawerOverlay {...styles.drawer__overlay} />
      <DrawerContent>
        <DrawerCloseButton {...styles.drawer__close_btn} />
        <DrawerHeader {...styles.drawer__header}>
          Products ({(cart && cart.total_items) || 0})
        </DrawerHeader>

        {/* Products go here  */}
        <DrawerBody {...styles.drawer__body}>
          {/* Bag is empty? */}
          {cart && cart.total_items === 0 && (
            <Flex h="100%" alignItems="center" justifyContent="center">
              <Text {...styles.gray__text}>Your bag is currently empty.</Text>
            </Flex>
          )}

          {/* Bag contains items?  */}
          {cart &&
            cart.total_items > 0 &&
            cart.line_items.map((prod) => {
              return (
                <Fragment key={prod.id}>
                  <Flex {...styles.prod__container}>
                    <Box {...styles.prod__img_container}>
                      <Image src={prod.image.url} />
                    </Box>

                    {/* Product details  */}
                    <Flex {...styles.prod__details_container}>
                      <Flex flexDir="column" gap="20px">
                        <Flex flexDir="column" gap="5px">
                          <Text {...styles.prod__name}>{prod.name}</Text>
                          <Text {...styles.prod__price}>{prod.price.formatted_with_symbol}</Text>
                        </Flex>

                        <Flex flexDir="column" gap="5px">
                          <Text {...styles.gray__text}>Quantity: {prod.quantity}</Text>
                          <Text {...styles.gray__text}>
                            Size: {prod.selected_options[0].option_name}
                          </Text>
                        </Flex>
                      </Flex>

                      <Text
                        role="button"
                        {...styles.gray__text}
                        onClick={() => handleRemoveFromBag(prod.id)}
                      >
                        Remove from bag
                      </Text>
                    </Flex>
                  </Flex>
                  <hr />
                </Fragment>
              );
            })}
        </DrawerBody>

        <DrawerFooter {...styles.drawer__footer}>
          {cart?.total_items > 0 && (
            <Flex {...styles.total__price_container}>
              <Text {...styles.gray__text} fontSize="14px">
                Subtotal
              </Text>
              <Text {...styles.total__price}>
                {cart && cart.subtotal && cart.subtotal.formatted_with_symbol}
              </Text>
            </Flex>
          )}
          <Flex {...styles.buttons__container}>
            <Button
              {...globals.btn__filled}
              onClick={() => {
                onClose();
              }}
            >
              Continue shopping
            </Button>
            <Button
              {...globals.btn__outlined}
              onClick={() => {
                navigate("/cart");
                onClose();
              }}
              disabled={cart && cart.total_items === 0}
            >
              Go to cart {cart && cart.total_items ? `(${cart.total_items})` : null}
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingBag;
