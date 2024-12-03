import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';
import { getAddressQueryOptions } from './get-address';

export const createAddressInputSchema = z.object({
  country_id: z.string(),
  state_id: z.string(),
  street_no: z.string(),
  nearest_landmark: z.string(),
  address: z.string(),
  city: z.string(),
  zip_code: z.string(),
});

export type createAddressInput = z.infer<typeof createAddressInputSchema>;

export const createAddress = ({ data }: { data: createAddressInput }) => {
  return api.post('/address', data);
};

type UseCreateAddressOptions = {
  mutationConfig?: MutationConfig<typeof createAddress>;
};

export const useCreateAddress = ({
  mutationConfig,
}: UseCreateAddressOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getAddressQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createAddress,
  });
};
