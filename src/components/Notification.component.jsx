import { Center, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const MotionCenter = motion(Center);

const Notification = ({ totalItems }) => {
  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <MotionCenter {...styles.center} {...animation.center}>
          <Text {...styles.text}>{totalItems}</Text>
        </MotionCenter>
      )}
    </AnimatePresence>
  );
};

export default Notification;

const ease = [0.6, -0.05, 0.01, 0.99];

const styles = {
  center: {
    pos: "absolute",
    left: "-10px",
    top: "-10px",
    w: "1em",
    h: "1em",
    borderRadius: "50%",
    bg: "#111",
    boxShadow: "sm",
  },
  text: {
    color: "#fff",
    fontSize: "11px",
  },
};

const animation = {
  center: {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    transition: { duration: 0.2, ease },
  },
};
