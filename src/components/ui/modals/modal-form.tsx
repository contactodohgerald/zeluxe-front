// import { useState } from 'react';
import { Form, Input } from '../form';
import { z } from 'zod';
import { Button } from '../button';
import { SubmitHandler } from 'react-hook-form';
export type ModalFormProps = {
  children?: React.ReactNode;
  IsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAddCounter: (value: any) => void;
};
export const formSchema = z.object({
  listingName: z.string({ required_error: 'listing name is required' }),
  listingValue: z.union([
    z.string({ required_error: 'listing value is required' }),
    z.number(),
  ]),
});

type formValues = z.infer<typeof formSchema>;
export const ModalForm = ({
  IsOpen,
  setIsOpen,
  onAddCounter,
}: ModalFormProps) => {
  // const [formData, setFormData] = useState({
  //   listingName: '',
  //   listingValue: '',
  // });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit: SubmitHandler<formValues> = (values: object) => {
    onAddCounter(values);
    setIsOpen(false);
    console.log(values);
  };

  if (!IsOpen) return null;
  return (
    <div className="relative max-h-full w-full max-w-2xl p-4">
      {/* <!-- Modal content --> */}
      <div className="relative rounded-lg bg-white shadow">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Add Listing Features
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
            onSubmit={(values) => handleSubmit(values)}
            schema={z.object({
              listingName: z.string().min(5, 'listing name is required'),
              listingValue: z
                .string()
                .min(1, 'listing value is required')
                .or(z.number().nonnegative('listing value must be a number')),
            })}
          >
            {({ register, formState }) => (
              <>
                <Input
                  type="text"
                  label="Listing Name"
                  registration={register('listingName')}
                  // onChange={handleInputChange}
                  error={formState.errors['listingName']}
                />
                <Input
                  type="text"
                  label="Listing Value"
                  registration={register('listingValue')}
                  // onChange={handleInputChange}
                  error={formState.errors['listingValue']}
                />

                <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
                  <Button
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
