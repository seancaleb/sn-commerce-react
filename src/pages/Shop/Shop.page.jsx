import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";
import { Button, Flex, GridItem, Text, Divider, useMediaQuery } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { Main, BreadCrumb, Section, Products, ErrorFallback, Loader } from "../../components";
import styles from "./Shop.styles";
import { useQueryCategories } from "../../hooks/useQueryCategories";
import { nanoid } from "@reduxjs/toolkit";
import { useQueryGetProducts } from "../../hooks/useQueryGetProducts";

const ShopPage = () => {
  const { pathname } = useLocation();
  const { categories, isLoading, error } = useQueryCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Main>
      <BreadCrumb pathname={pathname} />

      <Section>
        {/* All Categories  */}
        <GridItem {...styles.aside__container}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AllCategories
              {...{ categories, isLoading, selectedCategory, setSelectedCategory, error }}
            />
          </ErrorBoundary>
        </GridItem>

        {/* All Products  */}
        <AllProducts category={selectedCategory ?? "all_products"} />
      </Section>
    </Main>
  );
};

export default ShopPage;

function AllProducts({ category }) {
  const limit = 6;
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isSuccess, isLoading, error, isError, refetch } = useQueryGetProducts(
    pageNumber,
    category,
    limit
  );
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let products;

  if (data) products = data.data;

  useEffect(() => {
    setSearchParams({ category, page: 1 });
  }, [category]);

  useEffect(() => {
    setPageNumber(Number(searchParams.get("page")));
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [pageNumber]);

  return (
    <>
      <GridItem colSpan={{ base: 12, lg: 9 }} colStart={{ lg: 4 }}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Products {...{ products, isSuccess, isLoading, error, isError }} limit={limit} />
        </ErrorBoundary>
      </GridItem>

      {/* Extra Grid block for pagination alignment  */}
      <GridItem colSpan={3} display={{ base: "none", lg: "block" }} />

      {/* Pagination  */}
      <GridItem {...styles.buttons__container}>
        <Flex {...styles.button__container}>
          <SwapLeftOutlined />
          <Button
            {...styles.button}
            pointerEvents={pageNumber === 1 && "none"}
            color={pageNumber === 1 && "#999"}
            onClick={() => {
              navigate(`${pathname}?category=${category}&page=${pageNumber - 1}`);
              setPageNumber((prev) => prev - 1);
            }}
          >
            Prev
          </Button>
        </Flex>
        <Flex {...styles.button__container}>
          <Button
            {...styles.button}
            pointerEvents={data && pageNumber === data.meta.pagination.total_pages && "none"}
            color={data && pageNumber === data.meta.pagination.total_pages && "#999"}
            onClick={() => {
              navigate(`${pathname}?category=${category}&page=${pageNumber + 1}`);
              setPageNumber((prev) => prev + 1);
            }}
          >
            Next
          </Button>
          <SwapRightOutlined />
        </Flex>
      </GridItem>
    </>
  );
}

// Categories
function AllCategories({ selectedCategory, setSelectedCategory, isLoading, categories, error }) {
  const [isGreaterThanEqual992] = useMediaQuery("(min-width: 992px)");

  if (error) throw error;

  return (
    <>
      <Text
        {...styles.category__title}
        color={selectedCategory === null ? "#454545" : "#ccc"}
        pl={selectedCategory === null && isGreaterThanEqual992 ? "5px" : "unset"}
        onClick={() => setSelectedCategory(null)}
      >
        All products
      </Text>
      <Divider {...styles.divider} />

      {categories &&
        categories.map((category) => {
          return (
            <Fragment key={nanoid()}>
              <Loader isLoaded={!isLoading} minH="18px" maxW={isLoading ? "150px" : "100%"}>
                <Text
                  {...styles.category__title}
                  color={selectedCategory === category ? "#454545" : "#ccc"}
                  pl={selectedCategory === category && isGreaterThanEqual992 ? "5px" : "unset"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Text>
              </Loader>
              <Divider {...styles.divider} />
            </Fragment>
          );
        })}
    </>
  );
}
