import { Skeleton } from "@chakra-ui/react";

const Loader = ({ children, ...props }) => {
  return (
    <Skeleton {...props} startColor="#d1d5db" endColor="#d1d5db" fadeDuration={0.2} speed={1}>
      {children}
    </Skeleton>
  );
};

export default Loader;
