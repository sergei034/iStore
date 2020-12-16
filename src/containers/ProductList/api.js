import axios from './axios-products';

export const getProducts = async () => {
  const response = await axios.get('/products.json');
  return response;
};
