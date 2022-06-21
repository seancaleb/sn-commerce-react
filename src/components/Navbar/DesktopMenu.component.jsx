import { Flex, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import globals from "../../theme/globalStyles";
import styles from "./DesktopMenu.styles";

const DesktopMenu = ({ links }) => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    if (link === "Home") navigate("/");
    else if (link === "Shop") navigate(`${link.toLowerCase()}?category=all_products&page=1`);
    else navigate(`${link.toLowerCase()}`);
  };

  return (
    <Flex {...styles.nav}>
      <UnorderedList {...styles.nav__list}>
        {links.map((link) => (
          <ListItem key={link} {...globals.link__text}>
            <Link onClick={() => handleNavigate(link)}>{link}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default DesktopMenu;
