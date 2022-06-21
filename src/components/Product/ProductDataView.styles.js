export default {
  //   Product image
  image__container: {
    colSpan: {
      base: 12,
      md: 6,
    },
  },
  image: {
    minH: {
      base: "450px",
      sm: "650px",
      md: "600px",
      lg: "700px",
      xl: "920px",
    },
    w: "100%",
    h: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },

  //   Product details
  details__container: {
    colSpan: {
      base: 12,
      md: 6,
      lg: 5,
    },
    colStart: {
      md: 8,
      lg: 8,
    },
  },

  //   Product title
  title__container: {
    flexDir: "column",
    mt: {
      base: "30px",
      lg: "40px",
    },
    gap: {
      base: "5px",
      lg: "20px",
    },
  },
  title: {
    as: "h2",
    fontSize: "18px",
    fontWeight: "medium",
    textTransform: "uppercase",
    color: "#111",
  },
  price: {
    fontSize: {
      base: "24px",
      lg: "30px",
    },
    color: "#111",
  },

  //   Product description
  description__container: {
    flexDir: "column",
    mt: "20px",
    gap: {
      base: "5px",
      lg: "10px",
    },
  },
  description__title: {
    fontSize: "12px",
    color: "#999",
    textTransform: "uppercase",
  },
  description__text: {
    color: "#454545",
  },

  //   Buttons
  buttons__container: {
    flexDir: "column",
    gap: {
      base: "10px",
      lg: "15px",
    },
  },

  // Product SKU and categories
  sku__container: {
    flexDir: "column",
    gap: {
      base: "5px",
      lg: "10px",
    },
  },
  sku__title: {
    fontSize: "12px",
    color: "#111",
    textTransform: "uppercase",
  },

  category__title: {
    fontSize: "12px",
    color: "#111",
    textTransform: "uppercase",
  },

  //   Spacer (margin top)
  margin__top: {
    mt: { base: "20px", lg: "30px" },
  },
};
