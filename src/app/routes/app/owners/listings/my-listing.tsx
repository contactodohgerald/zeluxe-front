import { ContentLayout } from '@/components/layouts';
import { FormSearch } from '@/components/ui/dashboard/search/form-search';
import { ListingsList } from '@/features/listings/component/listings-list';

export const MyListingRoute = () => {
  return (
    <ContentLayout title="My Listings" component={<FormSearch />}>
      <ListingsList />
    </ContentLayout>
  );
};
