import { Navigate, useLocation, useParams } from "react-router-dom";
import { ErrorFallback, Main, Section, Product, Products, BreadCrumb } from "../../components";
import { ErrorBoundary } from "react-error-boundary";
import { GridItem, Heading } from "@chakra-ui/react";
import globals from "../../theme/globalStyles";
import { useQueryGetProduct } from "../../hooks/useQueryGetProduct";

const ProductPage = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <Main>
      <BreadCrumb params={params} pathname={location.pathname} />

      {/* Single Product  */}
      {location.state ? <SingleProduct id={location.state.id} /> : <Navigate to="/" replace />}
    </Main>
  );
};

export default ProductPage;

// Get single product
function SingleProduct({ id }) {
  const { data, isSuccess, isLoading, error, isError } = useQueryGetProduct(id);
  let products;

  if (data) products = data.related_products.slice(0, 4);

  return (
    <>
      <Section>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {/* Single Product  */}
          <Product {...{ data, isSuccess, isLoading, error, isError }} />
        </ErrorBoundary>
      </Section>

      <Section>
        <GridItem colSpan={12}>
          <Heading {...globals.section__title}>Related Products</Heading>
        </GridItem>
        <GridItem colSpan={12}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {/* Related Products  */}
            <Products {...{ products, isSuccess, isLoading, error, isError }} />
          </ErrorBoundary>
        </GridItem>
      </Section>
    </>
  );
}
