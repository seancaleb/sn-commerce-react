import { useQuery } from "react-query";
import http from "../services/axios.config";

const retrieveCart = async (cartId) => await (await http.get(`/carts/${cartId}`)).data;

export const useQueryRetrieveCart = (cartId) => {
  return useQuery(`retrieve-cart-${cartId}`, () => retrieveCart(cartId), {
    refetchOnWindowFocus: false,
  });
};
