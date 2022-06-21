export default {
  favorites__container: {
    flexDir: "column",
    maxW: "1160px",
    m: "auto",
    gap: "40px",
    maxH: {
      base: "auto",
      lg: "600px",
    },
    overflow: {
      base: "auto",
      lg: "scroll",
    },
    bg: {
      base: "transparent",
      lg: "#fafafa",
    },
    p: {
      base: "0px",
      lg: "24px",
    },
  },

  prod__container: {
    gap: {
      base: "15px",
      sm: "20px",
      md: "40px",
    },
  },

  prod__details: {
    flexDir: { base: "column", md: "row" },
    alignItems: {
      base: "flex-start",
      md: "center",
    },
    justifyContent: "space-between",
    flex: {
      base: 2,
      sm: 4,
      lg: 6,
    },
  },

  // Product image
  prod__img: {
    objectFit: "cover",
    h: "100%",
    w: "100%",
    objectPosition: "center",
  },

  //   Product name
  prod__name: {
    color: "#454545",
    fontSize: "12px",
    fontWeight: "medium",
    textTransform: "uppercase",
  },

  //   Product price
  prod__price: {
    color: "#111",
    fontWeight: "medium",
    fontSize: "16px",
  },

  buttons__container: {
    gap: { base: "10px", md: "15px" },
    alignSelf: { base: "flex-start", sm: "flex-end", md: "center" },
  },

  // Favorites notice
  notice__container: {
    flexDir: {
      base: "column",
      sm: "row",
    },
    alignItems: {
      base: "stretch",
      sm: "center",
    },
    px: {
      base: "16px",
      sm: "24px",
    },
    py: "16px",
    bg: "#fafafa",
    gap: {
      base: "15px",
      sm: "30px",
    },
    justifyContent: "space-between",
    maxW: "1160px",
    m: "auto",
    mb: "20px",
  },

  notice__text: {
    textTransform: "uppercase",
    fontSize: "11px",
    color: "#454545",
    fontWeight: "medium",
  },
};
