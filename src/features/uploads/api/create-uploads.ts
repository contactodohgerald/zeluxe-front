import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

const File_SIZE_LIMIT = 5 * 1024 * 1024;
export const createUploadsInputSchema = z.object({
  document: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) =>
            [
              'image/jpeg',
              'image/jpg',
              'image/png',
              'application/pdf',
              'application/msword',
            ].includes(file.type),
          { message: 'Invalid file type. Allowed types: JPG, PNG, PDF, DOC' },
        )
        .refine((file) => file.size <= File_SIZE_LIMIT, {
          message: `File size should not exceed ${File_SIZE_LIMIT / (1024 * 1024)}MB`,
        }),
    )
    .min(1, 'No files selected'),
});

export type createUploadInput = z.infer<typeof createUploadsInputSchema>;

export const createUpload = ({ data }: { data: createUploadInput }) => {
  const formData = new FormData();
  data.document.forEach((file) => {
    // console.log('file', file);
    formData.append(`document`, file);
  });
  return api.post('/storage', formData);
};

type UseCreateUploadsOptions = {
  mutationConfig?: MutationConfig<typeof createUpload>;
};

export const useCreateUpload = ({
  mutationConfig,
}: UseCreateUploadsOptions = {}) => {
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
    mutationFn: createUpload,
  });
};
