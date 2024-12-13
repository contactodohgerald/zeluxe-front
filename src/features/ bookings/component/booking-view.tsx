import { Spinner } from '@/components/ui/spinner';
import { Card } from 'antd';
import { useRentalBooking } from '../api/get-rental-booking';
// import userAvatar from '@/assets/images/user_avatar.jpg';
import { formatDate, formatErrors } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useConfirmRentalBooking } from '../api/confirm-rental-bookings';
import { useNotifications } from '@/components/ui/notifications';
import { useConfirmBookingPayment } from '../api/confirm-booking-payment';
export const BookingView = ({ bookingId }: { bookingId: string }) => {
  const { addNotification } = useNotifications();
  const bookingQuery = useRentalBooking({
    bookingId,
  });

  const confirmBooking = useConfirmRentalBooking({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Bookings Confirmed successfully',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error.message,
          message: formattedErrors,
        });
      },
    },
  });
  const confirmBookingPayment = useConfirmBookingPayment({
    mutationConfig: {
      onSuccess: () => {
        addNotification({
          type: 'success',
          title: 'Bookings Payment Confirmed successfully',
        });
      },
      onError: (error) => {
        const formattedErrors = formatErrors(error);
        addNotification({
          type: 'error',
          title: error.message,
          message: formattedErrors,
        });
      },
    },
  });

  const handleConfirmBooking = (id: string) => {
    confirmBooking.mutate({ bookingId: id });
  };
  const handleConfirmBookingPayment = (id: string) => {
    confirmBookingPayment.mutate({ bookingId: id });
  };

  if (bookingQuery.isLoading) {
    <div className="flex h-48 w-full items-center justify-center">
      <Spinner size="lg" />
    </div>;
  }

  const booking = bookingQuery?.data?.data;
  console.log('booking', booking);

  if (!booking || booking?.length === 0) {
    return (
      <Card>
        <p>No booking Available</p>
      </Card>
    );
  }

  return (
    <>
      <section className="relative pt-4">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
          <div className="">
            <div className="flex justify-between">
              <h2 className="font-raleway text-3xl font-bold leading-[1.2rem] tracking-[0.03em]">
                {booking?.rental?.name}
              </h2>
              <div className="flex gap-4">
                {booking?.status === 'confirmed' ? (
                  <Button
                    className="cursor-not-allowed bg-gray-200 text-secondary"
                    disabled={true}
                    isLoading={confirmBooking.isPending}
                    onClick={() => handleConfirmBooking(booking?.id)}
                  >
                    Confirm Booking
                  </Button>
                ) : (
                  <Button
                    isLoading={confirmBooking.isPending}
                    onClick={() => handleConfirmBooking(booking?.id)}
                    className="bg-blue-500"
                  >
                    Confirm Booking
                  </Button>
                )}
                {booking?.status !== 'confirmed' ? (
                  <Button
                    className="cursor-not-allowed bg-gray-200 text-secondary"
                    disabled={true}
                    isLoading={confirmBooking.isPending}
                    onClick={() => handleConfirmBooking(booking?.id)}
                  >
                    Confirm Payment
                  </Button>
                ) : (
                  <Button
                    isLoading={confirmBookingPayment.isPending}
                    onClick={() => handleConfirmBookingPayment(booking?.id)}
                  >
                    Confirm Payment
                  </Button>
                )}
              </div>
            </div>
            <div className="my-8">
              <p className="text-lg font-normal leading-8 text-gray-500">
                {booking?.rental?.description}
              </p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em]">
                Start Date
              </h3>
              <p className="text-lg font-normal leading-8 text-gray-500">
                {formatDate(booking?.start_date)}
              </p>
            </div>
            <div className="flex justify-between">
              <h3 className="font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em]">
                End Date
              </h3>
              <p className="text-lg font-normal leading-8 text-gray-500">
                {formatDate(booking?.end_date)}
              </p>
            </div>
            <div className="flex flex-col items-center justify-between pt-8 max-xl:mx-auto max-xl:max-w-3xl sm:flex-row">
              <p className="py-[1px] text-lg font-normal text-black">
                {booking?.duration}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
