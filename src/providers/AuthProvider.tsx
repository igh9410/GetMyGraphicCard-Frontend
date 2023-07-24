/* eslint-disable @typescript-eslint/no-empty-function */
import Cookies from 'js-cookie';
import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type AuthContextProviderProps = {
  children?: ReactNode;
};

interface AuthContextType {
  isLoggedIn: boolean;
  username: string | null;
  token: string | null;
  setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
  setUsername: React.Dispatch<SetStateAction<string | null>>;
  setToken: React.Dispatch<SetStateAction<string | null>>;
}

const initialValue = {
  isLoggedIn: false,
  username: null,
  token: null,
  setIsLoggedIn: () => {},
  setUsername: () => {},
  setToken: () => {},
};

const AuthContext = createContext<AuthContextType>(initialValue);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (Cookies.get('username') && Cookies.get('token')) {
      // Check if username and token exists in Cookies
      setIsLoggedIn(true);
      setUsername(Cookies.get('username') ?? null);
      setToken(Cookies.get('token') ?? null);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, username, token]);

  const value = useMemo(
    () => ({
      isLoggedIn,
      username,
      token,
      setIsLoggedIn,
      setUsername,
      setToken,
    }),
    [isLoggedIn, username, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
