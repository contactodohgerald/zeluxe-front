import { ContentLayout } from '@/components/layouts';
import { Spinner } from '@/components/ui/spinner';
import { useListing } from '@/features/listings/owners/api/get-listing';
import { ListingView } from '@/features/listings/owners/component/listing-view';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';

export const ListingRoute = () => {
  const params = useParams();
  const listingId = params.listingId as string;
  const listingQuery = useListing({ listingId });

  if (listingQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <ContentLayout title="Edit Listing">
      <Card className="mb-20 mt-2 h-full w-full border bg-white shadow-md">
        <ListingView listingId={listingId} />
      </Card>
    </ContentLayout>
  );
};
