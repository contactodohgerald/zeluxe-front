import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRentalBooking = ({ bookingId }: { bookingId: string }) => {
  return api.get(`/show-rental-booking/${bookingId}`);
};

export const getRentalBookingQueryOptions = (bookingId: string) => {
  return queryOptions({
    queryKey: ['rental-bookings', bookingId],
    queryFn: () => getRentalBooking({ bookingId }),
  });
};

export type UseRentalBookingOptions = {
  bookingId: string;
  queryConfig?: QueryConfig<typeof getRentalBookingQueryOptions>;
};

export const useRentalBooking = ({
  bookingId,
  queryConfig,
}: UseRentalBookingOptions) => {
  return useQuery({
    ...getRentalBookingQueryOptions(bookingId),
    ...queryConfig,
  });
};
