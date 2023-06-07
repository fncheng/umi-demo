import { request } from 'umi';

export const getList = () => {
  return request('/api/getlist', {
    method: 'GET',
  });
};
