import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Listing } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getListings = (): Promise<{ data: Listing }> => {
  return api.get('/admin/listing');
};

export const getListingsQueryOptions = () => {
  return queryOptions({
    queryKey: ['admin-listings'],
    queryFn: () => getListings(),
  });
};

type UseListingsOptions = {
  queryConfig?: QueryConfig<typeof getListingsQueryOptions>;
};

export const useAdminListings = ({
  queryConfig = {},
}: UseListingsOptions = {}) => {
  return useQuery({
    ...getListingsQueryOptions(),
    ...queryConfig,
  });
};
