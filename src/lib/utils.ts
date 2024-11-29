import { clsx, type ClassValue } from 'clsx';
import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateDaysFromNow =(dateString: string) => {
  const targetDate = new Date(dateString)
  const currentDate = new Date();

  //Calculate the difference in time (milliseconds)
  const timeDifference = targetDate.getTime() - currentDate.getTime();

  //convert time difference to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  //handle past dates 
  if(daysDifference < 0) {
    return `${Math.abs(daysDifference)} days ago`;
  }

  return `${daysDifference} days`
}

export const setCookie = (key:string,value:any,options={}) => {
  Cookies.set(key,value,options)
}

export const getCoookie=<T>(key:string): T | null => {
  const value = Cookies.get(key);
  return value ? (value as T) : null
}
