export const capitalize = (string) => (
  `${string[0].toUpperCase()}${string.slice(1)}`
);

export const findProductById = (productList, targetId) => (
  productList.find(product => product.id === targetId)
);
