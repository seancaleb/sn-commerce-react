import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <Flex {...styles.container}>
      <MotionText {...animations.text} {...styles.text}>
        SNCLB
      </MotionText>
    </Flex>
  );
};

const ease = [0.6, -0.05, 0.01, 0.99];
const MotionText = motion(Text);

export default PreLoader;

const animations = {
  text: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease, repeat: Infinity, repeatType: "mirror" },
  },
};

const styles = {
  container: {
    bg: "#fff",
    minH: "100vh",
    w: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#111",
  },
};
