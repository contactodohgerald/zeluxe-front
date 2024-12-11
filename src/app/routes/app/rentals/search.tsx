import { ContentLayout } from '@/components/layouts';
import { GetSearchList } from '@/features/guest/component/get-search-list';
import { Card } from 'antd';

export const SearchRentalsRoute = () => {
  return (
    <ContentLayout title="Search Result">
      <Card className="mt-4">
        <GetSearchList />
      </Card>
    </ContentLayout>
  );
};
