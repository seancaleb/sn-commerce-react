import ProductsDataView from "./ProductsDataView.component";
import ProductsFallback from "./ProductsFallback.component";

const Products = ({ products, isSuccess, isLoading, error, isError, limit }) => {
  if (isLoading) return <ProductsFallback limit={limit} />;
  else if (isSuccess && products) return <ProductsDataView products={products} />;
  else if (isError) throw error;
};

export default Products;
