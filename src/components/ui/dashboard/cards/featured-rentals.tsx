import { Link } from 'react-router-dom';
import { FeaturedCard } from './featured-card';
import { paths } from '@/config/paths';
import { Rental } from '@/types/api';

export const FeaturedRentals = ({ rentals }: { rentals: Rental[] }) => {
  return (
    <div>
      <div className="mb-[1.3rem] flex flex-wrap justify-between">
        <h4 className="font-lato text-[1.1rem] font-bold leading-[1.3rem] tracking-[3%] text-primary">
          Featured Rentals
        </h4>
        <Link
          to={paths.app.rentals.getHref()}
          className="font-raleway text-[0.6rem] font-semibold leading-[0.53rem] tracking-[3%] hover:text-primary"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-x-[0.6rem] gap-y-[1.5rem] sm:grid-cols-2">
        {rentals?.map((rental) => (
          <FeaturedCard key={rental.id} rental={rental} />
        ))}
      </div>
    </div>
  );
};
