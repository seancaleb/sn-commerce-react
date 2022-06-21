export default {
  grid: {
    templateColumns: {
      base: "repeat(12, 1fr)",
      sm: "repeat(12, 1fr)",
      lg: "repeat(auto-fit, minmax(75px, 1fr))",
    },
    rowGap: {
      base: "40px",
    },
    columnGap: {
      base: "10px",
    },
  },
  grid__item: {
    colSpan: {
      base: 6,
      sm: 4,
    },
  },
  image: {
    w: "100%",
    h: "100%",
    minH: { base: "250px", md: "350px", lg: "400px" },
    objectFit: "cover",
    objectPosition: "center",
    loading: "lazy",
  },
  details__container: {
    flexDir: "column",
    mt: "10px",
  },
  product__name: {
    fontSize: {
      base: "12px",
      md: "14px",
    },
    textTransform: "uppercase",
    color: "#999",
  },
  product__price: {
    fontSize: {
      base: "14px",
      md: "16px",
    },
    fontWeight: "medium",
    color: "#111",
  },
};
