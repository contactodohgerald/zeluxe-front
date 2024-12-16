import { api } from '@/lib/api-client';
import { registerInputSchema } from '@/lib/auth';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

export type registerOwnerInput = z.infer<typeof registerInputSchema>;

export const registerOwner = ({
  data,
}: {
  data: registerOwnerInput;
}): Promise<registerOwnerInput> => {
  return api.post('/auth/register-owner', data);
};

type UseRegisterOwnerOptions = {
  mutationConfig?: MutationConfig<typeof registerOwner>;
};

export const useRegisterOwner = ({
  mutationConfig,
}: UseRegisterOwnerOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['register-owner'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: registerOwner,
  });
};
