import api from '../api';

export const SignIn = ({ email, password }) => {
  return api.request({
    method: 'POST',
    url: 'users/authenticate',
    data: {
      email,
      password,
    },
  });
};
