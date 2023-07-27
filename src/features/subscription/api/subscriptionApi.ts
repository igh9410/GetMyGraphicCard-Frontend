/* eslint-disable @typescript-eslint/no-unsafe-return */
import { axiosInstance } from '@lib/axios';
import axios from 'axios';
import Cookies from 'js-cookie';

const subscriptionUrl = '/api/subscriptions/';

export async function fetchSubscriptionsFn() {
  const token = Cookies.get('token');
  if (!token) {
    throw Error('Token is not included in the Authorization header');
  }

  try {
    const response = await axiosInstance.get(subscriptionUrl, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
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

export async function addSubscriptionsFn(id: string) {
  const token = Cookies.get('token');
  if (!token) {
    throw Error('Token is not included in the Authorization header');
  }
  console.log('id:', id);
  try {
    const response = await axiosInstance.post(subscriptionUrl, id, {
      headers: {
        'Content-Type': 'text/plain',
        Authorization: `Bearer ${token}`,
      },
    });
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

export async function deleteSubscriptionsFn(index: number) {
  const token = Cookies.get('token');
  if (!token) {
    throw Error('Token is not included in the Authorization header');
  }

  try {
    const response = await axiosInstance.delete(`${subscriptionUrl}${index}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
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
