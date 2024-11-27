import { ContentLayout } from '@/components/layouts';
import { ReviewsCard } from '@/components/ui/dashboard/cards';

export const ReviewsRoute = () => {
  return (
    <ContentLayout title="Reviews" className="lg:text-center">
      <div className="mt-4 grid grid-cols-1 gap-x-[2.05rem] gap-y-[1.6rem] pb-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[3.05rem]">
        <ReviewsCard />
      </div>
    </ContentLayout>
  );
};

// w-[18.64rem]
