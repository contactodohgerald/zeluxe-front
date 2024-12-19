import { Spinner } from '@/components/ui/spinner';
import { Card } from 'antd';
import { useRentalBookings } from '../api/get-rental-bookings';
import { BookingsCards } from './bookings-cards';

export const BookingsList = () => {
  const bookingsQuery = useRentalBookings({});

  if (bookingsQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const bookings = bookingsQuery?.data?.data;

  if (!bookings) {
    return (
      <Card>
        <p>You have no bookings Yet</p>
      </Card>
    );
  }

  return (
    <Card className="mt-4">
      <BookingsCards bookings={bookings as any} />
    </Card>
  );
};
