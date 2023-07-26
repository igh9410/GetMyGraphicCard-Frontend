/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SearchParams, fetchItemsFn } from '@features/search';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

export const useItemSearch = () => {
  const [searchParams] = useSearchParams();

  // get parameters
  const title = searchParams.get('title');
  const size = searchParams.get('size');
  const pageNo = searchParams.get('pageNo');
  const lowest = searchParams.get('lowest');
  const highest = searchParams.get('highest');

  const params = {
    title: title || '',
    size: Number(size) || 8,
    pageNo: pageNo ? Number(pageNo) - 1 : 0,
  };
  const { data, isLoading, error, isPreviousData } = useQuery({
    queryKey: ['itemSearch', params],
    queryFn: () => fetchItemsFn(params),
    keepPreviousData: true,
  });
  return { data, isLoading, error };
};
