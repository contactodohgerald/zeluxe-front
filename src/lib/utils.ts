import { clsx, type ClassValue } from 'clsx';
import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateDaysFromNow = (dateString: string) => {
  const targetDate = new Date(dateString);
  const currentDate = new Date();

  //Calculate the difference in time (milliseconds)
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  //convert time difference to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  //handle past dates
  if (daysDifference < 0) {
    return `${Math.abs(daysDifference)} days ago`;
  }

  return `${daysDifference} days`;
};

export const formatDate = (dateInput: Date | string | number): string => {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  if (isNaN(date.getTime())) {
    throw new Error('invalid date input. Please provide a valid date.');
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
};

export const setCookie = (key: string, value: any, options = {}) => {
  Cookies.set(key, value, options);
};

export const getCoookie = <T>(key: string): T | null => {
  const value = Cookies.get(key);
  return value ? (value as T) : null;
};

export const getTokenFromCookie = (): string | null => {
  const token = document.cookie
    .split(';')
    .find((row) => row.trim().startsWith('accessToken='))
    ?.split('=')[1];
  return token || null;
};

export const formatErrors = (error: any) => {
  const errorMessages = error?.response?.data?.errors;

  if (errorMessages) {
    return Object.entries(errorMessages)
      .map(
        ([field, messages]) =>
          `${field}: ${Array.isArray(messages) ? messages.join(',') : messages}`,
      )
      .join('\n');
  }
  return 'An unexpected error occurred.';
};

export const onError = (
  e: React.SyntheticEvent<HTMLImageElement>,
  img: string,
) => {
  const target = e.target as HTMLImageElement;
  target.src = img;
};
