import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getAdminListing = ({ listingId }: { listingId: string }) => {
  return api.get(`/admin/listing/${listingId}`);
};

export const getListingQueryOptions = (listingId: string) => {
  return queryOptions({
    queryKey: ['admin-listings', listingId],
    queryFn: () => getAdminListing({ listingId }),
  });
};

export type UseListingOptions = {
  listingId: string;
  queryConfig?: QueryConfig<typeof getListingQueryOptions>;
};

export const useAdminListing = ({
  listingId,
  queryConfig,
}: UseListingOptions) => {
  return useQuery({
    ...getListingQueryOptions(listingId),
    ...queryConfig,
  });
};
