import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const deleteListing = ({ listingId }: { listingId: string }) => {
  return api.delete(`/listing/${listingId}`);
};

type UseDeleteListingOptions = {
  mutationConfig?: MutationConfig<typeof deleteListing>;
};

export const useDeleteListing = ({
  mutationConfig,
}: UseDeleteListingOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['listings'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: deleteListing,
  });
};
