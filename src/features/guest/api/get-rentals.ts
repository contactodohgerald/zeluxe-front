import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Rental } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRentals = (): Promise<{ data: Rental[] }> => {
  return api.get('/rentals');
};

export const getRentalsQueryOptions = () => {
  return queryOptions({
    queryKey: ['rentals'],
    queryFn: () => getRentals(),
  });
};

type UseRentalsOptions = {
  queryConfig?: QueryConfig<typeof getRentalsQueryOptions>;
};

export const useRentals = ({ queryConfig = {} }: UseRentalsOptions = {}) => {
  return useQuery({
    ...getRentalsQueryOptions(),
    ...queryConfig,
  });
};
