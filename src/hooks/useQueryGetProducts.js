import { useQuery } from "react-query";
import http from "../services/axios.config";

// Hook used to fetch all products in Commerce JS
const fetchProducts = async (pageNumber, limit, args = {}) => {
  if (args.category_slug !== "all_products" && args.category_slug !== null) {
    return await (
      await http.get(
        `products?sortBy=created_at&sortDirection=desc&page=${pageNumber}&limit=${limit}&category_slug=${args.category_slug}`
      )
    ).data;
  } else {
    return await (
      await http.get(
        `products?sortBy=created_at&sortDirection=desc&page=${pageNumber}&limit=${limit}`
      )
    ).data;
  }
};

export const useQueryGetProducts = (pageNumber, category, limit) => {
  return useQuery(
    ["all-products", pageNumber, category],
    () => fetchProducts(pageNumber, limit, { category_slug: category }),
    {
      refetchOnWindowFocus: false,
    }
  );
};
