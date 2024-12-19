import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthLayout } from '../../../components/layouts/auth-layout';
import { LoginForm } from '@/features/auth/components/login-form';
import { paths } from '@/config/paths';
import { useNotifications } from '@/components/ui/notifications';
import { useUserStore } from '@/store/user-store';
import { useUser } from '@/lib/auth';

export const LoginRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  const { addNotification } = useNotifications();
  const { setIsAuthenticated } = useUserStore();
  const user = useUser();
  const role = user?.data?.role?.name;
  return (
    <AuthLayout title="">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-success dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
              <LoginForm
                onSuccess={() => {
                  navigate(
                    `${
                      redirectTo
                        ? `${redirectTo}`
                        : role === 'owner'
                          ? paths.app.owner.dashboard.getHref()
                          : role === 'admin'
                            ? paths.app.admin.dashboard.getHref()
                            : paths.home.getHref()
                    }`,
                    {
                      replace: true,
                    },
                  );
                  setIsAuthenticated(true);
                  addNotification({
                    type: 'success',
                    title: 'Login Successful',
                  });
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};
