import axios from 'axios';

export const postLogin = async (formValues) => {
  try {
    const authData = {
      email: formValues.email,
      password: formValues.password,
      returnSecureToken: true,
    };

    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNmOonA7UorlPPLTpiP_VneZ7RecwaKmY', authData, {
      headers: {
        'Content-Type': 'application/json;',
      },
    });
    return response;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const postSignUp = async (formValues) => {
  try {
    const authData = {
      email: formValues.email,
      password: formValues.password,
      returnSecureToken: true,
    };

    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNmOonA7UorlPPLTpiP_VneZ7RecwaKmY', authData, {
      headers: {
        'Content-Type': 'application/json;',
      },
    });
    return response;
  } catch (error) {
    throw error.response.data.error;
  }
};
