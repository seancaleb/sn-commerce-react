import { Skeleton } from "@chakra-ui/react";

const Loader = ({ children, ...props }) => {
  return (
    <Skeleton {...props} startColor="gray.100" endColor="gray.200" fadeDuration={0.2}>
      {children}
    </Skeleton>
  );
};

export default Loader;
