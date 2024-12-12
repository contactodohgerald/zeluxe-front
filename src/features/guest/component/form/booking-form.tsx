import { Form, Input, Textarea } from '@/components/ui/form';
import {
  createRentalBookingInputSchema,
  useCreateRentalBooking,
} from '../../api/create-rental-booking';
import { Button } from '@/components/ui/button';
import { SetStateAction } from 'react';
import { useNotifications } from '@/components/ui/notifications';
import { formatErrors } from '@/lib/utils';
export type BookingFormProps = {
  rentalId: string;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
export const BookingForm = ({ rentalId, setIsOpen }: BookingFormProps) => {
  const { addNotification } = useNotifications();
  //   console.log('beforesubmitting', rentalId);
  const bookingMutation = useCreateRentalBooking({
    mutationConfig: {
      onSuccess() {
        addNotification({
          type: 'success',
          title: 'success',
          message: 'Booking created successfully',
        });
        setIsOpen(false);
      },
      onError(error) {
        const formError = formatErrors(error);
        addNotification({
          type: 'error',
          title: error.message,
          message: formError,
        });
      },
    },
  });
  const handleClose = () => setIsOpen(false);
  return (
    <div className="relative max-h-full w-full max-w-2xl p-4">
      {/* <!-- Modal content --> */}
      <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
        {/* <!-- Modal header --> */}
        <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
          <h3 className="text-xl font-semibold text-secondary">
            Create Booking
          </h3>
          <button
            onClick={handleClose}
            type="button"
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
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
        <Form
          className=""
          schema={createRentalBookingInputSchema}
          onSubmit={(values) => {
            console.log('submit', rentalId);
            const bookingData = {
              ...values,
              rental_id: rentalId,
            };
            bookingMutation.mutate({ data: bookingData });
          }}
        >
          {({ register, formState }) => (
            <>
              {/* Modal body  */}
              <div className="space-y-4 p-4 md:p-5">
                <div className="flex w-full gap-3">
                  <div className="w-full">
                    <Input
                      label="State Date"
                      type="date"
                      className="block w-full"
                      error={formState.errors['start_date']}
                      registration={register('start_date')}
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      label="EndDate"
                      type="date"
                      className="block w-full"
                      error={formState.errors['end_date']}
                      registration={register('end_date')}
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    label="notes"
                    className=""
                    registration={register('notes')}
                    error={formState.errors['notes']}
                  />
                </div>
              </div>
              {/* Modal body End */}
              {/* <!-- Modal footer --> */}
              <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
                <Button isLoading={bookingMutation.isPending} type="submit">
                  Create Booking
                </Button>
                <Button
                  type="button"
                  disabled={bookingMutation.isPending}
                  onClick={handleClose}
                  className="ms-3 border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-secondary hover:bg-gray-100 hover:text-grey-5 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
