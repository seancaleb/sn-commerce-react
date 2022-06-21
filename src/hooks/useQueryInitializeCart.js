import { useQuery } from "react-query";
import http from "../services/axios.config";

const initializeCart = async () => await (await http.get("/carts")).data;

export const useQueryInitializeCart = () => {
  return useQuery("cart-initialize", initializeCart, {
    refetchOnWindowFocus: false,
  });
};
