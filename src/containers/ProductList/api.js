import axios from './axios-products';

export const getProducts = async (currentCategory) => {
  const response = await axios.get(`/${currentCategory}.json`);
  return response;
};

export const putToggleWishlist = async (currentCategory, productId, updatedProduct) => {
  const response = await axios.put(`/${currentCategory}/${productId - 1}.json`, updatedProduct);
  return response;
};
