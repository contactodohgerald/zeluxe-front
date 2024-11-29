import axios, { InternalAxiosRequestConfig } from 'axios';

import { paths } from '../config/paths';
import { env } from '../config/env';
import { useNotifications } from '../components/ui/notifications';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = document.cookie
    .split(';')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];
  if (config.headers) {
    config.headers.Accept = 'application/json';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  // config.withCredentials = true;
  return config;
}

export const api = axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // notication to return message
    useNotifications.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });

    if (error.response?.status === 401) {
      const currentPath = window.location.pathname;
      if (currentPath !== paths.auth.login.getHref()) {
        const searchParams = new URLSearchParams();
        const redirectTo =
          searchParams.get('redirectTo') || window.location.pathname;
        window.location.href = paths.auth.login.getHref(redirectTo);
      }
    }

    return Promise.reject(error);
  },
);
