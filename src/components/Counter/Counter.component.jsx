import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Center, Flex, Text } from "@chakra-ui/react";
import styles from "./Counter.styles";
import { decreaseProductQuantity, increaseProductQuantity } from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = ({ numOfProducts, isLoading }) => {
  const dispatch = useDispatch();
  const productQty = useSelector((state) => state.product.quantity);

  return (
    <Flex {...styles.container}>
      {/* Counter  */}
      <Flex>
        {/* Decrease button  */}
        <Center
          {...styles.center__clickable}
          onClick={() => dispatch(decreaseProductQuantity())}
          pointerEvents={productQty === 0 ? "none" : isLoading ? "none" : "auto"}
        >
          <MinusOutlined />
        </Center>

        {/* Product quantity  */}
        <Center {...styles.center}>
          <Text>{productQty}</Text>
        </Center>

        {/* Increase button  */}
        <Center
          {...styles.center__clickable}
          onClick={() => dispatch(increaseProductQuantity())}
          pointerEvents={productQty === numOfProducts ? "none" : isLoading ? "none" : "auto"}
        >
          <PlusOutlined />
        </Center>
      </Flex>

      {/* Items remaining  */}
      <Text {...styles.text}>{numOfProducts} in stock</Text>
    </Flex>
  );
};

export default Counter;
