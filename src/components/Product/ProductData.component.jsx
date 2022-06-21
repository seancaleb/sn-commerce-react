import { GridItem, Image, Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import { Loader, Counter, Size } from "..";
import { stripHTML } from "../../utils/utils";
import styles from "./ProductDataView.styles";
import FavoritesButton from "../FavoritesButton.component";
import globals from "../../theme/globalStyles";

const ProductData = ({ data, isLoading, productState, addToBagLoading, handleAddToBag }) => {
  return (
    <>
      <GridItem {...styles.image__container}>
        {/* Product image  */}
        <Loader isLoaded={!isLoading}>
          <Image src={data && data.image.url} {...styles.image} />
        </Loader>
      </GridItem>

      {/* Product details  */}
      <GridItem {...styles.details__container}>
        {/* Product title  */}
        <Flex {...styles.title__container}>
          <Loader isLoaded={!isLoading} minH={isLoading ? "18px" : "100%"} maxW="80%">
            <Heading {...styles.title}>{data && data.name}</Heading>
          </Loader>
          <Loader
            isLoaded={!isLoading}
            minH={{ base: isLoading ? "24px" : "100%", lg: isLoading ? "30px" : "100%" }}
            maxW="50%"
          >
            <Heading {...styles.price}>{data && data.price.formatted_with_symbol}</Heading>
          </Loader>
        </Flex>

        {/* Product description  */}
        <Flex {...styles.description__container}>
          <Loader isLoaded={!isLoading} minH={isLoading ? "12px" : "100%"} maxW="30%">
            <Text {...styles.description__title}>Description</Text>
          </Loader>
          <Loader isLoaded={!isLoading} minH={isLoading ? "100px" : "100%"} h="100%">
            <Text {...styles.description__text}>{data && stripHTML(data.description)}</Text>
          </Loader>
        </Flex>

        {/* Product counter  */}
        <Box {...styles.margin__top}>
          <Loader isLoaded={!isLoading} minH="35px" maxW="80%">
            <Counter numOfProducts={data && data.inventory.available} isLoading={addToBagLoading} />
          </Loader>
        </Box>

        {/* Product variant (size)  */}
        <Box {...styles.margin__top}>
          {data && <Size productId={data.id} addToBagLoading={addToBagLoading} />}
        </Box>

        {/* Buttons  */}
        <Flex {...styles.buttons__container} {...styles.margin__top}>
          <Button
            {...globals.btn__filled}
            onClick={() => handleAddToBag(data.id)}
            disabled={productState.size === null || productState.quantity === 0}
            isLoading={addToBagLoading}
            loadingText="Adding item"
            spinnerPlacement="end"
            pointerEvents={addToBagLoading && "none"}
          >
            Add to bag
          </Button>

          <FavoritesButton product={data} />
        </Flex>

        {/* Product SKU and categories  */}
        <Flex {...styles.margin__top} {...styles.sku__container}>
          <Loader isLoaded={!isLoading} minH={isLoading ? "12px" : "100%"} maxW="80%">
            <Text {...styles.sku__title}>Sku — {data && data.sku}</Text>
          </Loader>

          <Loader isLoaded={!isLoading} minH={isLoading ? "12px" : "100%"} maxW="100%">
            <Text {...styles.category__title}>
              Categories —{" "}
              {data &&
                data.categories.map((cat, index) => {
                  let categoryName = cat.name;

                  if (index !== data.categories.length - 1) {
                    categoryName = categoryName.concat(",");
                  }

                  return (
                    <Text as="span" key={cat.id} {...styles.category__title}>
                      {categoryName}{" "}
                    </Text>
                  );
                })}
            </Text>
          </Loader>
        </Flex>
      </GridItem>
    </>
  );
};

export default ProductData;
