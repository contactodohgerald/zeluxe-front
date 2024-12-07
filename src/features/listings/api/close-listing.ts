import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const closeListing = ({ listingId }: { listingId: string }) => {
  return api.patch(`/close/listing/${listingId}`);
};

type UseCloseListingOptions = {
  mutationConfig?: MutationConfig<typeof closeListing>;
};

export const useCloseListing = ({
  mutationConfig,
}: UseCloseListingOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.refetchQueries({
        queryKey: ['close-listing'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: closeListing,
  });
};
