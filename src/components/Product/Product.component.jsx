import ProductDataView from "./ProductDataView.component";

const Product = ({ data, isSuccess, isLoading, error, isError }) => {
  if ((isSuccess && data) || isLoading) return <ProductDataView {...{ data, isLoading }} />;
  else if (isError) throw error;
};

export default Product;
