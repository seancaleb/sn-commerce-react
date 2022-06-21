import http from "../services/axios.config";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";

const addItem = async ({ body, cartId }) => {
  return await (
    await http.post(`/carts/${cartId}`, body)
  ).data;
};

export const useQueryAddItem = () => {
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.user);

  return useMutation(addItem, {
    onSuccess: () => {
      if (user.isAuthenticated) queryClient.invalidateQueries(`retrieve-cart-${user.user.cartId}`);
    },
  });
};
