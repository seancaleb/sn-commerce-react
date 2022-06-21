export default {
  // Container
  container: {
    as: "header",
    maxW: "95%",
    h: "80px",
    display: "flex",
    alignItems: "center",
    pos: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },

  //   Secondary Menu
  menu: {
    display: "flex",
    flex: 3,
    gap: {
      base: "15px",
      sm: "20px",
      lg: "30px",
    },
    justifyContent: "flex-end",
  },
  menu__item: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    cursor: "pointer",
  },
};
