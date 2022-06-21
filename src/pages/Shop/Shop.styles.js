export default {
  buttons__container: {
    colSpan: {
      base: 12,
      lg: 9,
    },
    display: "flex",
    gap: "20px",
    mt: {
      base: "30px",
      lg: "40px",
    },
    justifyContent: {
      base: "center",
      lg: "flex-start",
    },
  },
  button__container: {
    gap: "10px",
    alignItems: "center",
  },
  button: {
    background: "transparent",
    fontSize: "13px",
    color: "#111",
    textTransform: "uppercase",
    fontWeight: "medium",
    p: "unset",
    _active: { background: "transparent" },
    _hover: { background: "transparent", textDecor: "underline" },
    _focus: { boxShadow: "unset" },
  },

  // Category
  category__title: {
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: "medium",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: ".2s ease-in-out",
    _hover: {
      color: "#454545",
      pl: { lg: "5px" },
    },
  },

  divider: {
    display: {
      base: "none",
      lg: "block",
    },
    maxW: "80%",
    borderColor: "gray.300",
  },

  // Aside
  aside__container: {
    as: "aside",
    colSpan: {
      base: 12,
      lg: 3,
    },
    display: "flex",
    flexDir: {
      base: "row",
      lg: "column",
    },
    gap: "15px",
    overflow: "auto",
  },
};
