export default {
  // Products Summary
  prod__summary_container: {
    colSpan: {
      base: 12,
      lg: 8,
    },
    display: "flex",
    flexDir: "column",
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
  //   Product
  prod__container: {
    gap: "30px",
    flexDir: { base: "column", sm: "row" },
  },

  //   Product image
  prod__img_container: { flex: 1 },
  prod__img: {
    objectFit: "cover",
    h: "100%",
    w: "100%",
    objectPosition: "center",
  },
  // Product details
  prod__details_container: {
    flex: {
      sm: 5,
    },
    pos: "relative",
    flexDir: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
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

  // Product variants
  gray__text: {
    fontSize: "12px",
    color: "#999",
    textTransform: "uppercase",
  },

  // Product updater
  prod__updater_container: {
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
    w: "100%",
  },

  // Close button
  close__btn: {
    cursor: "pointer",
    color: "#999",
    position: "absolute",
    top: 0,
    right: 0,
  },

  // Products total
  prod__total_container: {
    colSpan: { base: 12, lg: 4 },
    p: "24px",
    bg: "#fafafa",
    alignSelf: "flex-start",
  },
  black__text: {
    color: "#111",
    fontSize: "20px",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  flex__wrapper: {
    gap: "20px",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
