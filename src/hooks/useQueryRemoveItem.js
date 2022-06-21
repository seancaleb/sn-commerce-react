import http from "../services/axios.config";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";

const removeItem = async ({ cartId, productId }) => {
  return await (
    await http.delete(`/carts/${cartId}/items/${productId}`)
  ).data;
};

export const useQueryRemoveItem = () => {
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.user);

  return useMutation(removeItem, {
    onSuccess: () => {
      if (user.isAuthenticated) queryClient.invalidateQueries(`retrieve-cart-${user.user.cartId}`);
    },
  });
};
