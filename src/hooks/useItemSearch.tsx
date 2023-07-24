/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SearchParams, fetchItemsFn } from '@features/search';
import { useQuery } from '@tanstack/react-query';

export const useItemSearch = (params: SearchParams) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['itemSearch', params],
    queryFn: () => fetchItemsFn(params),
  });
  return { data, isLoading, error };
};
