/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { axiosInstance } from '@lib/axios';
import Cookies from 'js-cookie';
import axios from 'axios';

const signUpURL = '/api/auth/signup';
const loginURL = '/api/auth/login';
const logoutURL = '/api/auth/logout';

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
    alert('Password and confirm password do not match');
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

export async function loginFn({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const userData: { username: string; password: string } = {
    username,
    password,
  };
  let response;

  try {
    response = await axiosInstance.post(loginURL, JSON.stringify(userData), {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    Cookies.set('username', username);
    Cookies.set('token', response.data);
    console.log('Successfully logged in');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
    } else {
      console.error(error);
    }

    throw error;
  }
}

export async function logoutFn({ token }: { token: string }) {
  const userToken: { token: string } = {
    token,
  };

  const response = await axiosInstance.post(
    logoutURL,
    JSON.stringify(userToken),
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },

      withCredentials: true,
    }
  );

  if (response.status == 204) {
    // Logout Successful
    Cookies.remove('username');
    Cookies.remove('token');
    console.log('Successfully logged out');
  }
}
