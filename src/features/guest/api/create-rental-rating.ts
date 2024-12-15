import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export type rentalRatingType = {
  // data: any;
  rental_id: string;
  score: number;
};

export const createRentalRatingInputSchema = z.object({
  rental_id: z.string().optional(),
  score: z.number().int().positive().optional(),
});

export type createRentalRatingInput = z.infer<
  typeof createRentalRatingInputSchema
>;

export const createRentalRating = ({
  data,
}: {
  data: createRentalRatingInput;
}): Promise<rentalRatingType> => {
  return api.post('/create-rating', data);
};

export type UseRentalRatingInputOptions = {
  mutationConfig?: MutationConfig<typeof createRentalRating>;
};

export const useCreateRentalRating = ({
  mutationConfig,
}: UseRentalRatingInputOptions = {}) => {
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
    mutationFn: createRentalRating,
  });
};
