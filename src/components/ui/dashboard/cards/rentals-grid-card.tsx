import { onError } from '@/lib/utils';
import { currencyNGN } from '@/utils/constants';
import { Link } from 'react-router-dom';
import Home9 from '@/assets/images/featured_properties/home9.jpg';
import { Rental } from '@/types/api';

export const RentalsGridCard = ({ rentals }: { rentals: Rental[] }) => {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {rentals?.map((rental) => (
        <div
          key={rental?.id}
          className="card card-shadow overflow-hidden bg-white pb-2.5 text-start"
        >
          <img
            src={rental?.images[0]?.url}
            alt={`Home`}
            className="h-[240px] w-full object-cover"
            onError={(e) => onError(e, Home9)}
          />
          <div className="p-4">
            <Link to={`/${rental?.id}`} className="hover:text-primary">
              <h5 className="mb-2.5 text-[20px]">{rental?.name} for Booking</h5>
            </Link>
            <p className="mb-[5px] text-gray-700">
              {rental?.address?.location}
            </p>
            <p className="mb-2.5 text-sm text-gray-500">
              {rental?.listing_type}
            </p>
            <p className="font-semibold text-green-5">{`${currencyNGN} ${Number(rental?.price)}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
