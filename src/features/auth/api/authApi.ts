/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { axiosInstance } from '@lib/axios';
import { API_URL } from '@config';
import Cookies from 'js-cookie';

const signUpURL = API_URL + '/api/auth/signup';
const loginURL = API_URL + '/api/auth/login';
const logoutURL = API_URL + '/api/v1/auth/token/logoutall';

export async function signUpFn({
  username,
  email,
  password,
  confirmPassword,
}: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  if (password !== confirmPassword) {
    throw new Error('Password and confirm password do not match');
  }

  const userData: { username: string; email: string; password: string } = {
    username,
    email,
    password,
  };

  const response = await axiosInstance.post(
    signUpURL,
    JSON.stringify(userData),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );

  console.log('User created');

  return response.data;
}
