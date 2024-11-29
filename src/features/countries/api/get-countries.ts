import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Country } from '@/types/api';

export const getSates = (): Promise<{ data: Country[] }> => {
  return api.get('/countries');
};

export const getCountriesQueryOptions = () => {
  return queryOptions({
    queryKey: ['countries'],
    queryFn: () => getSates(),
  });
};

type UseCountriesOptions = {
  queryConfig?: QueryConfig<typeof getCountriesQueryOptions>;
};

export const useCountries = ({
  queryConfig = {},
}: UseCountriesOptions = {}) => {
  return useQuery({
    ...getCountriesQueryOptions(),
    ...queryConfig,
  });
};
