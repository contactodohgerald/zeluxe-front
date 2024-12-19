import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRentalBooking = ({ bookingId }: { bookingId: string }) => {
  return api.get(`/admin/show-booking/${bookingId}`);
};

export const getRentalBookingQueryOptions = (bookingId: string) => {
  return queryOptions({
    queryKey: ['admin-bookings', bookingId],
    queryFn: () => getRentalBooking({ bookingId }),
  });
};

export type UseRentalBookingOptions = {
  bookingId: string;
  queryConfig?: QueryConfig<typeof getRentalBookingQueryOptions>;
};

export const useAdminRentalBooking = ({
  bookingId,
  queryConfig,
}: UseRentalBookingOptions) => {
  return useQuery({
    ...getRentalBookingQueryOptions(bookingId),
    ...queryConfig,
  });
};
