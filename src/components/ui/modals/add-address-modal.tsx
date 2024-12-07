import { Form, Input } from '../form';
import { Button } from '../button';
import { useCountries } from '@/features/countries/api/get-countries';
import {
  createAddressInputSchema,
  useCreateAddress,
} from '@/features/address/api/create-address';
import { Select } from '../form/select';
import { useStates } from '@/features/states/api/get-states';
import { useNotifications } from '../notifications';
export type ModalFormProps = {
  children?: React.ReactNode;
  IsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddAddressForm = ({ IsOpen, setIsOpen }: ModalFormProps) => {
  const countryQuery = useCountries({});
  const stateQuery = useStates({});
  const countries = countryQuery?.data?.data;
  const states = stateQuery?.data?.data;
  const { addNotification } = useNotifications();
  const createAddressMutation = useCreateAddress({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Address Created Successfully',
        });
        setIsOpen(false);
      },
      onError: () => {
        addNotification({
          type: 'error',
          title: 'Oops Something went wrong.',
        });
      },
    },
  });

  if (!IsOpen) return null;
  return (
    <div className="relative max-h-full w-full max-w-2xl p-4">
      {/* <!-- Modal content --> */}
      <div className="relative overflow-y-auto rounded-lg bg-white shadow">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Create Address
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200"
          >
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* <!-- Modal body --> */}
        <div className="space-y-4 p-4 md:p-5">
          <Form
            onSubmit={(values) => {
              createAddressMutation.mutate({ data: values });
            }}
            schema={createAddressInputSchema}
          >
            {({ register, formState }) => (
              <>
                <Select
                  label="Country"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 bg-transparent p-2.5 text-sm text-secondary outline-none focus:border-primary focus:ring-primary"
                  error={formState.errors['country_id']}
                  registration={register('country_id')}
                  options={
                    countryQuery.isLoading || !countries
                      ? []
                      : countries.map((country) => ({
                          label: country?.name,
                          value: country?.id,
                        }))
                  }
                />
                <Select
                  label="State"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 bg-transparent p-2.5 text-sm text-secondary outline-none focus:border-primary focus:ring-primary"
                  registration={register('state_id')}
                  error={formState.errors['state_id']}
                  options={
                    stateQuery.isLoading || !states
                      ? []
                      : states.map((state) => ({
                          label: state?.name,
                          value: state?.id,
                        }))
                  }
                />
                <div className="grid grid-cols-2 gap-x-4">
                  <Input
                    type="text"
                    label="Street No"
                    registration={register('street_no')}
                    error={formState.errors['street_no']}
                  />
                  <Input
                    type="text"
                    label="Nearest Landmark"
                    registration={register('nearest_landmark')}
                    error={formState.errors['nearest_landmark']}
                  />
                </div>
                <div className="grid grid-cols-3 gap-x-4">
                  <Input
                    type="text"
                    label="Address"
                    registration={register('address')}
                    error={formState.errors['address']}
                  />
                  <Input
                    type="text"
                    label="City"
                    registration={register('city')}
                    error={formState.errors['city']}
                  />
                  <Input
                    type="text"
                    label="Zip Code"
                    registration={register('zip_code')}
                    error={formState.errors['zip_code']}
                  />
                </div>

                <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
                  <Button
                    isLoading={createAddressMutation.isPending}
                    type="submit"
                    className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-success focus:outline-none focus:ring-4 focus:ring-primary dark:focus:ring-primary"
                  >
                    submit
                  </Button>
                  <button
                    type="button"
                    className="ms-3 rounded-lg border border-gray-200 bg-light px-5 py-2.5 text-sm font-medium text-primary hover:bg-gray-100 hover:text-grey-5 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    cancel
                  </button>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};
