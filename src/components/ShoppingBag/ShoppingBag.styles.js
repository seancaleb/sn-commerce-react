export default {
  // Drawer
  drawer__container: {
    size: "sm",
    placement: "right",
    blockScrollOnMount: false,
  },
  drawer__overlay: {
    bg: "blackAlpha.700",
  },

  //   Drawer header
  drawer__close_btn: {
    _focus: {
      boxShadow: "unset",
    },
  },
  drawer__header: {
    fontSize: "14px",
    color: "#999",
    textTransform: "uppercase",
    fontWeight: "normal",
  },

  //   Drawer body
  drawer__body: {
    py: "16px",
    display: "flex",
    gap: " 40px",
    flexDir: "column",
  },

  //   Product
  prod__container: { gap: "30px" },

  //   Product image
  prod__img_container: { flex: 3 },

  // Product details
  prod__details_container: {
    flex: 4,
    flexDir: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
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

  //   Drawer footer
  drawer__footer: {
    py: "24px",
    display: "flex",
    flexDir: "column",
    gap: "30px",
  },

  //   Product price total
  total__price_container: {
    gap: "20px",
    justifyContent: "space-between",
    w: "100%",
    alignItems: "center",
  },

  total__price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#111",
  },

  //   Buttons container
  buttons__container: {
    flexDir: "column",
    gap: "15px",
    w: "100%",
  },
};
