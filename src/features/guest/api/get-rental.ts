import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRental = ({ rentalId }: { rentalId: string }) => {
  return api.get(`/show-rental/${rentalId}`);
};

export const getRentalQueryOptions = (rentalId: string) => {
  return queryOptions({
    queryKey: ['rentals', rentalId],
    queryFn: () => getRental({ rentalId }),
  });
};

type UseRentalOptions = {
  rentalId: string;
  queryConfig?: QueryConfig<typeof getRentalQueryOptions>;
};

export const useRental = ({ rentalId, queryConfig }: UseRentalOptions) => {
  return useQuery({
    ...getRentalQueryOptions(rentalId),
    ...queryConfig,
  });
};
