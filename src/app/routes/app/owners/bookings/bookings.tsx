import { ContentLayout } from '@/components/layouts';
import { FormSearch } from '@/components/ui/dashboard/search/form-search';
import { BookingsList } from '@/features/ bookings/owners/component/bookings-list';

export const BookingsRoute = () => {
  return (
    <ContentLayout title="My Bookings" component={<FormSearch />}>
      <BookingsList />
    </ContentLayout>
  );
};
