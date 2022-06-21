import { Grid, GridItem, Flex } from "@chakra-ui/react";
import Loader from "../Loader.component";
import styles from "./ProductsDataView.styles";

const ProductsFallback = ({ limit = 4 }) => {
  const data = new Array(limit).fill("");

  return (
    <Grid {...styles.grid}>
      {data.map((_item, index) => {
        return (
          <GridItem key={index} {...styles.grid__item}>
            <Loader minH={{ base: "250px", md: "350px", lg: "450px" }} />

            <Flex {...styles.details__container}>
              <Loader minH="1em" w="75%" mb="5px" />
              <Loader minH="1em" w="25%" />
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ProductsFallback;
