export const findProductById = (productList, targetId) => (
  productList.find(product => product.id === targetId)
);
