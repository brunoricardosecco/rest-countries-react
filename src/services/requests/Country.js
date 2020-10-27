import api from '../api';

export const addCountry = data => {
  return api.request({
    method: 'POST',
    url: '/country',
    data,
  });
};

export const findAll = () => {
  return api.request({
    method: 'GET',
    url: '/country',
  });
};
