import { SearchListingsCard } from '@/components/ui/search/search-listings-card';
import { Rental } from '@/types/api';
import { useLocation } from 'react-router-dom';

export const GetSearchListings = () => {
  const location = useLocation();
  const rentalLists = location.state?.rentals as Rental[];
  //   console.log('searchRentals', rentalLists);

  if (!rentalLists || rentalLists.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p>No results found</p>
      </div>
    );
  }

  return (
    <>
      <SearchListingsCard listings={rentalLists} />
    </>
  );
};
