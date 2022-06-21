import { GridItem, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import globals from "../theme/globalStyles";

const MotionGridItem = motion(GridItem);
const ease = [0.6, -0.05, 0.01, 0.99];

const EmptyProducts = ({ title, message }) => {
  const navigate = useNavigate();

  return (
    <MotionGridItem
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease }}
      colSpan={12}
    >
      <Flex {...styles.container}>
        <Heading {...styles.title}>{title}</Heading>
        <Text {...styles.text}>{message}</Text>
        <Button
          {...globals.btn__filled}
          onClick={() => navigate("/shop?category=all_products&page=1")}
        >
          Continue shopping
        </Button>
      </Flex>
    </MotionGridItem>
  );
};

export default EmptyProducts;

const styles = {
  container: {
    h: "100%",
    py: "120px",
    justifyContent: "center",
    flexDir: "column",
    gap: "15px",
    alignItems: "center",
  },
  title: {
    fontSize: "16px",
    textTransform: "uppercase",
    color: "#111",
  },
  text: {
    mb: "10px",
    maxW: "565px",
    textAlign: "center",
    color: "#454545",
  },
};
