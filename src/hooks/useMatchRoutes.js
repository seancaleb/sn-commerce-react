// Hook used to generate an array of links (object) containing both the url and link name used for BreadCrumb component
export const useMatchRoutes = (pathname) => {
  let pathLinks = pathname.split("/").filter((path) => path !== "");
  const matchedRoutes = (pathLinks = pathLinks.map((link) => {
    const pathUrl = pathLinks.reduce((prev, curr) => {
      if (prev.includes(link)) return prev;
      return `${prev}/${curr}`;
    });

    const formattedLink = link.split("-").join(" ");

    return {
      url: pathUrl,
      name: formattedLink,
    };
  }));

  return [matchedRoutes];
};
