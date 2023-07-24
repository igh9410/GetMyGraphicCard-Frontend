import { logoutFn } from '@features/auth';
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
