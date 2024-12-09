import { AdvanceFilter, RentalsCard } from '@/components/ui/dashboard/cards';
import { useRentals } from '../api/get-rentals';
import { Spinner } from '@/components/ui/spinner';
import { Card } from 'antd';
import { useFilterRental } from '../api/filter-rentals';
import { useNotifications } from '@/components/ui/notifications';
import { useState } from 'react';
import { formatErrors } from '@/lib/utils';
import { Rental } from '@/types/api';

export const GetRentalsList = () => {
  const rentalQuery = useRentals();
  const [filteredResult, setFilteredResult] = useState<Rental[]>([]);
  const rentals = rentalQuery?.data?.data;
  const { addNotification } = useNotifications();
  const filterRentalMutation = useFilterRental({
    mutationConfig: {
      onSuccess(response) {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'My rentals retrieved',
        });
        console.log('data', response?.data as any);
        const filtersData = response?.data as Rental[];
        setFilteredResult(response?.data);
        if (Array.isArray(filtersData)) {
          setFilteredResult(filtersData);
        } else {
          addNotification({
            type: 'error',
            title: 'Invalid Data',
            message: 'Unexpected response format',
          });
        }
      },
      onError(error) {
        const formatError = formatErrors(error);
        addNotification({
          type: 'error',
          title: 'Failure',
          message: formatError,
        });
      },
    },
  });

  if (rentalQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const listings = rentalQuery?.data?.data;

  if (!listings || listings.length === 0) {
    return (
      <Card>
        <p>You have no Rentals Yet</p>
      </Card>
    );
  }
  if (filteredResult.length === 0 && !rentalQuery.isSuccess) {
    return (
      <Card>
        <p>No Filtered results found</p>
      </Card>
    );
  }

  if (filterRentalMutation.isPending) {
  }

  return (
    <>
      <div className="flex flex-col gap-[1.3rem] lg:flex-row">
        <div>
          {filteredResult.length > 0 ? (
            <RentalsCard rentals={filteredResult} />
          ) : (
            <RentalsCard rentals={rentals as Rental[]} />
          )}
        </div>
        <div>
          <AdvanceFilter filterRentalMutation={filterRentalMutation} />
        </div>
      </div>
    </>
  );
};
