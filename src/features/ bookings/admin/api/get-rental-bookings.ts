import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { RentalBooking } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRentalBookings = (): Promise<{ data: RentalBooking }> => {
  return api.get('/admin/bookings');
};

export const getRentalBookingsQueryOptions = () => {
  return queryOptions({
    queryKey: ['admin-bookings'],
    queryFn: () => getRentalBookings(),
  });
};

export type UseRentalBookingsOptions = {
  queryConfig?: QueryConfig<typeof getRentalBookingsQueryOptions>;
};

export const useAdminRentalBookings = ({
  queryConfig = {},
}: UseRentalBookingsOptions = {}) => {
  return useQuery({
    ...getRentalBookingsQueryOptions(),
    ...queryConfig,
  });
};
