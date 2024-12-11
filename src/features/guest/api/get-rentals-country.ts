import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRentalByCountry = ({ countryId }: { countryId: string }) => {
  return api.get(`/country-rentals/${countryId}`);
};

export const getRentalByCountryQueryOptions = (countryId: string) => {
  return queryOptions({
    queryKey: ['rental-country', countryId],
    queryFn: () => getRentalByCountry({ countryId }),
  });
};

export type UseRentalByCountryOptions = {
  countryId: string;
  queryConfig?: QueryConfig<typeof getRentalByCountryQueryOptions>;
};

export const useGetRentalByCountry = ({
  countryId,
  queryConfig,
}: UseRentalByCountryOptions) => {
  return useQuery({
    ...getRentalByCountryQueryOptions(countryId),
    ...queryConfig,
  });
};
