import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { RentalReview } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getReviews = (): Promise<{ data: RentalReview[] }> => {
  return api.get('/admin/reviews');
};

export const getReviewsQueryOptions = () => {
  return queryOptions({
    queryKey: ['admin-reviews'],
    queryFn: () => getReviews(),
  });
};

type UseReviewsOptions = {
  queryConfig?: QueryConfig<typeof getReviewsQueryOptions>;
};

export const useAdminRentalReviews = ({
  queryConfig = {},
}: UseReviewsOptions = {}) => {
  return useQuery({
    ...getReviewsQueryOptions(),
    ...queryConfig,
  });
};
