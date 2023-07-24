import { axiosInstance } from '@lib/axios';

export type SearchParams = {
  title: string;
  pageNo?: number;
  size?: number;
  lowest?: number;
  highest?: number;
};

export async function fetchItemsFn(params: SearchParams) {
  const response = await axiosInstance.get('/api/search', {
    params,
  });
  console.log(response.data);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data;
}
