import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { Select } from '@/components/ui/form/select';
import { useNotifications } from '@/components/ui/notifications';
import { paths } from '@/config/paths';
import { useCountries } from '@/features/countries/api/get-countries';
import { useStates } from '@/features/states/api/get-states';
import { registerInputSchema, useRegister } from '@/lib/auth';
import { formatErrors } from '@/lib/utils';
import { useUserStore } from '@/store/user-store';

import { Link, useSearchParams } from 'react-router-dom';

type RegisterFormProps = {
  onSuccess: () => void;
};
export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const registering = useRegister({ onSuccess });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  const statesQuery = useStates({});
  const countriesQuery = useCountries({});
  const { addNotification } = useNotifications();

  return (
    <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 md:max-w-xl xl:p-0">
      <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-success dark:text-white md:text-2xl">
          Register your account
        </h1>
        <Form
          onSubmit={(values) => {
            useUserStore.getState().setEmail(values.email);
            registering.mutate(values, {
              mutationConfig: {
                onSuccess() {
                  addNotification({
                    type: 'success',
                    title: 'Success',
                    message: 'Registration Successful',
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
          schema={registerInputSchema}
          options={{ shouldUnregister: true }}
          className="space-y-4 md:space-y-6"
        >
          {({ register, formState }) => (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
                <div>
                  <Input
                    type="text"
                    label="First Name"
                    error={formState.errors['first_name']}
                    registration={register('first_name')}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    label="Last Name"
                    error={formState.errors['last_name']}
                    registration={register('last_name')}
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    label="Email"
                    error={formState.errors['email']}
                    registration={register('email')}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    label="Address"
                    error={formState.errors['address']}
                    registration={register('address')}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    label="Phone Number"
                    error={formState.errors['phone']}
                    registration={register('phone')}
                  />
                </div>
                <div>
                  <Select
                    label="State"
                    error={formState.errors['state_id']}
                    registration={register('state_id')}
                    options={
                      statesQuery.isLoading || !statesQuery.data?.data
                        ? []
                        : statesQuery?.data?.data?.map((state) => ({
                            label: state.name,
                            value: state.id,
                          }))
                    }
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    label="Password"
                    error={formState.errors['password']}
                    registration={register('password')}
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    label="Confirm password"
                    error={formState.errors['password_confirmation']}
                    registration={register('password_confirmation')}
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <Select
                    label="Country"
                    error={formState.errors['country_id']}
                    registration={register('country_id')}
                    options={
                      countriesQuery.isLoading || !countriesQuery.data?.data
                        ? []
                        : countriesQuery?.data?.data?.map((country) => ({
                            label: country.name,
                            value: country.id,
                          }))
                    }
                  />
                </div>
              </div>

              {/* <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{' '}
                        <a
                          className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div> */}
              <Button
                isLoading={registering.isPending}
                type="submit"
                className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-success px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4"
              >
                Create an account
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  to={paths.auth.login.getHref(redirectTo)}
                  className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                >
                  Login here
                </Link>
              </p>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
