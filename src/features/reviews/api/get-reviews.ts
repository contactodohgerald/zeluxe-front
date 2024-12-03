import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { RentalReview } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getReviews = (): Promise<{ data: RentalReview[] }> => {
  return api.get('/rentals-reviews');
};

export const getReviewsQueryOptions = () => {
  return queryOptions({
    queryKey: ['reviews'],
    queryFn: () => getReviews(),
  });
};

type UseReviewsOptions = {
  queryConfig?: QueryConfig<typeof getReviewsQueryOptions>;
};

export const useRentalReviews = ({ queryConfig }: UseReviewsOptions = {}) => {
  return useQuery({
    ...getReviewsQueryOptions(),
    ...queryConfig,
  });
};
