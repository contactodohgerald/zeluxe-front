import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const publishListing = ({ listingId }: { listingId: string }) => {
  return api.patch(`/publish/listing/${listingId}`);
};

type UsePublishListingOptions = {
  mutationConfig?: MutationConfig<typeof publishListing>;
};

export const usePublishListing = ({
  mutationConfig,
}: UsePublishListingOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.refetchQueries({
        queryKey: ['publish-listing'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: publishListing,
  });
};
