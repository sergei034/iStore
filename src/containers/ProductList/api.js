import axios from './axios-products';

export const getProducts = async () => {
  try {
    return await axios.get('/products.json');
  } catch (error) {
    throw error;
  }
};

export const putToggleWishlist = async (productId, updatedProduct) => {
  try {
    return await axios.put(`/products/${productId - 1}.json`, updatedProduct);
  } catch (error) {
    throw error;
  }
};
