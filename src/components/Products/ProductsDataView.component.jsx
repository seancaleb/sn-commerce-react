import { Grid, GridItem, Image, Flex, Text, Box } from "@chakra-ui/react";
import styles from "./ProductsDataView.styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadImage } from "../../utils/utils";
import Loader from "../Loader.component";

const ProductsDataView = ({ products }) => {
  const navigate = useNavigate();

  const [items, setItems] = useState(products);

  const handleClick = (link, id) => {
    navigate(`/shop/${link}`, { state: { id } });
  };

  useEffect(() => {
    const initialLoadImages = async () => {
      const promises = products.map(async (prod) => {
        const src = prod.image.url;

        const loadedImage = await loadImage(src).then(() => src);
        return { ...prod, loadedSrc: loadedImage };
      });

      const resolvedItems = await Promise.all(promises);
      setItems(resolvedItems);
    };

    initialLoadImages();
  }, [products]);

  return (
    <Grid {...styles.grid}>
      {items.map((prod) => {
        return (
          <GridItem key={prod.id} {...styles.grid__item}>
            <Loader isLoaded={prod.loadedSrc} minH={{ base: "250px", md: "350px", lg: "450px" }}>
              <Box
                pos="relative"
                cursor="pointer"
                onClick={() => handleClick(prod.permalink, prod.id)}
              >
                <Image src={prod.loadedSrc} {...styles.image} />
              </Box>
            </Loader>

            <Flex {...styles.details__container}>
              <Text {...styles.product__name}>{prod.name}</Text>
              <Text {...styles.product__price}>{prod.price.formatted_with_symbol}</Text>
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ProductsDataView;
