import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { api } from '@/lib/api-client';
import { MutationConfig } from '@/lib/react-query';
import { Verify } from '@/types/api';

export const sendOtpInputSchema = z.object({
  email: z.string().email('Invalid email address').optional(),
  type: z.string().optional(),
  otp: z.string().min(5, 'OTP must be at least 5 characters').optional(),
});

export type VerifyOtpInput = z.infer<typeof sendOtpInputSchema>;

export const verifyOtp = ({
  data,
}: {
  data: VerifyOtpInput;
}): Promise<Verify> => {
  return api.post(`/auth/verify`, data);
};

type UseVerifyOtpOptions = {
  mutationConfig?: MutationConfig<typeof verifyOtp>;
};

export const useSendVerification = ({
  mutationConfig,
}: UseVerifyOtpOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    onError: (error) => {
      console.error('Mutation error:', error);
    },
    ...restConfig,
  });
};
