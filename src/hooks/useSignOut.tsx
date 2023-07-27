import { logoutFn } from '@features/auth';
import { queryClient } from '@lib/react-query';
import { useAuth } from '@providers';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useSignOut = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const {
    mutate: signOut,
    isLoading,
    error,
  } = useMutation(logoutFn, {
    onSuccess: () => {
      // Success actions
      setIsLoggedIn(false);
      queryClient
        .invalidateQueries(['subscription'])
        .then(() => {
          console.log('Query invalidated successfully');
        })
        .catch((error) => {
          console.log('Failed to invalidate query', error);
        });
      navigate('/');
    },
    onError: (error) => {
      // Error actions
      console.log('Sign Out Failed');
    },
  });

  return {
    signOut,
    isLoading,
    error,
  };
};
