import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { CreateListings } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import { getListingsQueryOptions } from './get-listings';

export const createListingInputSchema = z.object({
  category_id: z.string({ required_error: 'category is required' }),
  name: z.string({ required_error: 'name is required' }),
  price: z.string({ required_error: 'price is required' }),
  discount: z.number().optional(),
  qty: z.number().optional(),
  description: z.string({ required_error: 'description is required' }),
  address_id: z.string(),
  listing_images: z.string().array(),
  listing_features: z
    .object({ name: z.string(), value: z.string().or(z.number()) })
    .array(),
});

export type createListingInput = z.infer<typeof createListingInputSchema>;

export const createListing = ({
  data,
}: {
  data: createListingInput;
}): Promise<CreateListings> => {
  return api.post('/listing', data);
};

type UseCreatelistingOptions = {
  mutationConfig?: MutationConfig<typeof createListing>;
};
export const useCreateListing = ({
  mutationConfig,
}: UseCreatelistingOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getListingsQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createListing,
  });
};
