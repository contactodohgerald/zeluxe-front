import { Outlet } from 'react-router-dom';
import { DashboardLayout } from '../../../components/layouts/dashboard-layout';

export const AppRoot = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export const AppRootErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};
