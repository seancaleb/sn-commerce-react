import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCart } from "../features/cartSlice";
import { useQueryInitializeCart } from "../hooks/useQueryInitializeCart";
import { useQueryRetrieveCart } from "../hooks/useQueryRetrieveCart";

const InitializeCart = () => {
  const user = useSelector((state) => state.user);

  return user.isAuthenticated ? <UserCart cartId={user.user?.cartId} /> : <NewCart />;
};

export default InitializeCart;

function NewCart() {
  const { data, isSuccess } = useQueryInitializeCart();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(initializeCart(data));
      // console.log("Guest cart initialized.");
    }
  }, [isSuccess]);
}

function UserCart({ cartId }) {
  const { data, isSuccess } = useQueryRetrieveCart(cartId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(initializeCart(data));
      // console.log("User cart initialized.");
    }
  }, [isSuccess]);
}
