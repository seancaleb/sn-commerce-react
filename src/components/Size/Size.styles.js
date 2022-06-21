export default {
  container: {
    flexDir: "column",
    gap: "10px",
  },
  title: {
    fontSize: "12px",
    color: "#999",
    textTransform: "uppercase",
  },
  variant__container: {
    gap: "10px",
  },
  variant__button: {
    as: "button",
    w: "40px",
    h: "40px",
    border: "1px",
    borderColor: "#111",
    borderRadius: "50%",
    transition: ".2s ease-in-out",
    hover: {
      bg: "#111",
      color: "#fff",
    },
  },
};
