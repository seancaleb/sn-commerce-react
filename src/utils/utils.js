export const stripHTML = (data) => {
  return data.replace(/(<([^>]+)>)/gi, "");
};

export const toTitleCase = (str) =>
  str.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());

export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", resolve);
    image.addEventListener("error", reject);
    image.src = src;
  });
};
