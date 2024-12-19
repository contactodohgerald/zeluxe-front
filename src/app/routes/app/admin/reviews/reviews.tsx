import { ContentLayout } from '@/components/layouts';
import { RentalReviewsList } from '@/features/reviews/admin/component/reviews-list';

export const AdminReviewsRoute = () => {
  return (
    <ContentLayout title="Reviews" className="lg:text-center">
      <div className="mt-4 grid grid-cols-1 gap-x-[2.05rem] gap-y-[1.6rem] pb-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[3.05rem]">
        <RentalReviewsList />
      </div>
    </ContentLayout>
  );
};
