import { configureAuth } from 'react-query-auth';
import { z } from 'zod';
import { AuthResponse, User } from '../types/api';
import { api } from './api-client';
import { Navigate, useLocation } from 'react-router-dom';
import { paths } from '../config/paths';
import { getTokenFromCookie, setCookie } from './utils';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const getUser = async (): Promise<User | null> => {
  const user = localStorage.getItem('user');
  if (!user) {
    return null;
  }
  try {
    return JSON.parse(user);
  } catch (error) {
    console.log('error decoding', error);
    return null;
  }
};

const logout = async (): Promise<void> => {
  try {
    await api.post('/auth/logout');
    // Clear authentication data
    Cookies.remove('accessToken');
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Error during logout:', error);
    throw error; // Allow `useLogout` to handle the error
  }
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(5, 'password is required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post('/auth/login', data);
};

export const registerInputSchema = z.object({
  first_name: z.string().min(1, 'Required'),
  last_name: z.string().min(1, 'Required'),
  email: z.string().min(1, 'Required'),
  phone: z.string().min(1, 'Required'),
  gender: z.string().optional(),
  country_id: z.string().optional(),
  state_id: z.string().optional(),
  address: z.string().optional(),
  password: z.string().min(1, 'Required'),
  password_confirmation: z.string().min(1, 'Required'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
  return api.post('/auth/register-renter', data);
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    const { user, access_token } = response?.data;
    if (access_token) {
      setCookie('accessToken', access_token, { expires: 1 });
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('role', user?.role?.name);
    }
    return response?.data?.user;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response?.data?.user;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = getTokenFromCookie();
  const location = useLocation();
  const role = localStorage.getItem('role');

  useEffect(() => {
    // If no token or the token is expired, remove the expired token and redirect to login
    if (!token) {
      console.log('No valid token found or token expired.');
      Cookies.remove('accessToken'); // Remove the expired or invalid token
    }
  }, [token]);

  if (!token || !role) {
    console.log({
      pathname: location.pathname,
      redirectTo: paths.auth.login.getHref(location.pathname),
    });

    // Clear expired token
    Cookies.remove('accessToken');
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  if (role === 'renter') {
    return <Navigate to={paths.home.getHref()} replace />;
  }

  return children;
};
