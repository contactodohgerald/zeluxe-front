import { ContentLayout } from '@/components/layouts';
import { Spinner } from '@/components/ui/spinner';
import { useRentalBooking } from '@/features/ bookings/api/get-rental-booking';
import { BookingView } from '@/features/ bookings/component/booking-view';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';

export const BookingRoute = () => {
  const params = useParams();
  const bookingId = params.bookingId as string;
  const bookingQuery = useRentalBooking({ bookingId });

  if (bookingQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <ContentLayout title="Booking Details">
      <Card className="mb-20 mt-8 h-full w-full border bg-white shadow-md">
        <BookingView bookingId={bookingId} />
      </Card>
    </ContentLayout>
  );
};
