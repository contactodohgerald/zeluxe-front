import { ContentLayout } from '@/components/layouts';
import { FormSearch } from '@/components/ui/dashboard/search/form-search';
import { GetRentalsList } from '@/features/guest/component/get-rentals-list';
import { Card } from 'antd';

export const RentalsRoute = () => {
  return (
    <ContentLayout title="Rentals" component={<FormSearch />}>
      <Card className="mt-4">
        <GetRentalsList />
      </Card>
    </ContentLayout>
  );
};
