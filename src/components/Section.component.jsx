import { Grid } from "@chakra-ui/react";

const Section = ({ children, ...props }) => {
  return (
    <Grid {...styles.grid} {...props}>
      {children}
    </Grid>
  );
};

export default Section;

const styles = {
  grid: {
    as: "section",
    templateColumns: "repeat(12,1fr)",
    gap: {
      base: "20px",
      lg: "30px",
    },
    mb: {
      base: "60px",
      md: "80px",
    },
  },
};
