import { ContentLayout } from '@/components/layouts';
import { Spinner } from '@/components/ui/spinner';
import { useRental } from '@/features/guest/api/get-rental';
import { GetRentalView } from '@/features/guest/component/get-rental-view';
import { useParams } from 'react-router-dom';

export const RentalRoute = () => {
  const params = useParams();
  const rentalId = params.rentalId as string;
  const rentalQuery = useRental({ rentalId });

  if (rentalQuery.isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-48">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <ContentLayout title="">
      {/* <div className="w-full h-full mt-2 mb-20 bg-white border shadow-md"> */}
      <GetRentalView rentalId={rentalId} />
      {/* </div> */}
    </ContentLayout>
  );
};
