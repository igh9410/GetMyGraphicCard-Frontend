/* eslint-disable @typescript-eslint/require-await */
import { Landing, LogIn, Root, Search, SignUp, User } from '@pages';
import { useAuth } from '@providers';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import Cookies from 'js-cookie';

export function Routes() {
  const { isLoggedIn } = useAuth();

  const redirectToLoginPage = async () => {
    // Check if user is logged in via useAuth context, redirect to login page if not exists.
    if (!isLoggedIn && !Cookies.get('username')) {
      return redirect('/login');
    }
    return null;
  };

  const redirectToHomePage = async () => {
    // Check if user is logged in by checking AuthContext
    if (isLoggedIn) {
      return redirect('/');
    }
    return null;
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Landing />,
        },
        {
          path: '/search',
          element: <Search />,
        },
        {
          path: '/user',
          loader: redirectToLoginPage,
          element: <User />,
        },
      ],
    },
    {
      path: '/login',
      loader: redirectToHomePage,
      element: <LogIn />,
    },
    {
      path: '/signup',
      loader: redirectToHomePage,
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}
