import { DownOutlined, HeartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
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
import DesktopMenu from "./DesktopMenu.component";
import styles from "./Navbar.styles";
import Logout from "../auth/Logout/Logout.component";

const primaryLinks = ["Shop"];

const NavbarAuth = () => {
  const [isGreaterThanEqual992] = useMediaQuery("(min-width: 992px)");
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.favorites.products);

  const { isOpen: bagIsOpen, onOpen: bagOnOpen, onClose: bagOnClose } = useDisclosure();
  const {
    isOpen: logoutIsOpen,
    onToggle: logoutOnToggle,
    onClose: logoutOnClose,
  } = useDisclosure();

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
          SNCMRCE
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

          <ListItem {...styles.menu__item} pos="relative" onClick={logoutOnToggle}>
            <UserOutlined className="icon" />
            {isGreaterThanEqual992 && <Text {...globals.link__text}>My Account</Text>}
            {isGreaterThanEqual992 && <DownOutlined className="icon" />}
          </ListItem>
          {/* Logout  */}
          <Logout isOpen={logoutIsOpen} onClose={logoutOnClose} />
        </UnorderedList>
      </Container>

      {/* Shopping Bag  */}
      <ShoppingBag isOpen={bagIsOpen} onClose={bagOnClose} />
    </>
  );
};

export default NavbarAuth;
