import axios from 'axios';

export const getProducts = async () => {
  try {
    return await axios.get('https://istore-react.firebaseio.com/products.json');
  } catch (error) {
    throw error;
  }
};

export const putToggleWishlist = async (productId, updatedProduct) => {
  try {
    return await axios.put(`https://istore-react.firebaseio.com/products/${productId - 1}.json`, updatedProduct);
  } catch (error) {
    throw error;
  }
};
