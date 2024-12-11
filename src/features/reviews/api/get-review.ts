import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getReview = ({ reviewId }: { reviewId: string }) => {
  return api.get(`/rentals-reviews/${reviewId}`);
};

export const getReviewQueryOptions = (reviewId: string) => {
  return queryOptions({
    queryKey: ['reviews', reviewId],
    queryFn: () => getReview({ reviewId }),
  });
};

export type UseReviewOptions = {
  reviewId: string;
  queryConfig?: QueryConfig<typeof getReviewQueryOptions>;
};

export const useReview = ({ reviewId, queryConfig }: UseReviewOptions) => {
  return useQuery({
    ...getReviewQueryOptions(reviewId),
    ...queryConfig,
  });
};
