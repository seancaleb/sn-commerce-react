import { Heading, GridItem, Flex } from "@chakra-ui/react";
import { ErrorFallback, Main, Products, Section } from "../../components";
import styles from "./Home.styles";
import { useQuery } from "react-query";
import http from "../../services/axios.config";
import { ErrorBoundary } from "react-error-boundary";
import globals from "../../theme/globalStyles";

const HomePage = () => {
  const topsCatId = "cat_aZWNoy242580JA";
  const bottomsCatId = "cat_BkyN5Ydm7o0b69";

  return (
    <>
      <Section {...styles.hero__section}>
        <GridItem {...styles.hero__container}>
          <Flex flexDir="column" alignItems="center" gap="10px">
            {/* <Heading {...styles.hero__title}>Summer collections</Heading> */}
          </Flex>
        </GridItem>
      </Section>

      <Main>
        {/* Latest Collection  */}
        <ProductsByCategory title="Latest collection" queryTitle="latest-collection" />

        {/* Tops Category  */}
        <ProductsByCategory title="Tops" queryTitle="category-tops" categoryId={topsCatId} />

        {/* Bottoms Category  */}
        <ProductsByCategory
          title="Bottoms"
          queryTitle="category-bottoms"
          categoryId={bottomsCatId}
        />
      </Main>
    </>
  );
};

export default HomePage;

// Function to fetch products by category
const fetchProductsByCategory = async (categoryId) => {
  if (categoryId) {
    return await (
      await http.get(`products?limit=4&sortBy=updated_at&category_id=${categoryId}`)
    ).data;
  } else {
    return await (
      await http.get("products?limit=4&sortBy=created_at&sortDirection=desc")
    ).data;
  }
};

// Component to query categories
const ProductsByCategory = ({ title, queryTitle, categoryId }) => {
  const { data, isSuccess, isLoading, error, isError } = useQuery(
    queryTitle,
    () => fetchProductsByCategory(categoryId),
    {
      refetchOnWindowFocus: false,
    }
  );
  let products;

  if (data) products = data.data;

  return (
    <Section>
      <GridItem colSpan={12}>
        <Heading {...globals.section__title}>{title}</Heading>
      </GridItem>
      <GridItem colSpan={12}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Products {...{ products, isSuccess, isLoading, error, isError }} />
        </ErrorBoundary>
      </GridItem>
    </Section>
  );
};
