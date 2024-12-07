import { ContentLayout } from '@/components/layouts';
import { ProfileList } from '@/features/users/component/profile-list';

export const ProfileRoute = () => {
  return (
    <ContentLayout title="">
      <ProfileList />
    </ContentLayout>
  );
};
