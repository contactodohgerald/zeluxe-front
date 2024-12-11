import { z } from 'zod';
import { filterRentalInputSchema } from './filter-rentals';
import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export type searchType = {
  data: any;
  location: string;
  category: string;
  keyword: string;
};

export const searchRentalsInputSchema = z.object({
  location: z.string().optional(),
  category: z.string().optional(),
  keyword: z.string().min(3, { message: '' }),
});

export type searchRentalInput = z.infer<typeof filterRentalInputSchema>;

export const searchRentals = ({
  data,
}: {
  data: searchRentalInput;
}): Promise<searchType> => {
  return api.post('/search-rentals', data);
};

export type UseSearchInputOptions = {
  mutationConfig?: MutationConfig<typeof searchRentals>;
};

export const useSearchRental = ({
  mutationConfig,
}: UseSearchInputOptions = {}) => {
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
    mutationFn: searchRentals,
  });
};
