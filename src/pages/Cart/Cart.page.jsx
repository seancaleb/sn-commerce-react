import { GridItem, Text, Flex, Box, Button, Image, useDisclosure, Tooltip } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { AlertMessage, BreadCrumb, EmptyProducts, Main, Section } from "../../components";
import styles from "./Cart.styles";
import React, { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import globals from "../../theme/globalStyles";

const CartPage = () => {
  const { pathname } = useLocation();

  return (
    <Main>
      <BreadCrumb pathname={pathname} />

      <Section>
        <Cart />
      </Section>
    </Main>
  );
};

export default CartPage;

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state) => state.cart.cart);
  const [prodId, setProdId] = useState(null);

  const handleClick = (id) => {
    setProdId(id);
    onOpen();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cart]);

  return (
    <>
      {cart && cart.total_items === 0 && (
        <EmptyProducts
          title="Your cart is empty"
          message="Add items to your bag by clicking on the specified size and quantity of an item in the
          product details page."
        />
      )}

      {/* Product summary  */}
      {cart && cart.total_items > 0 && (
        <>
          <GridItem {...styles.prod__summary_container}>
            {cart.line_items.map((prod) => {
              return (
                <React.Fragment key={prod.id}>
                  <Flex {...styles.prod__container}>
                    <Box {...styles.prod__img_container} flex={{ sm: 2, md: 1 }}>
                      <Image src={prod.image.url} {...styles.prod__img} />
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

                      <Flex {...styles.prod__updater_container}>
                        <Text {...styles.gray__text}>Total</Text>
                        <Text {...styles.prod__price}>{prod.line_total.formatted_with_symbol}</Text>
                      </Flex>

                      <CloseOutlined
                        onClick={() => handleClick(prod.id)}
                        style={{ ...styles.close__btn }}
                      />
                    </Flex>
                  </Flex>

                  <hr />
                </React.Fragment>
              );
            })}
            <AlertMessage
              isOpen={isOpen}
              onClose={onClose}
              title="Remove item?"
              message="Are you sure you want to remove this item?"
              prodId={prodId}
              setProdId={setProdId}
            />
          </GridItem>

          {/* Product total  */}
          <GridItem {...styles.prod__total_container}>
            <Flex flexDir="column" gap="5px" mb="40px">
              <Flex {...styles.flex__wrapper}>
                <Text {...styles.gray__text} fontSize="12px">
                  Order total
                </Text>
                <Text {...styles.gray__text} fontSize="15px">
                  {cart && cart.subtotal && cart.subtotal.formatted_with_symbol}
                </Text>
              </Flex>
              <Flex {...styles.flex__wrapper}>
                <Text {...styles.gray__text} fontSize="12px">
                  Delivery
                </Text>
                <Text {...styles.gray__text} fontSize="15px">
                  Free
                </Text>
              </Flex>
            </Flex>

            <hr style={{ marginBottom: "30px" }} />

            <Flex {...styles.flex__wrapper} mb="30px">
              <Text {...styles.black__text} fontSize="14px">
                Total
              </Text>
              <Text {...styles.black__text}>
                {cart && cart.subtotal && cart.subtotal.formatted_with_symbol}
              </Text>
            </Flex>

            <Button {...globals.btn__filled} w="100%" disabled={true}>
              Continue to checkout
            </Button>
          </GridItem>
        </>
      )}
    </>
  );
}
