/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fetchSubscriptionsFn } from '@features/subscription';
import { useQuery } from '@tanstack/react-query';

export const useSubscriptions = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['subscription'],
    queryFn: fetchSubscriptionsFn,
  });
  return { data, isLoading, error };
};
