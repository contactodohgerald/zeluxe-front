import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { Setting } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getSettings = (): Promise<{ data: Setting }> => {
  return api.get('/get-setting');
};

export const getSettingsQueryOptions = () => {
  return queryOptions({
    queryKey: ['settings'],
    queryFn: () => getSettings(),
  });
};

type UseSettingsOptions = {
  queryConfig?: QueryConfig<typeof getSettingsQueryOptions>;
};

export const useSettings = ({ queryConfig = {} }: UseSettingsOptions = {}) => {
  return useQuery({
    ...getSettingsQueryOptions(),
    ...queryConfig,
  });
};
