/* eslint-disable @typescript-eslint/no-unsafe-return */
import { axiosInstance } from '@lib/axios';
import { SearchParams } from '../types';
import axios from 'axios';

export async function fetchItemsFn(params: SearchParams) {
  try {
    const response = await axiosInstance.get('/api/items/search', {
      params,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
    } else {
      console.error(error);
    }

    throw error;
  }
}
