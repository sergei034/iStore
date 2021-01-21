export const showSearchIcon = (route) => {

  const routesWithSearch = [
    '/products/mac', 
    '/products/iphone', 
    '/products/ipad', 
    '/products/apple-watch', 
    '/wishlist',
  ];

  return routesWithSearch.includes(route);
};
