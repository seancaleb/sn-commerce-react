export default {
  main: {
    w: "100%",
    minH: "100vh",
  },
  col__one: {
    minH: "100vh",
    flex: 1,
    bgImage: "/assets/register.png",
    bgPos: "center top",
    bgSize: "cover",
    bgRepeat: "no-repeat",
  },
  col__two: {
    flexDir: "column",
    p: {
      base: "8%",
      lg: "60px",
    },
    maxW: {
      base: "100%",
      lg: "512px",
      xl: "576px",
    },
    w: "100%",
    justifyContent: "center",
  },
  subheading: {
    fontSize: "12px",
    color: "#999",
    textTransform: "uppercase",
    mb: "5px",
  },
  title: {
    fontSize: "16px",
    color: "#111",
    fontWeight: "medium",
    mb: "20px",
    textAlign: "center",
  },
};
