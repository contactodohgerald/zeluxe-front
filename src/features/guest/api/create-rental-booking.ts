import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export type rentalBookingType = {
  data: any;
  rental_id: string;
  start_date: string;
  end_date: string;
  notes: string;
};

export const createRentalBookingInputSchema = z.object({
  rental_id: z.string().default(''),
  start_date: z.string(),
  end_date: z.string(),
  notes: z.string().optional(),
});

export type createRentalBookingInput = z.infer<
  typeof createRentalBookingInputSchema
>;

export const createRentalBooking = ({
  data,
}: {
  data: createRentalBookingInput;
}): Promise<rentalBookingType> => {
  return api.post('/book-rental', data);
};

export type UseCreateRentalBookingInputOptions = {
  mutationConfig?: MutationConfig<typeof createRentalBooking>;
};

export const useCreateRentalBooking = ({
  mutationConfig,
}: UseCreateRentalBookingInputOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['rentals'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createRentalBooking,
  });
};
