import api from '../api';

export const addRegion = ({ name }) => {
  return api.request({
    method: 'POST',
    url: '/region',
    data: {
      name,
    },
  });
};

export const getAllRegions = () => {
  return api.request({
    method: 'GET',
    url: '/region',
  });
};
