import { configureAuth } from 'react-query-auth';
import { z } from 'zod';
import { AuthResponse } from '../types/api';
import { api } from './api-client';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { paths } from '../config/paths';

// api call definitions for auth (types, schemas, requests):
// these are not part of features as this is a module shared across features
// const getUser = async (): Promise<User> => {
//   try {
//     const response = await api.get('/photos');
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user');
//   }
// };

// export const getState= async () => {
//   try {
//     const response = await api.get('http://states-and-cities.com/api/v1/states')
//     console.log(response)
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch state:', error);
//     throw new Error('Failed to fetch state');
//   }
// }

const logout = (): Promise<void> => {
  return api.post('/auth/logout');
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post('/auth/login', data);
};

export const registerInputSchema = z.object({
  email: z.string().min(1, 'Required'),
  first_name: z.string().min(1, 'Required'),
  last_name: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

export type RegisterInput = z.infer<typeof registerInputSchema>;

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
  return api.post('/auth/register', data);
};

const authConfig = {
  userFn: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(null), 1000));
  },
  // userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    return response.user;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    return response.user;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();

  if (!user.data) {
    console.log({
      pathname: location.pathname,
      redirectTo: paths.auth.login.getHref(location.pathname),
    });
    return (
      <Navigate
        to={paths.auth.login.getHref(location.pathname)}
        replace={true}
      />
    );
  }

  return children || <Outlet />;
};
