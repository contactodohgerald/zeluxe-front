import { ContentLayout } from '@/components/layouts';
import { FormSearch } from '@/components/ui/dashboard/search/form-search';
import { ListingsList } from '@/features/listings/admin/component/listings-list';

export const MyAdminListingRoute = () => {
  return (
    <ContentLayout title="My Listings" component={<FormSearch />}>
      <ListingsList />
    </ContentLayout>
  );
};
