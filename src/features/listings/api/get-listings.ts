import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { getCoookie } from '@/lib/utils';
import { Listing} from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getListings = (): Promise<{ data: Listing[] }> => {
    const token = getCoookie('accessToken')
    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
  return api.get('/listing',config);
};

export const getListingsQueryOptions = () => {
  return queryOptions({
    queryKey: ['listings'],
    queryFn: () => getListings(),
  });
};

type UseListingsOptions = {
  queryConfig?: QueryConfig<typeof getListingsQueryOptions>;
};

export const useListings = ({ queryConfig = {} }: UseListingsOptions = {}) => {
  return useQuery({
    ...getListingsQueryOptions(),
    ...queryConfig,
  });
};
