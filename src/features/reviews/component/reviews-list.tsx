import { Spinner } from '@/components/ui/spinner';
import { useRentalReviews } from '../api/get-reviews';
import { Card } from 'antd';
import { ReviewsCard } from '@/components/ui/dashboard/cards';

export const RentalReviewsList = () => {
  const rentalReviewsQuery = useRentalReviews({});

  if (rentalReviewsQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const rentalReviews = rentalReviewsQuery?.data?.data;

  if (!rentalReviews || rentalReviews.length === 0) {
    return (
      <Card className="flex justify-center">
        <p>You have no reviews Yet</p>
      </Card>
    );
  }

  return <ReviewsCard rentalReviews={rentalReviews} />;
};
