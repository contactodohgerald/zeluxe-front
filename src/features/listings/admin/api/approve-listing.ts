import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const approveListing = ({ listingId }: { listingId: string }) => {
  return api.patch(`/admin/approve/listing/${listingId}`);
};

type UseApproveListingOptions = {
  mutationConfig?: MutationConfig<typeof approveListing>;
};

export const useApproveListing = ({
  mutationConfig,
}: UseApproveListingOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.refetchQueries({
        queryKey: ['admin-listings'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: approveListing,
  });
};