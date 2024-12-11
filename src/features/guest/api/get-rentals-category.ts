import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getRentalByCategory = ({ categoryId }: { categoryId: string }) => {
  return api.get(`/category-rentals/${categoryId}`);
};

export const getRentalByCategoryQueryOptions = (categoryId: string) => {
  return queryOptions({
    queryKey: ['rental-category', categoryId],
    queryFn: () => getRentalByCategory({ categoryId }),
  });
};

export type UseRentalByCategoryOptions = {
  categoryId: string;
  queryConfig?: QueryConfig<typeof getRentalByCategoryQueryOptions>;
};

export const useGetRentalByCategory = ({
  categoryId,
  queryConfig,
}: UseRentalByCategoryOptions) => {
  return useQuery({
    ...getRentalByCategoryQueryOptions(categoryId),
    ...queryConfig,
  });
};
