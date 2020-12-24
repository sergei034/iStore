import axios from './axios-products';

export const getProducts = async () => {
  const response = await axios.get('/products.json');
  return response;
};

export const putToggleWishlist = async (productId, value) => {
  const response = await axios.put(`/products/${productId - 1}.json`, value);
  return response;
};
