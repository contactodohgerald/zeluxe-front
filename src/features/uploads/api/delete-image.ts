import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteUpload = ({ uploadId }: { uploadId: string }) => {
  const imageId = uploadId.split('/').pop();
  return api.delete(`/storage/${imageId}`);
};

type UseDeleteUploadOptions = {
  mutationConfig?: MutationConfig<typeof deleteUpload>;
};

export const useDeleteUpload = ({
  mutationConfig,
}: UseDeleteUploadOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['storage'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: deleteUpload,
  });
};
