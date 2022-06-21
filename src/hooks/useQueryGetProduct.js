import { useQuery } from "react-query";
import http from "../services/axios.config";

// Hook used to get a single product
const fetchProductById = async (id) => await (await http.get(`products/${id}`)).data;

export const useQueryGetProduct = (id) => {
  return useQuery(`product-${id}`, () => fetchProductById(id), {
    refetchOnWindowFocus: false,
  });
};
