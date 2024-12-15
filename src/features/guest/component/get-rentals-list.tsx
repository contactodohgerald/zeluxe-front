import { AdvanceFilter, RentalsCard } from '@/components/ui/dashboard/cards';
import { useRentals } from '../api/get-rentals';
import { Spinner } from '@/components/ui/spinner';
import { Card } from 'antd';
import { useFilterRental } from '../api/filter-rentals';
import { useNotifications } from '@/components/ui/notifications';
import { useState } from 'react';
import { formatErrors } from '@/lib/utils';
import { Rental } from '@/types/api';
import { Pagination } from '@/components/ui/pagination/use-pagination';

export const GetRentalsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
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
        // console.log('data', response?.data as any);
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

  const isFiltered = filteredResult.length > 0;
  const listings = rentalQuery?.data?.data;
  const currentListings = isFiltered
    ? filteredResult?.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
      )
    : rentals?.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalEntries = isFiltered
    ? filteredResult?.length
    : rentals?.length || 0;

  if (!listings && !isFiltered) {
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

  if (totalEntries === 0) {
    return (
      <Card>
        <p>You have no Rentals Yet</p>
      </Card>
    );
  }

  if (filterRentalMutation.isPending) {
  }

  return (
    <>
      <div className="mb-[15px] mt-5 w-full rounded-[3.92px] border border-light bg-[#F9F9F9] px-5 py-[11.25px]">
        <Pagination
          currentPage={currentPage}
          totalEntries={totalEntries}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className="flex flex-col gap-[1.3rem] lg:flex-row">
        <div>
          {/* {isFiltered ? (
            <RentalsCard rentals={filteredResult} />
          ) : (
            <RentalsCard rentals={rentals as Rental[]} />
          )} */}
          <RentalsCard rentals={currentListings as Rental[]} />
        </div>
        <div>
          <AdvanceFilter filterRentalMutation={filterRentalMutation} />
        </div>
      </div>
    </>
  );
};
