export const capitalize = (string) => (
  `${string[0].toUpperCase()}${string?.slice(1)}`
);

export const createSuccessMessageForWishlistToggler = (wishlist, product) => {
  const productDescription = `${product?.name} ${product?.description?.memory} ${product?.description?.color}`;

  return wishlist.includes(product.id)
    ? `${productDescription} has been added to wishlist`
    : `${productDescription} has been removed from wishlist`
};

const filterProductsByCategory = (productList, category) => (
  productList?.filter(product => product?.category === category)
);

const filterProductsFromWishlist = (productList, wishlist) => (
  productList?.filter((product) => wishlist.includes(product.id))
);

const filterProductsBySearchItem = (productList, searchItem) => {
  const trimmedSerchItem = searchItem.trim().toLowerCase();

  return productList?.filter(product => (
    product.name.toLowerCase().includes(trimmedSerchItem)
    || product.description.color.toLowerCase().includes(trimmedSerchItem)
    || product.description.memory.toLowerCase().includes(trimmedSerchItem)
  ))
};

export const filterProductList = (productList, wishlist, category, pathname, searchItem) => {
  let filteredProducts;

  if (searchItem) {
    filteredProducts = filterProductsBySearchItem(productList, searchItem);
  } else {
    filteredProducts = productList;
  }

  if (pathname === '/wishlist') {
    return filterProductsFromWishlist(filteredProducts, wishlist);
  } else if (category) {
    return filterProductsByCategory(filteredProducts, category);
  }
  return filteredProducts;
};

export const findProductById = (productList, targetId) => (
  productList?.find(product => product?.id === targetId)
);

export const updateWishlist = (wishlist, productId) => (
  wishlist.includes(productId)
    ? wishlist.filter((curProductId) => curProductId !== productId)
    : [...wishlist, productId]
);

export const addUserIdToWishlist = (wishlist, userId) => ({
  wishlist, 
  userId,
});
