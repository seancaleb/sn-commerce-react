import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from "../features/favoritesSlice";
import { removeFromFavoritesUser } from "../firebase/firestore/user";
import globals from "../theme/globalStyles";

const FavoritesRemoveButton = ({ prodId, children, product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    if (user.isAuthenticated) {
      dispatch(removeFromFavorites(prodId));
      removeFromFavoritesUser({ uid: user.user.uid, product });
    } else {
      dispatch(removeFromFavorites(prodId));
    }
  };

  return (
    <Button {...globals.btn__neutral} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default FavoritesRemoveButton;
