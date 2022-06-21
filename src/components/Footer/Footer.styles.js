export default {
  // Container
  container: {
    as: "footer",
    maxW: "1440px",
    py: {
      base: "60px",
      md: "80px",
    },
    display: "flex",
    gap: "5px",
    flexDir: {
      base: "column",
      lg: "row",
    },
    alignItems: "center",
  },

  text: {
    color: "#999",
    fontSize: "12px",
    textTransform: "uppercase",
    flex: 3,
    textAlign: {
      base: "center",
      lg: "unset",
    },
  },
};
