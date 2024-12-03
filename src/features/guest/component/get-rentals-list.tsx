import { AdvanceFilter, RentalsCard } from '@/components/ui/dashboard/cards';
import { useRentals } from '../api/get-rentals';
import { Spinner } from '@/components/ui/spinner';
import { Card } from 'antd';

export const GetRentalsList = () => {
  const rentalQuery = useRentals();
  const rentals = rentalQuery?.data?.data;

  if (rentalQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const listings = rentalQuery?.data?.data;

  if (!listings) {
    return (
      <Card>
        <p>You have no Rentals Yet</p>
      </Card>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-[1.3rem] lg:flex-row">
        <div>
          <RentalsCard rentals={rentals as any} />
        </div>
        <div>
          <AdvanceFilter />
        </div>
      </div>
    </>
  );
};
