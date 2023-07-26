import { axiosInstance } from '@lib/axios';
import { SearchParams } from '../types';

export async function fetchItemsFn(params: SearchParams) {
  const response = await axiosInstance.get('/api/items/search', {
    params,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data;
}
