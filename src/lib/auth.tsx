import { configureAuth } from 'react-query-auth';
import { z } from 'zod';
import { AuthResponse, User } from '../types/api';
import { api } from './api-client';
import { Navigate, useLocation } from 'react-router-dom';
import { paths } from '../config/paths';
import Cookies from 'js-cookie';

const getUser = async (): Promise<User | null> => {
  const token = Cookies.get('accessToken');
  if (!token) {
    return null;
  }
  try {
    const decodedToken: any = token;
    const user: User = decodedToken;
    return user;
  } catch (error) {
    console.log('error decoding', error);
    return null;
  }
};

const logout = (): Promise<void> => {
  return api.post('/auth/logout');
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
    const token = response?.data?.access_token;
    if (token) {
      Cookies.set('accessToken', token, { expires: 1 });
    }
    return response.data.user;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response.data.user;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  console.log(user?.data);
  const location = useLocation();

  if (!user.data) {
    console.log({
      pathname: location.pathname,
      redirectTo: paths.auth.login.getHref(location.pathname),
    });
    return (
      <Navigate to={paths.auth.login.getHref(location.pathname)} replace />
    );
  }

  return children;
};
