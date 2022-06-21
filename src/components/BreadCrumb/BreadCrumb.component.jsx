import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { useMatchRoutes } from "../../hooks/useMatchRoutes";
import globals from "../../theme/globalStyles";
import { toTitleCase } from "../../utils/utils";
import styles from "./BreadCrumb.styles";

const BreadCrumb = ({ pathname }) => {
  const [links] = useMatchRoutes(pathname);
  const currentPage = links.length - 1;

  return (
    <Breadcrumb {...styles.separator}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/" {...globals.link__text}>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      {links.map((link, index) => {
        const titleCasedLink = toTitleCase(link.name);

        /* Dealing with the shop url  */
        if (link.url === "shop") {
          return (
            <BreadcrumbItem key={nanoid()}>
              <BreadcrumbLink
                as={index !== currentPage ? Link : "p"}
                to={index !== currentPage ? `/${link.url}?category=all_products&page=1` : null}
                style={{
                  textDecoration: index === currentPage && "unset",
                  cursor: index === currentPage && "default",
                }}
                {...globals.link__text}
              >
                {titleCasedLink}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        }

        return (
          <BreadcrumbItem key={nanoid()}>
            <BreadcrumbLink
              as={index !== currentPage ? Link : "p"}
              to={index !== currentPage ? `/${link.url}` : null}
              style={{
                textDecoration: index === currentPage && "unset",
                cursor: index === currentPage && "default",
              }}
              {...globals.link__text}
            >
              {titleCasedLink}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumb;
