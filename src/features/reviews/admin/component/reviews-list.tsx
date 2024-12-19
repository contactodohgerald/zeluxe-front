import { Spinner } from '@/components/ui/spinner';
import { Card } from 'antd';
import { ReviewsCard } from '@/components/ui/dashboard/cards';
import { useAdminRentalReviews } from '../api/get-reviews';

export const RentalReviewsList = () => {
  const rentalReviewsQuery = useAdminRentalReviews();
  const rentalReviews = rentalReviewsQuery?.data?.data;

  if (rentalReviewsQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" className="text-primary" />
      </div>
    );
  }

  if (!rentalReviews || rentalReviews.length === 0) {
    return (
      <Card>
        <p>You have no reviews Yet</p>
      </Card>
    );
  }

  return (
    <>
      <ReviewsCard rentalReviews={rentalReviews} />
    </>
  );
};
