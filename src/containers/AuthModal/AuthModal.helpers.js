const capitalizeFirstLetter = (string) => (
  string[0].toUpperCase() + string.slice(1).toLowerCase()
);

export const prepareErrorMessage = (errorMessage) => (
  capitalizeFirstLetter(errorMessage.replace(/_/g, ' '))
);

export const getExpirationDate = (expiresIn) => (
  new Date(new Date().getTime() + expiresIn * 1000)
);

export const isTokenValid = (expirationDate) => (
  new Date(expirationDate) > new Date()
);
