import { clsx, type ClassValue } from 'clsx';
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
