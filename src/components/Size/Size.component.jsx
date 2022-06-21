import { Text, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import http from "../../services/axios.config";
import Loader from "../Loader.component";
import styles from "./Size.styles";
import { useDispatch, useSelector } from "react-redux";
import { updateProductSize } from "../../features/productSlice";

const fetchProductVariantGroups = async (productId) =>
  await (
    await http.get(`products/${productId}/variant_groups`)
  ).data;

const Size = ({ productId, addToBagLoading }) => {
  const { data, isSuccess, isLoading, error, isError, refetch } = useQuery(
    `size-variant-${productId}`,
    () => fetchProductVariantGroups(productId),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const [sizes, setSizes] = useState(null);
  const dispatch = useDispatch();
  const productSize = useSelector((state) => state.product.size);

  useEffect(() => {
    if (data) {
      const filteredVariant = data.data.filter((variant) => variant.name === "Size");
      const [sizeVariant] = filteredVariant;
      setSizes(sizeVariant);
    }
  }, [data]);

  useEffect(() => {
    if (productId) refetch();
  }, [productId]);

  return (
    <Flex {...styles.container}>
      {/* Title  */}
      <Loader isLoaded={!isLoading} minH={isLoading ? "12px" : "100%"} maxW="30%">
        <Text {...styles.title}>{sizes && sizes.name}</Text>
      </Loader>

      {/* Variant Group  */}
      <Loader isLoaded={!isLoading} minH={isLoading ? "40px" : "100%"} maxW="100%">
        <Flex {...styles.variant__container}>
          {sizes &&
            sizes.options.map((size) => {
              return (
                <Center
                  key={size.id}
                  pointerEvents={addToBagLoading && "none"}
                  {...styles.variant__button}
                  bg={productSize && productSize.size_id === size.id ? "#111" : "#fff"}
                  color={productSize && productSize.size_id === size.id ? "#fff" : "#111"}
                  onClick={() =>
                    dispatch(updateProductSize({ variant_id: sizes.id, size_id: size.id }))
                  }
                >
                  {size.name}
                </Center>
              );
            })}
        </Flex>
      </Loader>
    </Flex>
  );
};

export default Size;
