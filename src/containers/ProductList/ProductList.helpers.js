export const capitalize = (string) => (
  `${string[0].toUpperCase()}${string?.slice(1)}`
);

const filterProductsByCategory = (productList, category) => (
  productList?.filter(product => product?.category === category)
);

const filterProductsFromWishlist = (productList) => (
  productList?.filter(product => product?.inWishlist)
);

const filterProductsBySearchItem = (productList, searchItem) => (
  productList?.filter(product => product?.name.toLowerCase().includes(searchItem))
);

export const filterProductList = (productList, category, pathname, searchItem) => {

  let filteredProducts;

  if (searchItem) {
    filteredProducts = filterProductsBySearchItem(productList, searchItem);
  } else {
    filteredProducts = productList;
  }

  if (pathname === '/wishlist') {
    return filterProductsFromWishlist(filteredProducts);
  } else if (category) {
    return filterProductsByCategory(filteredProducts, category);
  }
  return filteredProducts;
};

export const findProductById = (productList, targetId) => (
  productList.find(product => product?.id === targetId)
);
