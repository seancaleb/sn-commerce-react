import { Divider, Flex, Text } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../firebase/firebase.config";
import { logoutUser } from "../../../features/userSlice";
import globals from "../../../theme/globalStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { initializeFavorites } from "../../../features/favoritesSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

const Logout = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const containerRef = useRef(null);
  useOutsideAlerter({ ref: containerRef, onClose });

  const handleLogout = async () => {
    dispatch(logoutUser());
    dispatch(initializeFavorites([]));
    await signOut(auth);
    await onClose();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    onClose();
  }, [location]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <MotionFlex ref={containerRef} {...animations.container} {...styles.container}>
            <Text {...globals.link__text}>Hi, {user.user.firstName}</Text>
            <Divider />
            <Text as="button" {...globals.link__text} onClick={handleLogout}>
              Logout
            </Text>
          </MotionFlex>
        )}
      </AnimatePresence>
    </>
  );
};

const MotionFlex = motion(Flex);
const ease = [0.6, -0.05, 0.01, 0.99];

export default Logout;

const animations = {
  container: {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    transition: { duration: 0.2, ease },
  },
};

const styles = {
  container: {
    pos: "absolute",
    py: "16px",
    px: "24px",
    bg: "#fff",
    boxShadow: "md",
    top: "80px",
    flexDir: "column",
    gap: "10px",
    alignItems: "flex-start",
    zIndex: 999,
  },
};
