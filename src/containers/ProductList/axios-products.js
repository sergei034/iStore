import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://istore-react.firebaseio.com/',
});

export default axiosInstance;
