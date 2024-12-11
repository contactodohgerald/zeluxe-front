import { Rental } from '@/types/api';
import { RentalsGridCard } from '../dashboard/cards/rentals-grid-card';

export const SearchListingsCard = ({ listings }: { listings: Rental[] }) => {
  return <RentalsGridCard rentals={listings} />;
};
