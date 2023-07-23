import { signUpFn } from '@features/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
  const navigate = useNavigate();
  const {
    mutate: signUp,
    isLoading,
    error,
  } = useMutation(signUpFn, {
    onSuccess: () => {
      // Success actions
      navigate(-1);
    },
    onError: (error) => {
      // Error actions
      console.log('Sign Up Failed');
    },
  });

  return {
    signUp,
    isLoading,
    error,
  };
};
