import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRentalByState = ({ stateId }: { stateId: string }) => {
  return api.get(`/state-rentals/${stateId}`);
};

export const getRentalByStateQueryOptions = (stateId: string) => {
  return queryOptions({
    queryKey: ['rental-state', stateId],
    queryFn: () => getRentalByState({ stateId }),
  });
};

export type UseRentalByStateOptions = {
  stateId: string;
  queryConfig?: QueryConfig<typeof getRentalByStateQueryOptions>;
};

export const useGetRentalByState = ({
  stateId,
  queryConfig,
}: UseRentalByStateOptions) => {
  return useQuery({
    ...getRentalByStateQueryOptions(stateId),
    ...queryConfig,
  });
};
