import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export type rentalReviewType = {
  rental_id: string;
  comment: string;
};

export const createRentalReviewInputSchmema = z.object({
  rental_id: z.string().optional(),
  comment: z.string().min(5, 'comment must be atleast 5 characters').optional(),
});

export type createRentalReviewInput = z.infer<
  typeof createRentalReviewInputSchmema
>;

export const createRentalReview = ({
  data,
}: {
  data: createRentalReviewInput;
}): Promise<rentalReviewType> => {
  return api.post('/create-review', data);
};

type UseCreateRentalReviewInputOptions = {
  mutationConfig?: MutationConfig<typeof createRentalReview>;
};

export const useCreateRentalReview = ({
  mutationConfig,
}: UseCreateRentalReviewInputOptions = {}) => {
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
    mutationFn: createRentalReview,
  });
};
