import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export type FilterType = {
  data: any;
  location: string;
  category: string;
  min_price: string;
  max_price: string;
  keyword: string;
  bedrooms: string;
};
export const filterRentalInputSchema = z.object({
  location: z.string().optional(),
  category: z.string().optional(),
  min_price: z.string().optional(),
  max_price: z.string().optional(),
  keyword: z.string().min(3, 'keyword field is required'),
  bedrooms: z.string().optional(),
});

export type filterRentalInput = z.infer<typeof filterRentalInputSchema>;

export const filterRentals = ({
  data,
}: {
  data: filterRentalInput;
}): Promise<FilterType> => {
  return api.post('/filter-my-rentals', data);
};

type UseFilterInputOptions = {
  mutationConfig?: MutationConfig<typeof filterRentals>;
};

export const useFilterRental = ({
  mutationConfig,
}: UseFilterInputOptions = {}) => {
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
    mutationFn: filterRentals,
  });
};
