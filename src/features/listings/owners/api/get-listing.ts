import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getListing = ({ listingId }: { listingId: string }) => {
  return api.get(`/listing/${listingId}`);
};

export const getListingQueryOptions = (listingId: string) => {
  return queryOptions({
    queryKey: ['listings', listingId],
    queryFn: () => getListing({ listingId }),
  });
};

export type UseListingOptions = {
  listingId: string;
  queryConfig?: QueryConfig<typeof getListingQueryOptions>;
};

export const useListing = ({ listingId, queryConfig }: UseListingOptions) => {
  return useQuery({
    ...getListingQueryOptions(listingId),
    ...queryConfig,
  });
};
