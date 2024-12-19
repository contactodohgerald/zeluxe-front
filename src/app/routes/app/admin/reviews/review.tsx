import { ContentLayout } from '@/components/layouts';
import { Spinner } from '@/components/ui/spinner';
import { useAdminReview } from '@/features/reviews/admin/api/get-review';
import { ReviewView } from '@/features/reviews/admin/component/review-view';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';

export const AdminReviewRoute = () => {
  const params = useParams();
  const reviewId = params.reviewId as string;
  const reviewQuery = useAdminReview({ reviewId });

  if (reviewQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <ContentLayout title="">
      <Card className="mb-20 mt-2 h-full w-full border bg-white shadow-md">
        <ReviewView reviewId={reviewId} />
      </Card>
    </ContentLayout>
  );
};
