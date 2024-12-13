import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { Listing } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import { getListingQueryOptions } from './get-listing';

export const updateListingInputSchema = z.object({
  category_id: z.string({ required_error: 'category is required' }),
  name: z.string({ required_error: 'name is required' }),
  listing_type: z.string(),
  price: z.string({ required_error: 'price is required' }),
  discount: z.number().optional(),
  qty: z.number().optional(),
  cycle: z.string(),
  description: z.string({ required_error: 'description is required' }),
  address_id: z.string(),
  listing_images: z.array(z.string()).optional(),
  listing_features: z
    .object({ name: z.string(), value: z.string().or(z.number()) })
    .array()
    .optional(),
});

export type UpdateListingInput = z.infer<typeof updateListingInputSchema>;

export const updateListing = ({
  data,
  listingId,
}: {
  data: UpdateListingInput;
  listingId: string;
}): Promise<Listing> => {
  return api.patch(`/listing/${listingId}`, data);
};

type UseUpdateListingOptions = {
  mutationConfig?: MutationConfig<typeof updateListing>;
};

export const useUpdateListing = ({
  mutationConfig,
}: UseUpdateListingOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (data, ...args) => {
      queryClient.refetchQueries({
        queryKey: getListingQueryOptions(data.id).queryKey,
      });
      onSuccess?.(data, ...args);
    },
    ...restConfig,
    mutationFn: updateListing,
  });
};
