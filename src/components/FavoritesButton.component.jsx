import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, selectProductIds } from "../features/favoritesSlice";
import { addToFavoritesUser } from "../firebase/firestore/user";
import globals from "../theme/globalStyles";

const FavoritesButton = ({ product }) => {
  const dispatch = useDispatch();
  const favoritesProductIds = useSelector((state) => selectProductIds(state));
  const isMarkedAsFavorite = favoritesProductIds.includes(product && product.id);
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    if (user.isAuthenticated) {
      dispatch(addToFavorites(product));
      addToFavoritesUser({ uid: user.user.uid, product });
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <>
      {product && (
        <Button
          {...globals.btn__outlined}
          onClick={handleClick}
          disabled={!product || isMarkedAsFavorite}
        >
          {isMarkedAsFavorite ? "Saved in favorites" : "Add to favorites"}
        </Button>
      )}
    </>
  );
};

export default FavoritesButton;
