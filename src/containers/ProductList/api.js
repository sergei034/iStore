import axios from 'axios';

export const getProducts = async () => {
  try {
    return await axios.get('https://istore-react.firebaseio.com/products.json');
  } catch (error) {
    throw error;
  }
};

export const getWishlist = async (userId, token) => {
  try {
    // TODO: add query params for filtering by user id
    // const queryParams = `?orderBy="userId"&equalTo="${userId}"`;
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    return await axios.get(`https://istore-react.firebaseio.com/wishlist/${userId}.json?auth=${token}`);
    // return await axios.get(`https://istore-react.firebaseio.com/wishlist.json${queryParams}`);
  } catch (error) {
    throw error;
  }
};

export const putToggleWishlist = async (updatedWishlist, token, userId) => {
  // TODO: add query params for filtering by user id
  const queryParams = `?orderBy="userId"&equalTo="${userId}"`;
  try {
    return await axios.put(`https://istore-react.firebaseio.com/wishlist/${userId}.json?auth=${token}`, updatedWishlist);
  } catch (error) {
    throw error;
  }
};

// export const putToggleWishlist = async (productId, updatedProduct) => {
//   try {
//     return await axios.put(`https://istore-react.firebaseio.com/products/${productId - 1}.json`, updatedProduct);
//   } catch (error) {
//     throw error;
//   }
// };
