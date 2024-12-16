import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { useNotifications } from '@/components/ui/notifications';
import { paths } from '@/config/paths';
import { loginInputSchema, useLogin } from '@/lib/auth';
import { formatErrors } from '@/lib/utils';
import { Link, useSearchParams } from 'react-router-dom';

type LoginFormProps = {
  onSuccess: () => void;
};
export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin({ onSuccess });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  const { addNotification } = useNotifications();

  return (
    <>
      <Form
        onSubmit={(values) => {
          login.mutate(values, {
            mutationConfig: {
              onSuccess: () => {
                addNotification({
                  type: 'success',
                  title: 'Listing created',
                });
              },
              onError: (error: any) => {
                const formattedErrors = formatErrors(error);
                addNotification({
                  type: 'error',
                  title: `Validation Error`,
                  message: formattedErrors,
                });
              },
            },
          });
        }}
        schema={loginInputSchema}
        className="space-y-4 md:space-y-6"
      >
        {({ register, formState }) => (
          <>
            <div>
              <Input
                type="email"
                label="Email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@company.com"
                error={formState.errors['email']}
                registration={register('email')}
              />
            </div>
            <div>
              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                error={formState.errors['password']}
                registration={register('password')}
              />
            </div>
            <div className="flex items-start justify-end">
              <div className="flex h-5 items-center">
                <div className="text-sm">
                  <Link
                    to={paths.auth.passwordReset.getHref(redirectTo)}
                    className="font-semibold text-black hover:text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
            <Button
              isLoading={login.isPending}
              type="submit"
              className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-success px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4"
            >
              Login an account
            </Button>
          </>
        )}
      </Form>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {/* Already have an account?{' '} */}
        Don't have an account?{' '}
        <Link
          to={paths.auth.chooseAccount.getHref(redirectTo)}
          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
        >
          {/* Login here */}
          Register here
        </Link>
      </p>
    </>
  );
};
