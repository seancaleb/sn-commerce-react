import { HeartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import {
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate, Link as ReachLink } from "react-router-dom";
import { Notification, ShoppingBag } from "../";
import globals from "../../theme/globalStyles";
import Login from "../auth/Login/Login.component";
import DesktopMenu from "./DesktopMenu.component";
import styles from "./Navbar.styles";

const primaryLinks = ["Shop"];

const Navbar = () => {
  const [isGreaterThanEqual992] = useMediaQuery("(min-width: 992px)");
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.favorites.products);

  const { isOpen: bagIsOpen, onOpen: bagOnOpen, onClose: bagOnClose } = useDisclosure();
  const { isOpen: loginIsOpen, onOpen: loginOnOpen, onClose: loginOnClose } = useDisclosure();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Container {...styles.container}>
        {/* Primary Menu  */}
        <DesktopMenu links={primaryLinks} />

        {/* Logo  */}
        <Heading onClick={handleClick} {...globals.site__logo}>
          SNCLB
        </Heading>

        {/* Secondary Menu  */}
        <UnorderedList {...styles.menu}>
          {/* Favorites  */}
          <ListItem>
            <Link as={ReachLink} to={"/favorites"} {...styles.menu__item}>
              <Flex pos="relative">
                <HeartOutlined className="icon" />

                {/* If favorites contains items display notification */}
                <Notification totalItems={favorites?.length} />
              </Flex>
              {isGreaterThanEqual992 && <Text {...globals.link__text}>Favorites</Text>}
            </Link>
          </ListItem>

          {/* Shopping bag */}
          <ListItem {...styles.menu__item} onClick={bagOnOpen}>
            <Flex pos="relative">
              <ShoppingOutlined className="icon" />

              {/* If cart contains items display notification */}
              <Notification totalItems={cart?.total_items} />
            </Flex>
            {isGreaterThanEqual992 && <Text {...globals.link__text}>Bag</Text>}
          </ListItem>

          <ListItem {...styles.menu__item} onClick={loginOnOpen}>
            <UserOutlined className="icon" />
            {isGreaterThanEqual992 && <Text {...globals.link__text}>Login</Text>}
          </ListItem>
        </UnorderedList>
      </Container>

      {/* Shopping Bag  */}
      <ShoppingBag isOpen={bagIsOpen} onClose={bagOnClose} />

      {/* Login  */}
      <Login isOpen={loginIsOpen} onClose={loginOnClose} />
    </>
  );
};

export default Navbar;
