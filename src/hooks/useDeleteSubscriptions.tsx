/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { deleteSubscriptionsFn } from '@features/subscription';
import { queryClient } from '@lib/react-query';
import { useMutation } from '@tanstack/react-query';

export const useDeleteSubscriptions = () => {
  const {
    mutate: deleteSubscriptions,
    isLoading,
    error,
  } = useMutation(deleteSubscriptionsFn, {
    onSuccess: () => {
      // Success actions
      queryClient
        .invalidateQueries(['subscription'])
        .then(() => {
          console.log('Query invalidated successfully');
        })
        .catch((error) => {
          console.log('Failed to invalidate query', error);
        });
    },
    onError: (error) => {
      // Error actions
      console.log('Sign Up Failed');
    },
  });

  return {
    deleteSubscriptions,
    isLoading,
    error,
  };
};
