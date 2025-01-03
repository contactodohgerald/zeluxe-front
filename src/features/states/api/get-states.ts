import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { State } from '@/types/api';

export const getStates = (): Promise<{ data: State[] }> => {
  return api.get('/states');
};

export const getStatesQueryOptions = () => {
  return queryOptions({
    queryKey: ['states'],
    queryFn: () => getStates(),
  });
};

type UseStatesOptions = {
  queryConfig?: QueryConfig<typeof getStatesQueryOptions>;
};

export const useStates = ({ queryConfig = {} }: UseStatesOptions = {}) => {
  return useQuery({
    ...getStatesQueryOptions(),
    ...queryConfig,
  });
};
