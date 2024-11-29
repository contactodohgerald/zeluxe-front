import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Address } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getAddress = (): Promise<{ data: Address[] }> => {
  return api.get(`/address`);
};

export const getAddressQueryOptions = () => {
  return queryOptions({
    queryKey: ['address'],
    queryFn: () => getAddress(),
  });
};

type UseAddressOptions = {
  queryConfig?: QueryConfig<typeof getAddressQueryOptions>;
};

export const useAddress = ({ queryConfig = {} }: UseAddressOptions = {}) => {
  return useQuery({
    ...getAddressQueryOptions(),
    ...queryConfig,
  });
};
