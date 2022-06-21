import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearProduct } from "../../features/productSlice";
import { useQueryAddItem } from "../../hooks/useQueryAddItem";
import { initializeCart } from "../../features/cartSlice";
import ProductData from "./ProductData.component";

const Product = ({ data, isLoading }) => {
  const { mutate, data: addToBagData, error, isLoading: addToBagLoading } = useQueryAddItem();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.cart);
  const location = useLocation();

  const handleAddToBag = (prodId) => {
    if (cart) {
      const body = {
        id: prodId,
        quantity: productState.quantity,
        options: {
          [productState.size.variant_id]: productState.size.size_id,
        },
      };

      mutate({ body, cartId: cart.id });
    }
  };

  useEffect(() => {
    dispatch(clearProduct());
  }, [location]);

  useEffect(() => {
    if (addToBagData && addToBagData.success) {
      dispatch(initializeCart(addToBagData.cart));
      dispatch(clearProduct());
    }
  }, [addToBagData, addToBagLoading, error]);

  return <ProductData {...{ data, isLoading, productState, addToBagLoading, handleAddToBag }} />;
};

export default Product;
