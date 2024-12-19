import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getReview = ({ reviewId }: { reviewId: string }) => {
  return api.get(`/admin/show-review/${reviewId}`);
};

export const getReviewQueryOptions = (reviewId: string) => {
  return queryOptions({
    queryKey: ['admin-reviews', reviewId],
    queryFn: () => getReview({ reviewId }),
  });
};

export type UseReviewOptions = {
  reviewId: string;
  queryConfig?: QueryConfig<typeof getReviewQueryOptions>;
};

export const useAdminReview = ({ reviewId, queryConfig }: UseReviewOptions) => {
  return useQuery({
    ...getReviewQueryOptions(reviewId),
    ...queryConfig,
  });
};
