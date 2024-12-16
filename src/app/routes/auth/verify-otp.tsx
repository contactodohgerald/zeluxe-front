import { AuthLayout } from '@/components/layouts/auth-layout';
import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { useNotifications } from '@/components/ui/notifications';
import { paths } from '@/config/paths';
import { useRef, useState } from 'react';
import {
  sendOtpInputSchema,
  useSendVerification,
} from '@/features/verify/api/create-otp';
import { useUserStore } from '@/store/user-store';
import { Verify } from '@/types/api';
import { useNavigate } from 'react-router-dom';
import { formatErrors } from '@/lib/utils';

export const VerifyOtpRoute = () => {
  const { addNotification } = useNotifications();
  const navigate = useNavigate();

  const redirectTo = paths.auth.login.getHref();
  const email = useUserStore((state) => state.email);
  const [otp, setOtp] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const verifyRegistrationMutation = useSendVerification({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'OTP verified successfully',
        });

        navigate(redirectTo);
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error?.message,
          message: formattedErrors,
        });
      },
    },
  });

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const otpArray = otp.split('');
    otpArray[index] = value;
    setOtp(otpArray.join(''));
    // console.log(value);
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (!email || otp.length !== 5) {
      addNotification({
        type: 'error',
        title: 'Invalid OTP. Please enter the full OTP',
      });
      return;
    }
    const payload: Verify = {
      email: email,
      type: 'account_activation',
      otp: otp,
    };

    verifyRegistrationMutation.mutate({ data: payload });
  };

  return (
    <AuthLayout title="">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative mx-auto w-full max-w-lg rounded-2xl bg-white px-6 pb-9 pt-10 shadow-xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-3xl font-semibold">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            {/* <div> */}
            <Form
              id="verify-account"
              onSubmit={handleSubmit}
              schema={sendOtpInputSchema}
            >
              {({ formState }) => (
                <>
                  <div className="flex flex-col space-y-16">
                    <div className="mx-auto flex w-full max-w-sm flex-row items-center justify-between">
                      {[...Array(5)].map((_, index) => (
                        <Input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          className="flex h-16 w-16 items-center justify-center rounded-xl border border-gray-200 bg-white text-center text-lg outline-none focus:border focus:border-primary focus:bg-gray-50 focus:ring-1"
                          type="text"
                          maxLength={1}
                          aria-label={`OTP digit ${index + 1}`}
                          error={formState.errors['otp']}
                          value={otp[index]}
                          // registration={register('otp')}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                        />
                      ))}
                    </div>
                    <div className="flex flex-col space-y-5">
                      <div>
                        <Button
                          form="verify-account"
                          isLoading={verifyRegistrationMutation.isPending}
                          type="submit"
                          className="flex w-full flex-row items-center justify-center rounded-xl border border-none bg-success py-5 text-center text-sm text-white shadow-sm outline-none"
                        >
                          Verify Account
                        </Button>
                      </div>

                      {/* <div className="flex flex-row items-center justify-center space-x-1 text-sm font-medium text-center text-gray-500">
                          <p>Didn't recieve code?</p>{' '}
                          <a
                            className="flex flex-row items-center text-blue-600"
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Resend
                          </a>
                        </div> */}
                    </div>
                  </div>
                </>
              )}
            </Form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
