import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../../../components/layouts/auth-layout';
import { paths } from '@/config/paths';
import { RegisterForm } from '@/features/auth/components/register-form';

export const RegisterRoute = () => {
  const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const redirectTo = searchParams.get('redirectTo');

  return (
    <AuthLayout title="">
      <section className="bg-gray-50 pb-24 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <RegisterForm
            onSuccess={() => {
              navigate(
                // `${redirectTo ? `${redirectTo}` : paths.auth.verify.getHref()}`,
                paths.auth.verify.getHref(),
                {
                  replace: true,
                },
              );
            }}
          />
        </div>
      </section>
    </AuthLayout>
  );
};
