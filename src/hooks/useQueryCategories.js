import { useQuery } from "react-query";
import http from "../services/axios.config";

// Hook used to fetch product categories in Commerce JS
const fetchCategories = async () => await (await http.get("/categories")).data;

export const useQueryCategories = () => {
  const { data, isSuccess, isLoading, error, isError } = useQuery("categories", fetchCategories, {
    refetchOnWindowFocus: false,
  });
  let categories = [];
  let categoriesPlaceholder = new Array(5).fill("");

  if (isSuccess && data) {
    data.data.map((category) => {
      categories.push(category.slug);

      if (category.children.length > 0) {
        category.children.map((catChild) => {
          categories.push(catChild.slug);
        });
      }
    });
  }

  return { categories: isLoading ? categoriesPlaceholder : categories, isLoading, error };
};
