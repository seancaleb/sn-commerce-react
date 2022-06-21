import { GridItem, Text, Button, Flex, Image, Box, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { BreadCrumb, EmptyProducts, FavoritesRemoveButton, Main, Section } from "../../components";
import styles from "./Favorites.styles";
import globals from "../../theme/globalStyles";
import { Fragment, useEffect } from "react";
import Login from "../../components/auth/Login/Login.component";

const FavoritesPage = () => {
  const { pathname } = useLocation();

  return (
    <Main>
      <BreadCrumb pathname={pathname} />

      <Section>
        <Favorites />
      </Section>
    </Main>
  );
};

export default FavoritesPage;

function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [favorites]);

  return (
    <GridItem colSpan={12}>
      {favorites.length === 0 && (
        <EmptyProducts
          title="Your favorites is empty"
          message="Want to save items as your favorites? You can take a look at our shop to save items as one of your favorites by clicking on the heart symbol."
        />
      )}

      {!user.isAuthenticated && favorites.length > 0 && <FavoritesNotice />}

      {favorites.length > 0 && <ProductsList products={favorites.products} />}
    </GridItem>
  );
}

function ProductsList({ products }) {
  const navigate = useNavigate();

  const handleClickNavigate = (link, id) => {
    navigate(`/shop/${link}`, { state: { id } });
  };

  return (
    <Flex {...styles.favorites__container}>
      {products.map((prod) => {
        return (
          <Fragment key={prod.id}>
            <Flex {...styles.prod__container}>
              <Box flex={1}>
                {/* Product image  */}
                <Image src={prod.image.url} {...styles.prod__img} />
              </Box>

              {/* Product details container */}
              <Flex {...styles.prod__details}>
                {/* Product details  */}
                <Flex flexDir="column">
                  <Text {...styles.prod__name}>{prod.name}</Text>
                  <Text {...styles.prod__price}>{prod.price.formatted_with_symbol}</Text>
                </Flex>
                {/* Buttons  */}
                <Flex {...styles.buttons__container}>
                  <Button
                    {...globals.btn__filled}
                    onClick={() => handleClickNavigate(prod.permalink, prod.id)}
                  >
                    View item
                  </Button>
                  <FavoritesRemoveButton prodId={prod.id} product={prod}>
                    Remove
                  </FavoritesRemoveButton>
                </Flex>
              </Flex>
            </Flex>

            <hr />
          </Fragment>
        );
      })}
    </Flex>
  );
}

function FavoritesNotice() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex {...styles.notice__container}>
        <Text {...styles.notice__text}>
          Don't miss out on your favorite items. Create an account or sign in to save your
          favorites.
        </Text>
        <Button onClick={onOpen} {...globals.btn__filled}>
          Login
        </Button>
      </Flex>
      <Login isOpen={isOpen} onClose={onClose} />
    </>
  );
}
