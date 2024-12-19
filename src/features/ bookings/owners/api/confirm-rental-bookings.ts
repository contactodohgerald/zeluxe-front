import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const confirmRentalBooking = ({ bookingId }: { bookingId: string }) => {
  return api.patch(`/confirm-booking/${bookingId}`);
};

type UseConfirmRentalBookingOptions = {
  mutationConfig?: MutationConfig<typeof confirmRentalBooking>;
};

export const useConfirmRentalBooking = ({
  mutationConfig,
}: UseConfirmRentalBookingOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.refetchQueries({
        queryKey: ['rental-bookings'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: confirmRentalBooking,
  });
};
