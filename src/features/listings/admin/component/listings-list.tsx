import { Spinner } from '@/components/ui/spinner';
import { useAdminListings } from '../api/get-listings';
import { Card } from 'antd';
import { MyListingsTabs } from '@/components/ui/dashboard/tabs';

export const ListingsList = () => {
  const listingsQuery = useAdminListings({});

  if (listingsQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const listings = listingsQuery?.data?.data

  if (!listings) {
    return (
      <Card>
        <p>You have no Listings Yet</p>
      </Card>
    );
  }

  return (
    <Card className="mt-4">
      <MyListingsTabs listings={listings as any} />
    </Card>
  );
};
