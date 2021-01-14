export const capitalize = (string) => (
  `${string[0].toUpperCase()}${string?.slice(1)}`
);

export const filterProductsByCategory = (productList, category) => (
  productList?.filter(product => product?.category === category)
);

export const filterProductsFromWishlist = (productList) => (
  productList?.filter(product => product?.inWishlist)
);

export const filterProductList = (productList, category, pathname) => {
  if (pathname === '/wishlist') {
    return filterProductsFromWishlist(productList);
  } else if (category) {
    return filterProductsByCategory(productList, category);
  }
  return productList;
};

export const findProductById = (productList, targetId) => (
  productList.find(product => product?.id === targetId)
);
