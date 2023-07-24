import { loginFn } from '@features/auth';
import { useAuth } from '@providers';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useSignIn = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const {
    mutate: signIn,
    isLoading,
    error,
  } = useMutation(loginFn, {
    onSuccess: () => {
      // Success actions
      setIsLoggedIn(true);
      navigate(-1);
    },
    onError: (error) => {
      // Error actions
      console.log('Sign In Failed');
      alert('Invalid Credentials. Please check your username and password.');
    },
  });

  return {
    signIn,
    isLoading,
    error,
  };
};
