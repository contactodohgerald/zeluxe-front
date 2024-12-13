import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const confirmBookingPayment = ({ bookingId }: { bookingId: string }) => {
  return api.patch(`/confirm-booking-payment/${bookingId}`);
};

type UseConfirmBookingPaymentOptions = {
  mutationConfig?: MutationConfig<typeof confirmBookingPayment>;
};

export const useConfirmBookingPayment = ({
  mutationConfig,
}: UseConfirmBookingPaymentOptions = {}) => {
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
    mutationFn: confirmBookingPayment,
  });
};
