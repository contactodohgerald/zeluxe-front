import { useListing } from '../api/get-listing';
import { Spinner } from '@/components/ui/spinner';
import { UpdateListing } from './update-listing';
import { Card } from 'antd';

export const ListingView = ({ listingId }: { listingId: string }) => {
  const listingQuery = useListing({
    listingId,
  });

  if (listingQuery.isLoading) {
    <div className="flex h-48 w-full items-center justify-center">
      <Spinner size="lg" />
    </div>;
  }

  const listing = listingQuery?.data?.data;

  if (!listing || listing?.length === 0) {
    return (
      <Card>
        <p>No Listing Available</p>
      </Card>
    );
  }

  return (
    <>
      <UpdateListing listingId={listingId} />
    </>
  );
};
